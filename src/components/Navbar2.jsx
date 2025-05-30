import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// import { FaEnvelope } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
// import { FaMandalorian } from "react-icons/fa";
// import { FaFan } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home" , href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-ssmd fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wide">Fitlite Gym</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-lg font-medium transition-colors duration-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-6 shadow-md"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-lg font-medium transition-colors duration-300 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;



.........................................................................................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
import React from 'react';
import WCH1 from '../assets/wcu1.jpg';
import WCH2 from '../assets/wcu2.jpg';
import WCH3 from '../assets/wcu3.jpg';  

const Wcu = () => {
    
    return (
        <div className='bg-gradient-to-b from-black via-gray-800 to-black py-13'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/**Heading Section*/}
                <div className='text-center mb-12'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-pink-300 via-indigo-300 to-teal-300 text-transparent bg-clip-text'>
                        Why Choose s?
                    </h2>
                    <p className='mt-4 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-light'>
                        We are committed to providing the best fitness experience.
                    </p>
                </div>

                {/**Content Section*/}
                <div className='flex flex-col lg:flex-row items-start gap-12'>
                    {/**Left Section*/}
                    <div className='lg:w-1/2 w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:-ml-4 lg:-ml-6 xl:-ml-8'>
                            {[
                                {
                                    title: "Expert Trainer",
                                    text: "Highly qualified trainers to help you achieve your goals.",
                                },
                                {
                                    title: "Modern Equipment",
                                    text: "Access to state-of-the-art fitness machines and tools.",
                                },
                                {
                                    title: "Award Winning",
                                    text: "Recognized for excellence in fitness services.",
                                },
                                {
                                    title: "Community Driven",
                                    text: "A supportive community that motivates you.",
                                }
                            ].map((box, index) => (
                                <div key={index} className='relative flex flex-col justify-center items-center space-x-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-xl shadow-lg hover:scale-105  transition-transform duration-300'>
                                   <h4 className='font-semibold text-lg sm:text-xl text-center'>{box.title}</h4>
                                   <p className='text-sm sm:text-md font-light text-center'>{box.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/**Right Section*/}
                    <div className='lg:w-1/2 w-full'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                        {/**Image 1*/}
                        <div className='relative rounded-lg overflow-hidden'>
                            <img src={WCH1} alt='Wcu 1' className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500' />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wcu;