
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-12 w-full" id="footer">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4 text-center md:text-left">
                        <img src={assets.logo_dark} alt="Company Logo" className="h-8 mx-auto md:mx-0" />
                        <p className="text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-white font-semibold text-lg">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#header" className="hover:text-white transition">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition">About us</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-white font-semibold text-lg">Subscribe to our newsletter</h3>
                        <p className="text-sm">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <div className="flex gap-4 max-w-md mx-auto md:mx-0">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="px-4 py-2 w-full rounded-l focus:outline-none text-white bg-gray-800"
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;