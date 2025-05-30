import { Facebook, Instagram, Linkedin,  Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-black via-gray-900 to-black font-poppins  text-white '>
            <div className='conyaner mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* <!-- Bramd Section--> */}
                <div>
                    <h1 className='text-3xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-extrabold tracking-wider'>
                        FitLife Gym
                    </h1>
                    <p className='text-gray-400 mt-4 leading-relaxed'>
                        Your fitness journey starts here. We are committed to providing the best experience to our members.

                    </p>
                </div>

                {/* Navigation Links  */}
                <div >
                    <h2 className='text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold'>
                        Quick Links
                    </h2>
                    <ul className='mt-4 *:space-y-2'>
                        <li>
                             <Link to='home' className='cursor-pointer hover:underline hover:text-gray-300'>
                             Home
                             </Link>
                        </li>
                        <li>
                             <Link to='opinions' className='cursor-pointer hover:underline hover:text-gray-300'>
                             Opinions
                             </Link>
                        </li>
                        <li>
                             <Link to='trainer' className='cursor-pointer hover:underline hover:text-gray-300'>
                             Trainer
                             </Link>
                        </li>
                        <li>
                             <Link to='contact' className='cursor-pointer hover:underline hover:text-gray-300'>
                             Contact
                             </Link>
                        </li>
                    </ul>
                </div>
                
                {/* Social media links*/}

                <div>
                    <h2  className='text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold'>
                       FOLLOW US 
                    </h2>
                    <div className='flex mt-4 space-x-4'>
                        <a href="" className=' bg-gray-700 rounded-full hover:bg-blue-700 transition'>
                            <Facebook className='w-6 h-6' />
                        </a>
                        <a href="" className=' bg-gray-700 rounded-full hover:bg-blue-700 transition'>
                            <Twitter className='w-6 h-6' />
                        </a>
                        <a href="" className=' bg-gray-700 rounded-full hover:bg-blue-700 transition'>
                            <Instagram className='w-6 h-6' />
                        </a>
                        <a href="" className=' bg-gray-700 rounded-full hover:bg-blue-700 transition'>
                            <Linkedin className='w-6 h-6' />
                        </a>

                    </div>
                </div>
            </div>
            { /* bottom*/}
            <div className='bg-gray-900 text-gray-500 text-center py-4 '>
                <p>
                    &copy; 2021 FitLife Gym. All rights reserved.
                </p>
                <p className='text-white hover:text-purple-400 cursor-pointer'>
                     Developend by Ibtihaj
                </p>

            </div>
        </div>
    )
}

export default Footer