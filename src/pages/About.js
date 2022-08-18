import React from 'react'
import hero2 from '../assests/hero2.png'
import hero3 from '../assests/hero3.png'
import '../pages/about.css'
function About() {
    return (
        <div className='w-full h-full flex relative top-10'>
            <div className='homepageabout  pt-11 flex justify-around w-full px-0 '>
                <div className='  left md:contents hidden bg-white'>
                    <div className='hero2 hover:brightness-50  smooth duration-500 absolute left-0  h-fit w-fit '>
                        <img src={hero2} alt='' className=' w-72 h-80' />
                    </div>
                    <div className='hero3 relative top-96 left-52 hover:brightness-50 duration-500 h-fit w-fit'>
                        <img src={hero3} alt='' className='w-72 h-80' />
                    </div>
                </div>
                <div className='right h-screen flex flex-col space-y-10 relative'>
                    <h4 className='text-red-300'>QUALITY SERVICE</h4>
                    <h2 className='text-6xl  font-bold text-red-800'>Good Food,<br /> Drinks &<br /> Company.</h2>
                    <p className='text md:text-lg text-slate-600 font-medium'>We appreciate your trust greatly. Our clients choose us <br />and our services because they know we are the best.

                    </p>
                    <p className='text text-slate-400'>MON-FRI: 9 AM – 22 PM<br />
                        SATURDAY: 9 AM – 23 PM</p>
                    <a href='/' className='bg-red-800 py-4 px-7 text-white hover:bg-red-900'>MORE ABOUT US</a>
                </div>
            </div>


        </div>
    )
}

export default About
