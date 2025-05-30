import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { CircleChevronLeft, CircleChevronRight} from 'lucide-react';

const YourOpinions = () => {

    return (
        <div id='opinions' className='bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-12 px-6'>
            {/* <!-- Heading Section --> */}
            <div className="text-center mb-10">
                <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gray-to-r from-blue-400 to-purple-600">
                    Community Opinions
                </h2>
                <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
                    We value your opinions. Here are some of the reviews from our students.
                </p>

                {/*Reviews Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {/* <!-- Reviews --> */}
                    {[
                           {
                            name: "Hexagon",
                            text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended for anyone seeking top-notch service.",
                            stars: 4.5,
                            color: "text-blue-500",
                        },
                        {
                            name: "Digital",
                            text: "Incredible experience! Highly recommend to everyone. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                            stars: 4,
                            color: "text-purple-500",
                        },
                        {
                            name: "Services",
                            text: "Great platform with some room for improvement. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            stars: 3.5,
                            color: "text-green-500",
                        },
                        {
                            name: "Momentum",
                            text: "Amazing facilities and trainers. They truly care about your fitness journey.",
                            stars: 5,
                            color: "text-yellow-500",
                        },
                        {
                            name: "Pulse",
                            text: "Fantastic support system and modern equipment. I couldn’t ask for more!",
                            stars: 4.5,
                            color: "text-red-500",
                        },
                        {
                            name: "Zenith",
                            text: "The community atmosphere is truly inspiring! A perfect place to grow.",
                            stars: 4.8,
                            color: "text-indigo-500",
                        },

                    ].map((review, index) => (
                        <div key={index} className='bg-gradient-to-br from-gray-800 to-gray-900 border border-y-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                          <FaQuoteLeft className={`${review.color} text-3xl`} />
                          <h3 className="text-white font-semibold mt-4">{review.name}</h3>
                          <p className="text-gray-300 mt-2">{review.text}</p>
                          <div className="mt-2">
                            {/* Render stars based on the review.stars */}
                            {[...Array(Math.floor(review.stars))].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                            ))}
                            {/* Render half star if needed */}
                            {review.stars % 1 !== 0 && <span className="text-yellow-400">½</span>}
                            </div>
                        </div>
                    ))}


                </div>
                </div>

            {/* <!-- Navigation ADD OPTION --> */}
            <div className='flex flex-col items-center space-y-6 mt-10'>
                        <div className='flex items-center space-x-4'>
                            <button className='p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-transform duration-300 transform hover:scale-110'>
                            <CircleChevronLeft />
                            </button>

                            <button className='p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-transform duration-300 transform hover:scale-110'>
                            <CircleChevronRight />
                            </button>
                        </div>

                        {/* <!-- ADD OPTION -->--> */}
                        <button className='bg-gradient-to-r from-blue-500 to-purple-600  text-white px-10 py-4 rounded-full shadow-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-transform duration-300 transform hover:scale-110'>
                           Add Your Opinion
                        </button>
            </div>
            
        </div>
    )
}

export default YourOpinions;
