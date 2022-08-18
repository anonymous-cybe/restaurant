import React from 'react'

function Footer() {
    return (
        <div className='z-30 absolute left-0 bg-gradient-to-b from-red-600 via-red-600 to-red-500  w-full'>
            <div className='footer-container flex flex-col items-center  text-white pt-9 space-y-5'>
                <div className='top-footer flex flex-col justify-around w-full md:flex-row space-y-8'>
                    <div className='working-hour flex justify-center items-center flex-col'>
                        <h3 className='font-bold'>WORKING HOUR</h3>
                        <h3>Mon-Fri: 9 AM – 6 PM<br />

                            Saturday: 9 AM – 4 PM<br />

                            Sunday: Closed</h3>
                    </div>
                    <div className='office   '>
                        <h3 className='font-bold'>OFFICE</h3>
                        <h3>Lagos —
                            785 15h Street, Office 478
                            Lagos, De 81566<br />

                            <a href='/' className=''>sylvanusdev@email.com</a><br />

                            +2349054404158</h3>
                    </div>
                    <div className='Link '>
                        <h3 className='font-bold'>LINKS</h3>
                        <a href='/'><h3 className='hover:border-b-2 duration-100 h-7'>Home</h3></a>
                        <a href='/' ><h3 className='hover:border-b-2 duration-100 h-7'>About</h3></a>
                        <a href='/'><h3 className='hover:border-b-2 duration-100 h-7 '>Gallery</h3></a>
                        <a href='/'><h3 className='hover:border-b-2 duration-100 h-7 '>Menu</h3></a>
                        <a href='/'><h3 className='hover:border-b-2 duration-100 h-7'>Contact</h3></a>
                    </div>

                </div>
                <hr />
                <div className='bottom-footer text-sm font-bold'>
                    <h3>SYLVANUSDEV © 2022. All Rights Reserved.</h3>
                </div>

            </div>

        </div>
    )
}

export default Footer
