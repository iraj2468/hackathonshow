import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { MdCardTravel } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';

function page() {
  return (
    <>
      {/* 1st Navbar */}
      <div className='max-w-[1540px] h-[36px] bg-[#F5F5F5] items-center flex flex-wrap px-4 sm:px-8 lg:px-12'>
        <div className='h-[24px] mt-[6px]'>
          <Image src="/Frame (7).png" alt="logo" height={100} width={100} className='w-[19.2px] h-[17.97px] mt-[3px]' />
        </div>
        <div className='ml-auto flex gap-4 items-center'>
          <Link href="/New" className='text-[11px] font-poppins font-[500]'>Find a Store</Link>
          <div className='w-[1px] h-[14px] bg-[#111111]' />
          <Link href="/Help" className='text-[11px] font-poppins'>Help</Link>
          <div className='w-[1px] h-[14px] bg-[#111111]' />
          <Link href="/Joinus" className='text-[11px] font-poppins'>Join Us</Link>
          <div className='w-[1px] h-[14px] bg-[#111111]' />
          <Link href="/Login" className='text-[11px] font-poppins'>Sign In</Link>
        </div>
      </div>

     {/* 2nd Navbar */}
<div className='max-w-[1440px] mt-[36px] flex flex-wrap items-center px-4 sm:px-8 lg:px-12'>
  {/* Logo */}
  <div className='flex-shrink-0'>
    <Link href="/">
    <Image 
      src="/Vector (1).png" 
      alt="Logo" 
      width={100} 
      height={100} 
      className='w-[58.85px] h-auto' 
    /></Link>
  </div>

  {/* Navigation Links */}
  <div className='flex-1 flex justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-0 md:ml-36'>
    <Link href="/" className='text-[12px] sm:text-[14px] font-medium'>New & Featured</Link>
    <Link href="#" className='text-[12px] sm:text-[14px] font-medium'>Men</Link>
    <Link href="#" className='text-[12px] sm:text-[14px] font-medium'>Women</Link>
    <Link href="#" className='text-[12px] sm:text-[14px] font-medium'>Kids</Link>
    <Link href="#" className='text-[12px] sm:text-[14px] font-medium'>Sale</Link>
    <Link href="#" className='text-[12px] sm:text-[14px] font-medium'>SNKRS</Link>
  </div>

  {/* Search Bar and Icons */}
  <div className='flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-end'>
    {/* Search Bar */}
    <div className='w-[180px] h-[40px] rounded-full bg-[#F5F5F5] flex items-center px-4'>
      <CiSearch className='h-[20px] w-[20px] text-gray-500' />
      <p className='text-[12px] text-[#CCCCCC] ml-2'>Search</p>
    </div>

    {/* Icons */}
    <div className='flex gap-4'>
      <div className='w-[36px] h-[36px]  flex justify-center items-center'>
        <Link href="/Checkout"><FaRegHeart className='text-2xl' /></Link>
      </div>
      <div className='w-[36px] h-[36px] flex justify-center items-center'>
      <Link href="/Cart"><MdCardTravel className='text-2xl' /></Link>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default page
