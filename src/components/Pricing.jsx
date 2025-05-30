import React, { useState } from 'react'

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Beginner Plan",
            monthly: 500,
            yearly: 5000,
            description: "Best for beginners to start their fitness journey.",
            features: [
                { text: "Access to basic equipment", available: true },
                { text: "One personal training session", available: true },
                { text: "Dietary consultation", available: false },
                { text: "Access to premium classes", available: false },
            ],
        },
        {
            name: "Premium Plan",
            monthly: 800,
            yearly: 8500,
            description: "Perfect for advanced users with extra perks.",
            features: [
                { text: "Access to all equipment", available: true },
                { text: "Weekly personal training", available: true },
                { text: "Dietary consultation", available: false },
                { text: "Access to premium classes", available: true },
            ],
        },
        {
            name: "Pro Plan",
            monthly: 1000,
            yearly: 10800,
            description: "Ideal for professionals aiming for peak performance.",
            features: [
                { text: "Unlimited gym access", available: true },
                { text: "Daily personal training", available: true },
                { text: "Advanced dietary consultation", available: true },
                { text: "Exclusive premium classes", available: true },
            ],
        },
    ];




    return (
        <div className='bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 md:=px-8 lg:px-16'>
            <div className='text-center mb-10'>
                <h2 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-purple-600'>
                    Our Pricing
                </h2>
                <p className='text-lg text-gray-400 mt-3 max-w-2xl mx-auto'>
                    Choose the plan that best suits your needs and enjoy the benefits of premium fitness training.
                </p>
            </div>
            {/* <!-- Toggle Button -->  */}
            <div className='flex justify-center gap-4 mb-12'>
                <button className={`px-6 py-3 rounded-full font-semibold text-lg ${isYearly ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                    onClick={() => setIsYearly(false)}> Monthly </button>

                <button className={`px-6 py-3 rounded-full font-semibold text-lg ${isYearly ? 'bg-pink-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                    onClick={() => setIsYearly(true)}> Yearlyly </button>
            </div>

             {/* <!-- Pricing Card -->  */}

             <div className='flex flex-wrap justify-center gap-6'>
                {plans.map((plan,index)=>(
                    <div key={index} className={`relative borer-4 hover:shadow-2xl shadow-lg transform transition-all duration-500 ${index === 1 ? 'hover:scale-105 border-4 bg-gray-700' : 'border-2 border-gray-700'}
                    hover:scale-105 hover:shadow-2xl hover:border-purple-500 px-6 p-6 rounded-2xl `}>
                      <h3 className='text-2xl font-semibold mb-4 text-white'>
                        {plan.name}
                      </h3>
                      <p className='text-lg text-gray-400 mb-6'>
                       {plan.description}
                      </p>
                      <p className='text-4xl font-bold text-white mb-4'>
                        ${isYearly ? plan.yearly : plan.monthly} {' '}
                        <span className='text-lg font-medium text-gray-400'> 
                            / {isYearly ? 'year' : 'month'}
                        </span>
                      </p>
                    </div>
                ))}

             </div>

        </div>
    )
}

export default Pricing