import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function page() {
  return (
    <>
    <Navbar/>
   <div className='max-w-[1540px] pt-20 pb-28'>
   <div className='  items-center flex-col flex   justify-center px-2 '>
        <div className='items-center'>
        <Image src="/Vector (1).png" alt="" height={100} width={50} />
        </div>
        <h1 className='font-[700] text-[18px] leading-[26px] w-[176.5px] pt-6 text-center  font-poppins'>YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        <div className='max-w-[334px] mx-auto text-left'>
            <input type="text" className='w-full border  pl-3 rounded-[3px] outline-none py-3 mt-2  text-[14px] leading-none appearance-none  ' placeholder='Email address' />
            <input type="text" className='w-full border  pl-3 rounded-[3px] outline-none py-3 mt-2  text-[14px] leading-none appearance-none  ' placeholder='Password' />
            <div className='flex  gap-8 items-center ' >
                <div className='flex gap-3 items-center '>
              <div className='  border px-1 py-1 border-[#BCBCBC] rounded-[3px] mt-7'>  <FaCheck  className=' '/></div>
                    <p className='font-poppins font-normal text-[#8D8D8D] leading-[14px] mt-7 text-[12px] whitespace-nowrap'>Keep me signed in</p>
                </div>
                <div>
                    <p className='text-[14px] text-left text-[#BCBCBC] leading-[13.8px] mt-7   font-poppins whitespace-normal'>Forgotten your password?</p>
                </div>
            </div>
            <div className='justify-center  text-center mx-auto pt-10'>
                <p className='text-[12px] font-normal leading-[16px] items-center text-[#8D8D8D] font-poppins w-[279.31px] mx-auto'>By logging in, you agree to Nike&apos;s <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span>.</p>
            </div>
            <div className='bg-[#111111] text-white  py-3 my-7 justify-center rounded-[3px]'><p className=' font-normal text-[11px] leading-[17px] items-center justify-center text-center'>SIGN IN</p></div>
          <div className='justify-center items-center text-center'>
          <p className='text-[12px] leading-[14px]  text-[#8D8D8D] font-normal'>Not a Member?<span className='text-[12px] leading-[14px] text-[#111111] underline'> Join Us</span>.</p>
          </div>
        </div>
    </div>
   </div>






   <Footer/>

    </>
  )
}

export default page