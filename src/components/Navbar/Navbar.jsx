import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const[nav,setNav] = useState(false);
  const navHandler = ()=>{
    setNav(!nav);
  }
  return (
    <div className='w-full text-white flex justify-between items-center px-5 py-5'>
      <h1 className='text-3xl font-bold text-teal-500'>WebBiner</h1>
      <ul className='md:flex hidden '>
        <li className='flex items-center'><a href='#' className='px-2 hover:text-teal-500'>Home</a></li>
        <li className='flex items-center'><a href='#' className='px-2 hover:text-teal-500'>Company</a></li>
        <li className='flex items-center'><a href='#' className='px-2 hover:text-teal-500'>Resources</a></li>
        <li className='flex items-center'><a href='#' className='px-2 hover:text-teal-500'>About</a></li>
        <li className='flex items-center'><a href='#' className='px-2 hover:text-teal-500'>Contact</a></li>
      </ul>
      <div onClick={navHandler} className='z-20 block md:hidden'> 
        { !nav ? <FaBars className='text-xl text-white'/> : <FaTimes className='text-xl text-white'/> }
      </div>
      <div className={!nav ? `fixed top-0 left-[-100%] ease-in-out duration-1000 border-r-gray-500 bg-black w-full h-full p-5 z-10` : `fixed top-0 left-0 ease-in-out duration-1000 border-r-gray-500 bg-black w-full h-full p-5 z-10`}>
        <h1 className='text-3xl font-bold text-teal-500'>WebBiner</h1>
        <ul className='flex flex-col pt-10'>
          <li className='flex items-center pb-5 border-b-gray-500'><a href='#' className='px-2 hover:text-teal-500'>Home</a></li>
          <li className='flex items-center pb-5'><a href='#' className='px-2 hover:text-teal-500'>Company</a></li>
          <li className='flex items-center pb-5'><a href='#' className='px-2 hover:text-teal-500'>Resources</a></li>
          <li className='flex items-center pb-5'><a href='#' className='px-2 hover:text-teal-500'>About</a></li>
          <li className='flex items-center'><a href='#' className='px-2 hover:text-teal-500'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
