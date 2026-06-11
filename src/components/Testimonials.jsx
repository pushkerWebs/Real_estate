import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import {motion} from 'framer-motion'
const Testimonials = () => {
    return (
        <motion.div 
        initial = {{opacity:0,y:200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
        className="flex flex-col items-center container justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="Testimonial">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Customer <span className="font-light underline decoration-1 underline-offset-8">Testimonials</span></h1>
            <p className="text-gray-600 text-lg text-center mb-8 max-w-80 ">Real Stories from Those Who Found Home with Us</p>

            {/* Customers Testimonial */}
            <div className="flex flex-wrap justify-center gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="max-w-[300px] shadow-lg shadow-gray-400 rounded px-8 py-12 text-center" >
                        <img className="w-20 h-29 rounded-full mx-auto" src={testimonial.image} alt={testimonial.alt} />
                        <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
                        <p className="text-gray-700">{testimonial.title}</p>
                        <div className="flex justify-center gap-1 text-red-700 mb-4">
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>

        </motion.div>
    )
}
export default Testimonials