import React from 'react';
import img from '../../../assets/Saved Pictures/img1.jpg';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-blue-950 text-white">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src={img} alt="Priya Barua" className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-700" />
                        <h3 className="text-2xl font-bold text-cyan-700 mb-2">Priya Barua</h3>
                        <p className="text-sm mb-2 text-center md:text-left">A Dedicated MERN Stack Web Developer</p>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold mb-4 text-cyan-700">Contact Information</h4>
                        <p className="mb-2"><span className="font-medium">Phone:</span> +880 1819434416</p>
                        <p className="mb-2"><span className="font-medium">Email:</span> priya.bd.9911@gmail.com</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold mb-4 text-cyan-700">Connect With Me</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/priya.barua.129142?mibextid=ZbWKwL" className="hover:text-cyan-700 transition-colors duration-300">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/priya-barua-642834216" className="hover:text-cyan-700 transition-colors duration-300">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://github.com/priyab99" className="hover:text-cyan-700 transition-colors duration-300">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-blue-800 text-center">
                    <p className="text-sm">&copy; {currentYear} Priya Barua. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;