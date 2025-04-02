import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeSection, setActiveSection] = useState('home')

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    const navLinks = (


        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 md:space-x-4 space-y-4 md:space-y-0 p-4 md:p-0'>
        <li>
            <a href="#home"
               className={`block py-2 pr-4 pl-3 duration-200 ${activeSection === 'home' ? 'text-yellow-400' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}
            >
                Home
            </a>
        </li>
        <li>
            <a href="#courses"
               className={`block py-2 pr-4 pl-3 duration-200 ${activeSection === 'courses' ? 'text-yellow-400' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}
            >
                Courses
            </a>
        </li>
        <li>
            <a href="#about"
               className={`block py-2 pr-4 pl-3 duration-200 ${activeSection === 'about' ? 'text-yellow-400' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}
            >
                About Us
            </a>
        </li>
        <li>
          
            <a href="#testimonials"
               className={`block py-2 pr-4 pl-3 duration-200 ${activeSection === 'testimonials' ? 'text-yellow-4000' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}
            >
                Testimonials
            </a>
        </li>
        <li>
            <a href="#pricing"
               className={`block py-2 pr-4 pl-3 duration-200 ${activeSection === 'pricing' ? 'text-yellow-400' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}
            >
                Pricing
            </a>
        </li>
        <li>
           
            <a href="#questions"
               className={`block py-2 pr-4 pl-3 duration-200 ${activeSection === 'questions' ? 'text-yellow-400' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}
            >
                Questions
            </a>
        </li>
    </ul>
    )
  return (
   
    <header className='bg-black text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full '>
            {/* Logo  */}

            <div>
                <h1 className='font-bold '>DMG-Germanay</h1>

            </div>
            {/* Navigation Links */}
            <div className='hidden md:flex flex-grow justify-center '>
                <nav>
                    {navLinks}
                </nav>
            </div>

            {/* Button  */}
            <div className='hidden md:block '>
                <a href="#contact" className=' text-white  hover:bg-yellow-400/90 px-4 py-2 rounded'>Contact</a>
            </div>
            {/* Hamburger Menu */}
            <div className='block md:hidden'>
               <button 
               onClick={handleToggle}
               className={'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'}>

                <HiMenuAlt3 className='size-6' />
                </button>
               
            </div>
        </div>

    </header>
  )
}

export default Navbar