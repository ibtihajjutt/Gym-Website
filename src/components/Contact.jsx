import React from 'react'
import { motion } from "motion/react"
import { MapPin, Mail, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 ' id='contact'>
            <motion.div initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
            className='w-full max-w-3xl lg:max-w-5xl grid lg:grid-cols-2 gap-8'>
            {/* ADDRESS SECTION*/}
            <div className='bg-gradient-900 p-6 rounded-2xl shadow-lg'>
                <h2 className='text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6'>
                    Get In Touch
                </h2>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                        <MapPin className='text-blue-400 w-6 h-6' />
                        <p className='text-lg font-medium'>
                            Gym Street, Fitness City, LKO
                        </p>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <Phone className='text-blue-400 w-6 h-6' />
                        <p className='text-lg font-medium'>
                            +91 1234567890
                        </p>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <Mail className='text-blue-400 w-6 h-6' />
                        <p className='text-lg font-medium'>
                            contact@gym.com
                        </p>
                    </div>

                </div>
            </div>
           
                <motion.form initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} 
                className='bg-gray-900 p-6 rounded-2xl space-y-6'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4'>
                       Contact Us
                    </h2>
                    <div >
                        <label className='block text-sm font-medium mb-2'>Your Name</label>
                        <input type="text" placeholder='Enter your name' className='w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' />

                    </div>
                    <div >
                        <label className='block text-sm font-medium mb-2'>Email</label>
                        <input type="email" placeholder='Enter your Email' className='w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' />

                    </div>
                    <div >
                        <label className='block text-sm font-medium mb-2'>Your Message</label>
                        <textarea placeholder='Enter your message'
                         className='w-full p-3 rounded-lg bg-gray-800 border
                          border-gray-700 focus:outline-none focus:ring-2
                          focus:ring-blue-400' ></textarea>

                    </div>
                     <button type='submit' className='w-full p-3 bg-gradient-to-r from-blue-400 top- rounded-lg text-lg font-semibold hover:opacity-90 transition'>
                       Send message
                     </button>
                </motion.form>
                </motion.div>
        </div>
    )
}

export default Contact