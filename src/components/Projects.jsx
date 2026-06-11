import React, { useEffect, useRef, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion"
const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)
    useEffect(()=>{
        const updateCardsToShow=()=>{
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length)
            }
            else{
                setCardsToShow(1)
            };
        }
        updateCardsToShow();
        window.addEventListener('resize',updateCardsToShow)
        return () => window.removeEventListener('resize',updateCardsToShow)
    },[])

    const nextProject = () =>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % projectsData.length)
    }
    const prevProject = () =>{
        setCurrentIndex((prevIndex)=> prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        <motion.div
        
        initial = {{opacity:0,x:-200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
        className="flex flex-col items-center container justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="Projects">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Projects <span className="font-light underline decoration-1 underline-offset-8">Completed</span></h1>
            <p className="text-gray-600 text-lg text-center mb-8 max-w-80 ">Crafting Spaces, Building Legacies Explore Our Portfolio</p>

            {/* slider buttons */}

            <div className="flex gap-3 w-full justify-end">
                <button onClick={prevProject} className="p-3 rounded bg-blue-100"><img src={assets.left_arrow} alt="" /></button>
                <button onClick={nextProject} className="p-3 rounded bg-blue-100"><img src={assets.right_arrow} alt="" /></button>
            </div>

            {/* Project slider Card */}

            <div className="overflow-hidden mt-5 md:items-center">
                <div className="flex gap-8 transition-transform duraation-200 ease-in-out"
                style={{transform:`translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
                    {projectsData.map((Project, index) => (
                        <div className="relative flex-shrink-0 w-full  sm:w-1/4" key={index}>
                            <img className="" src={Project.image} alt={Project.title} />
                           <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-800">{Project.title}</h2>
                            <p>{Project.price} <span>|</span> {Project.location} </p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>

    )
}
export default Projects

