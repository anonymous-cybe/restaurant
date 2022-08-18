import React from 'react'
import hero from "../assests/hero1.png"


function Hero() {
    return (
        <div className='w-full h-full flex items-center'>
            <div className=' relative top-0 left-0  brightness-50  w-full '>
                <img src={hero} alt='' className='w-full' />
            </div>
            <div className='hero-content absolute flex flex-col justify-center items-center left-0 z-20 text-white md:top-1/2 md:space-y-4  top-28'>
                <div className='hero-year md:text-2xl font-semibold text-red-400'>
                    <h2>SINCE 2000</h2>
                </div>
                <div className='hero-text md:text-6xl font-bold'>
                    <h1>DELICOUS, TASTFUL FOOD SERVED EXQUISITELY.</h1>
                </div>
                <div>
                    <a href='/' type='button' className="bg-red-600 px-4 py-2">GO TO THE MENU</a>

                </div>
                <div className='hero-paragraphy'>
                    <p>MONDAY-SATURDAY: 8:00am-7:00pm</p>
                </div>
            </div>


        </div>
    )
}

export default Hero
