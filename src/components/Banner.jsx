import React from 'react';
import { FaPlay, FaDumbbell, FaHeartbeat, FaInstagram, FaRunning, FaTwitter, FaFacebook, FaMedal, FaThumbsUp, FaUser, FaCertificate } from 'react-icons/fa';
import bannertop from '../assets/bannertop.png';

const Banner = () => {
    return (
        <div> {/* Main div that wraps all the content */}
            {/*Banner Section*/}
            <div id='home' className='relative h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
                {/*Content Section*/}
                <div className='relative z-10 flex flex-col justify-center items-start px-1 py-10 lg:px-20 text-white bg-gradient-to-r from-black via-transparent h-full w-full lg:w-1/2'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 transition-all duration-500 hover:translate-x-2 text-center lg:text-left'>
                        Elevate your <span className='text-yellow-500'>Workout</span>
                    </h1>

                    <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-8 transition-all duration-500 delay-200 text-left lg:text-left'>
                        Learn how to create a stunning static gym website using React JS, Tailwind CSS, HTML, and JavaScript.
                        This tutorial covers the implementation of smooth scrolling features, responsive design
                    </p>
                    {/*Icons Section*/}
                    <div className='flex flex-wrap sm:flex-row gap-4 justify-center lg:justify-start mb-8 transition-all duration-500 delay-400'>
                        <div className='flex items-center gap-3 group'>
                            <FaDumbbell className='text-yellow-500 text-2xl sm:text-3xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110' />
                            <span className='text-sm sm:text-lg font-medium'>Strength Traning</span>
                        </div>

                        <div className='flex items-center gap-3 group'>
                            <FaHeartbeat className='text-yellow-500 text-2xl sm:text-3xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110' />
                            <span className='text-sm sm:text-lg font-medium'>Cardio Fittness</span>
                        </div>

                        <div className='flex items-center gap-3 group'>
                            <FaRunning className='text-yellow-500 text-2xl sm:text-3xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110' />
                            <span className='text-sm sm:text-lg font-medium'>Endurance</span>
                        </div>
                    </div>

                    {/**Button Section*/}
                    <div className='flex flex-wrap gap-4 justify-center lg:justify-start mb-6'>
                        <button className='px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300 hover:scale-105 delay-600 cursor-pointer '>
                            Get Started
                        </button>
                        <button className='px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 hover:scale-105 delay-700 flex items-center gap-2'>
                            <FaPlay className='text-black text-xl' /> Watch Demo
                        </button>
                    </div>

                    {/**Social Media Section*/}
                    <div className='flex gap-6 mt-4 transition-all duration-500 delay-800 justify-center lg:justify-start'>
                        <a href="" aria-label='Facebook ' className='text-blue-500 text-2xl sm:text-3xl transition-all duration-300 hover:scale-110'>
                            <FaFacebook />
                        </a>

                        <a href="" aria-label='Instagram ' className='text-red-500 text-2xl sm:text-3xl transition-all duration-300 hover:scale-110'>
                            <FaInstagram />
                        </a>

                        <a href="" aria-label='Twitter ' className='text-blue-500 text-2xl sm:text-3xl transition-all duration-300 hover:scale-110'>
                            <FaTwitter />
                        </a>

                    </div>
                </div>

                {/**BG IMAGE*/}
                <div className='absolute top-0 right-0 h-full w-full lg:w-1/2 flex justify-center'>
                    <img
                        src={bannertop}
                        className="h-full w-full object-contain opacity-70 transition-all duration-500 translate-x-8 -translate-y-12"
                        alt="banner"
                    />
                </div>
            </div>
           {/**new Section*/}
            <div className='bg-black py-12 sm:py-18 text-white'>
              <div className='container mx-auto px-4 sm:px-8 text-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12'> {/* Grid container */}
                <div className='flex flex-col items-center gap-4 transition-all duration-500 delay-200 '>
                  <FaMedal className='text-yellow-500 text-3xl sm:text-4xl'/>
                  <span className='text-sm sm:text-lg md:text-xl font-semibold'>
                     5+ Years Of Experence
                  </span>
              </div>

                <div className='flex flex-col items-center gap-4 transition-all duration-500 delay-400'>
                  <FaCertificate className='text-yellow-500 text-3xl sm:text-4xl'/>
                  <span className='text-sm sm:text-lg md:text-xl font-semibold'>
                     50+ certifed Trainers
                  </span>
              </div>

              <div className='flex flex-col items-center gap-4 transition-all duration-500 delay-600 '>
                  <FaUser className='text-yellow-500 text-3xl sm:text-4xl'/>
                  <span className='text-sm sm:text-lg md:text-xl font-semibold'>
                     1000+ Happy Customer 
                  </span>
              </div>

              <div className='flex flex-col items-center gap-4 transition-all duration-500 delay-800 '>
                  <FaThumbsUp className='text-yellow-500 text-3xl sm:text-4xl'/>
                  <span className='text-sm sm:text-lg md:text-xl font-semibold'>
                     95% Customer Satisfaction
                  </span>
              </div>

              </div>
            </div>
        </div>
        </div>
    )
};

export default Banner;
