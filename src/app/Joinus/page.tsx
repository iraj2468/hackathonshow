import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function page() {
  return (
    <>
    <Navbar/>
   <div className='max-w-[1540px] pt-20 pb-28'>
   <div className='  items-center flex-col flex   justify-center px-2 max-w-[400px] mx-auto '>
        <div className='items-center'>
        <Image src="/Vector (1).png" alt="" height={100} width={50} />
        </div>
        <h1 className='font-[700] text-[18px] leading-[26px] pt-6 text-center  font-poppins'>BECOME A NIKE MEMBER</h1>
       <p className='w-[282.01px] text-center font-normal text-[14px] leading-[22px] items-center text-[#8D8D8D] pt-5 pb-3'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
       <div className='max-w-[400px] py-2 mx-auto '>
       <input type="text" className='w-full border  pl-3 rounded-[3px] outline-none py-3  my-2 text-[13px] leading-none appearance-none ' placeholder='Email address' />
       <input type="text" className='w-full border  pl-3 rounded-[3px] outline-none py-3  my-2 text-[13px] leading-none appearance-none ' placeholder='Password' />
       <input type="text" className='w-full border  pl-3 rounded-[3px] outline-none py-3 my-2  text-[13px] leading-none appearance-none  ' placeholder='First Name' />
       <input type="text" className='w-full border  pl-3 rounded-[3px] outline-none py-3 my-2  text-[13px] leading-none appearance-none  ' placeholder='Last Name' />
      <div>
      <input type="text" className='w-full border  pl-3 rounded-[3px] outline-none py-3 my-2  text-[13px] leading-none appearance-none ' placeholder='Date Of Birth' />
      <p className='text-[11px] text-center text-[#8D8D8D] leading-[13.31px] items-center my-2 font-poppins'>Get a Nike Member Reward every year on your Birthday.</p>
      </div>
         
           <div className='border py-3 flex  justify-between items-center relative px-2 rounded-[3px]'>
           <span className='font-normal text-[14px] text-[#8D8D8D]'>India</span>
              <select name="" id="" className='outline-none text-[#8D8D8D]'>
                <option value=""></option>
              </select>
            
           </div>
           <div className='flex  my-3 justify-between  '>
            <button className='border py-3 px-16 text-[13px] justify-center items-center rounded-[3px] text-[#8D8D8D]'>Male</button>
            <button className='border py-3 px-16 text-[13px] justify-center items-center rounded-[3px] text-[#8D8D8D]'>Female</button>
           </div>
           <div className='flex items-center gap-4 py-2'>
            <div className='border w-[20px] h-[20px] rounded-[3px]'></div>
            <div className='w-[247px] text-left '><p className='font-normal text-[11px] leading-[14px] text-[#8D8D8D] font-poppins'>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p></div>
           </div>
           <p className='text-[12px] py-2 font-normal leading-[16px] items-center text-[#8D8D8D] font-poppins w-[279.31px] mx-auto text-center'>By creating an acoount, you agree to Nike&apos;s <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span>.</p>
           <div className='bg-[#111111] text-white  py-3 my-7 justify-center rounded-[3px]'><p className=' font-normal text-[13px] leading-[17px] items-center justify-center text-center'>JOIN US</p></div>
          <div className='justify-center items-center text-center'>
          <p className='text-[12px] leading-[14px]  text-[#8D8D8D] font-normal'>Already a member? <Link href="/Login"><span className='text-[12px] leading-[14px] text-[#111111] underline'> Sign in</span></Link>.</p>
          </div>

       </div>
    </div>
   </div>






   <Footer/>

    </>
  )
}

export default page