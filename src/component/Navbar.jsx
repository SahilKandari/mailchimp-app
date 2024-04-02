import React from 'react'
import logoSvg from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { AiOutlineDown, AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { SlGlobeAlt } from "react-icons/sl";
import PopButton from './PopButton';

const Navbar = () => {
  return (
    <div className='w-full py-2 px-3 flex justify-between fixed top-0 z-20 bg-white'>
      <div className='flex justify-start gap-2 items-center'>
        <Link to='/' className='p-px hover:bg-gray-100 rounded duration-200'> 
          <img src={logoSvg} alt='logo'/>
        </Link>
        <div className='flex items-center gap-2	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Solutions and Services</p>
          <AiOutlineDown className='mt-1'/>
        </div>
        <div className='flex items-center gap-2	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Resources</p>
          <AiOutlineDown className='mt-1'/>
        </div>
        <div className='py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Switch to Mailchimp</p>
        </div>
        <div className='py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Pricing</p>
        </div>
      </div>
      <div className='flex justify-end gap-3 items-center'>
        <div className='py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <AiOutlineSearch className='text-2xl'/>
        </div>
        <div className='flex items-center gap-1	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <SlGlobeAlt className='text-lg'/>
          <p>Resources</p>
          <AiFillCaretDown className='mt-1 text-xs	'/>
        </div>
        <div className='py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Sales +91 8791635977</p>
        </div>
        <PopButton>Log In</PopButton>
        <PopButton bg="#ffe01b">Sign Up</PopButton>
      </div>
    </div>
  )
}

export default Navbar