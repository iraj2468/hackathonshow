import React from 'react'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa6'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { MdCardTravel } from 'react-icons/md'
import Footer from '../components/Footer'
function page() {
  return (
    <>
 {/* 1st Navbar */}
 <div className='max-w-[1540px] h-[36px] bg-[#F5F5F5] items-center flex flex-wrap px-4 sm:px-8 lg:px-12 sm:flex-row flex-col'>
        <div className='h-[24px] mt-[6px]'>
          <Image src="/Frame (7).png" alt="logo" height={100} width={100} className='w-[19.2px] h-[17.97px] mt-[3px]' />
        </div>
        <div className='ml-auto flex gap-4 items-center'>
          <Link href="/New" className='text-[11px] font-poppins font-[500]'>Find a Store</Link>
          <div className='w-[1px] h-[14px] bg-[#111111]' />
          <Link href="/Help" className='text-[11px] font-poppins'>Help</Link>
          <div className='w-[1px] h-[14px] bg-[#111111]' />
          <Link href="/Joinus" className='text-[11px] font-poppins'>Hi, Rajarshi</Link>
          
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
        <Link href="/"><FaRegHeart className='text-2xl' /></Link>
      </div>
      <div className='w-[36px] h-[36px] flex justify-center items-center'>
      <Link href="/Cart"><MdCardTravel className='text-2xl' /></Link>
      </div>
    </div>
  </div>
</div>

   






    <div className='py-20 '>
      <div className='max-w-[1100px] mx-auto  font-poppins flex flex-wrap md:flex-nowrap flex-col md:flex-row '>
        {/* 1st-div */}
        <div className='max-w-[717.33px] mx-auto flex-wrap flex-col px-3 md:px-0  '> 
          <div className='w-[725.33px] mx-auto bg-[#F7F7F7] h-[62.89px]  flex flex-col  justify-center  px-2 '>
            <p className='font-[600] text-[13px] leading-[14px]  pb-2 pt-3'>Free Delivery</p>
            <p className='font-normal text-[11px] leading-[24px] pb-1'>Applies to orders of ₹ 14 000.00 or more. <span className='underline ml-3'>View details</span></p>
          </div>
          <p className='text-[22px] font-[500] leading-[33px] py-6'>Bag</p>
        <div className='flex gap-4  '>
            {/* picdiv */}
            <div>
              <Image src="/Frame (24).png" alt="" width={150} height={100} />
            </div>
            {/* content-div */}
            <div className='w-[547.33px] mx-auto  flex-col flex-wrap '>
              <div className='flex justify-between flex-col sm:flex-row'>
                <div className='w-[235.31px]  '>
                  <p className='font-[500] text-[16px] leading-[28px] py-2 '>Nike Dri-FIT ADV TechKnit Ultra</p>
                  <p className='text-[15px] font-normal text-[#757575] leading-[28px]'>Men &apos;s Short-Sleeve Running Top</p>
                  <p className='text-[15px] font-normal text-[#757575] leading-[28px]'>Ashen Slate/Cobalt Bliss</p>
                   <div className='flex gap-7'>
                    <p className='text-[15px] font-normal text-[#757575] leading-[28px]'>Size L</p>
                    <p className='text-[15px] font-normal text-[#757575] leading-[28px]'>Quantity 1</p>
                   </div>
                  
                </div>
                <div className='w-[123.22px]'>
                  <p className='font-normal text-[15px] leading-[28px] pt-2'>MRP: ₹ 3 895.00</p>
                </div>
              </div>
              <div className='flex gap-5 py-4'>
              <FaRegHeart className='text-2xl' />
              <RiDeleteBin6Line  className='text-2xl'/>
              </div>
             
            </div>
           
        </div>
        <div className='w-full h-[0.5px] bg-[#E5E5E5] my-5'></div>
        <div className='flex gap-4 '>
            {/* picdiv */}
            <div className='w-[200] h-[100] mx-auto '>
             
            </div>
            {/* content-div */}
            <div className='w-[547.33px] mx-auto ml-[20%]'>
              <div className='flex justify-between flex-col sm:flex-row '>
                <div className='w-[235.31px] '>
                  <p className='font-[500] text-[16px] leading-[28px] py-2'>Nike Dri-FIT ADV TechKnit Ultra</p>
                  <p className='text-[15px] font-normal text-[#757575] leading-[28px]'>Men &apos;s Short-Sleeve Running Top</p>
                  <p className='text-[15px] font-normal text-[#757575] leading-[28px]'>Ashen Slate/Cobalt Bliss</p>
                   <div className='flex gap-7'>
                    <p className='text-[15px] font-normal text-[#757575] leading-[28px]'>Size L</p>
                    <p className='text-[15px] font-normal text-[#757575] leading-[28px]'>Quantity 1</p>
                   </div>
                  
                </div>
                <div className='w-[123.22px]'>
                  <p className='font-normal text-[15px] leading-[28px] pt-2'>MRP: ₹ 3 895.00</p>
                </div>
              </div>
              <div className='flex gap-5 py-4'>
              <FaRegHeart className='text-2xl' />
              <RiDeleteBin6Line  className='text-2xl'/>
              </div>
             
            </div>
           
        </div>
        
        <div className='w-full h-[0.5px] bg-[#E5E5E5] my-5'></div>
        </div>







        {/* 2nd-div */}
        <div className='w-[350.67px] mx-auto ml-8 flex-col flex-wrap'>
          <p className='text-[21px] font-[500] leading-[33px] pb-7'>Summary</p>
          <div className='flex justify-between py-3 flex-wrap'>
            <p>Subtotal</p>
            <p>₹ 20 890.00</p>
          </div>
          <div className='flex justify-between py-3 flex-wrap'>
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className='flex justify-between flex-wrap border-t-2 border-b-2 py-4 my-4'>
            <p>Total</p>
            <p>₹ 20 890.00</p>
          </div>
          <div className='bg-[#111111] rounded-full text-[#ffffff] flex justify-center py-3 my-9'>
            <button className='text-[15px] font-[500] leading-[24px]'>Member Checkout</button>
          </div>

        </div>
      </div>






    </div>
    <Footer/>
    </>
  )
}

export default page