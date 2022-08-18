import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { CgMenuRightAlt } from 'react-icons/cg'
function Navbar() {
    const [navlinks, setNavlinks] = useState(false)
    return (
        <div className='navbar flex justify-around w-full z-20 absolute text-white my-10 font-signature'>
            <div className='left-side flex'>
                {/* web version */}
                <ul className='mx-auto  space-x-4 hidden md:flex'>
                    <a href='/' className='hover:border-b-4 duration-200 h-7 active:'><li>HOME</li></a>
                    <a href='/'><li className='hover:border-b-4 duration-200 h-7'>ABOUT US</li></a>
                    <a href='/'><li className='hover:border-b-4 duration-200 h-7'>MENU</li></a>
                    <a href='/'><li className='hover:border-b-4 duration-200 h-7'> CONTACT</li></a>
                </ul>
                {/* mobile version */}
                {navlinks && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen space-y-5 md:hidden'>
                    <a href='/'><li>HOME</li></a>
                    <a href='/'><li>ABOUT US</li></a>
                    <a href='/'><li>MENU</li></a>
                    <a href='/'><li>CONTACT</li></a>
                </ul>)}

            </div>
            {/* nav logic */}
            <div onClick={() => setNavlinks(!navlinks)} className='md:hidden'>
                {navlinks ? <CgMenuRightAlt fontSize='1.5rem' />
                    : <CgMenuRightAlt fontSize='1.5rem' />
                }
            </div>
            <div className='logo'>
                <img src='logo1.png' alt='' className='flex w-20' />
            </div>
            <div className='right-side flex justify-center space-x-11'>
                <BsSearch fontSize='1.5rem' />
                <a href='/' type='button' className='bg-red-600 py-1 px-4 text-white flex items-center'>BOOK A TABLE</a>
            </div>


        </div >
    )
}

export default Navbar
