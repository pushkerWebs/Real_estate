import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"
const About = () => {
    return (
        <motion.div 
      initial = {{opacity:0,x:200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
        className="flex flex-col items-center container justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">About <span className="font-light underline decoration-1 underline-offset-8">Our Brand</span></h1>
            <p className="text-gray-600 text-lg text-center mb-8 max-w-80 ">Passionate About Properties, Dedicated to Your vision</p>
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">12+</p>
                            <p>Project Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">25+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <div className="mt-7">At EstAte, we believe in turning your dream home into a reality. With transparent deals, verified properties, and a dedicated team that puts your needs first, we ensure a smooth and secure buying experience. Trust us to guide you every step of the way — because your future deserves a solid foundation.</div>
                    <div className="mt-7"><button className="bg-blue-500 text-white py-2 px-5 rounded text-lg">Learn more</button></div>
                </div>
            </div>
        </motion.div>
    )
}
export default About