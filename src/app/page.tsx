import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Footer from './components/Footer'

function page() {
  return (
    <>
      <Navbar/>
      
      <div className='max-w-[1540px] h-[58px] bg-[#F5F5F5] '>
        <div className='w-[1440px] h-[44px] mt-[10px]'>
          <p className='w-[105.15px] h-[17px]  mt-[-1px] pt-2 md:ml-[667.52px] ml-28 sm:ml-20 font-poppins text-[15px] font-[500] items-center'>Hello Nike App</p>
          <div className='w-[323.53px] h-[24px] mt-[19px] md:ml-[558.23px] pr-[11.53px] pl-[11px]'>
            <p className='w-[301px] h-[24px] font-normal font-poppins text-[11px] leading-[24px] justify-center'>Download the app to access everything Nike. <span className='font-[500] leading-[24px] underline'>Get Your Great</span></p>
          </div>
        </div>
      </div>
      {/* picsection */}
      <div className='max-w-[1450px] mx-auto  px-3 sm:px-3 md:px-3 lg:px-0'>
        <Image src="/Image.png" alt="" width={1450} height={700} />
        <div className='justify-center flex-col  flex items-center py-12 sm:px-6 md:px-8 px-4'>
          <p className=' h-[24px]'>First Look</p>
          <h1 className=' sm:text-[48px] text-[25px] md:text-[56px] font-[500] leading-[60px] h-[60px] pt-4 w-full text-center'>Nike Air Max Pulse</h1>
          <p className=' w-full sm:w-[560px] h-[48px] font-normal text-[15px] leading-[24px] pt-10 text-center'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.</p>
          <div className=' pt-24  sm:pt-16 flex gap-4 flex-col sm:flex-row'>
            <button className='bg-[#111111] text-white px-6 py-2 rounded-full text-[15px]'>Notify Me</button>
            <button className='bg-[#111111] text-white px-6 py-2 rounded-full text-[15px]'>Shop Air Max</button>
          </div>
        </div>


        {/* slider-header-portion */}
        <div className='flex  justify-between py-11 text-center items-center  '>
          <p>Best of Air Max</p>

          <div className='flex justify-center items-center gap-4'>
            <p>Shop</p>
            <Image src="/Frame (8).png" alt="" height={50} width={50} />
            <Image src="/Frame (11).png" alt="" height={50} width={50} />
          </div>

        </div>
        {/* slider-pic-potrtion */}
        <div className='grid  gap-3 mx-auto  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 md:px-0'>
          {/* firstpic-section */}
          <div >
            <Image src="/Image (5).png" alt="" height={300} width={500} />
            <div className='flex  justify-between pt-5'>
              <p className='font-[500] text-[15px] leading-[24px] text-[#111111]'>Nike Air Max Pulse</p>
              <p className='text-[15px] font-[500] px-5'>₹ 13 995</p>

            </div>
            <p className='text-[14px] leading-[24px] text-[#757575]'>Women&apos;s Shoes</p>
          </div>






          {/* secondpic-section */}
          <div>
            <Image src="/Image (5).png" alt="" height={300} width={500} />
            <div className='flex  justify-between pt-5'>
              <p className='font-[500] text-[15px] leading-[24px] text-[#111111]'>Nike Air Max Pulse</p>
              <p className='text-[15px] font-[500] px-5'>₹ 13 995</p>

            </div>
            <p className='text-[14px] leading-[24px] text-[#757575]'>Women&apos;s Shoes</p>
          </div>
          {/* thirdpic-section */}
          <div>
            <Image src="/Image (6).png" alt="" height={300} width={500} />
            <div className='flex  justify-between pt-5'>
              <p className='font-[500] text-[15px] leading-[24px] text-[#111111]'>Nike Air Max Pulse</p>
              <p className='text-[15px] font-[500] px-5'>₹ 13 995</p>

            </div>
            <p className='text-[14px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
          </div>
        </div>
        {/* feature-section */}
        <div className=' pt-24'>
          <p className='font-[500] text-[18px] leading-[28px]'>Featured</p>
          <Image src="/Image (9).png" alt="" height={1000} width={5000} />
        </div>
        <div className='justify-center items-center flex-col text-center py-10'>
          <h1 className='font-[500] font-poppins  text-[40px] sm:text-[53px] md:text-[56px]'>STEP INTO WHAT FEELS GOOD</h1>
          <p className='font-normal text-[15px] py-5'>Cause everyone should know the feeling of running in that perfect pair.</p>
          <button className='bg-[#111111] text-white px-6 py-2 rounded-full text-[15px] '>Find Your Shoe</button>
        </div>
        {/* slider-2-section */}
        <div >
          <p>Gear Up</p>
          <div className='flex justify-between pb-3'>
  <div className='flex text-center gap-3 items-center ml-[30%]'>
    <p>Shop</p>
    <Image src="/Frame (8).png" alt="" height={50} width={50} />
    <Image src="/Frame (11).png" alt="" height={50} width={50} />
  </div>
  <div className='hidden md:flex text-center gap-3 items-center mr-[6%]'>
    <p>Shop</p>
    <Image src="/Frame (8).png" alt="" height={50} width={50} />
    <Image src="/Frame (11).png" alt="" height={50} width={50} />
  </div>
</div>
          <div className='grid grid-cols-1 gap-24  sm:grid-cols-1 md:grid-cols-2 pb-36 '>

            <div className='grid gap-2  md:grid-cols-2 grid-cols-1  sm:grid-cols-2 w-full mx-auto'>
              <div>
                <Image src="/Image (10).png" alt="" height={300} width={500} />
                <div className='flex flex-col md:flex-row  justify-between pt-5'>
                  <p className='font-[500] text-[15px] leading-[24px] text-[#111111] '>Nike Dri-FIT ADV TechKnit Ultra</p>
                  <p className='text-[15px] font-[500] px-5 '>₹ 3 895</p>


                </div>
                <p className='text-[14px] leading-[24px] text-[#757575] w-36 '>Men&apos;s Short-Sleeve Running Top</p>
              </div>
              <div>
                <Image src="/Image (11).png" alt="" height={300} width={500} />
                <div className='flex  justify-between pt-5'>
                  <p className='font-[500] text-[15px] leading-[24px] text-[#111111]'>Nike Dri-FIT Challenger</p>
                  <p className='text-[15px] font-[500] px-5'>₹ 2 495</p>

                </div>
                <p className='text-[14px] leading-[24px] text-[#757575] w-44'>Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
              </div>

            </div>
            <div className='grid  gap-2 md:grid-cols-2 grid-cols-1  sm:grid-cols-2 w-full'>
              <div>
                <Image src="/Image (12).png" alt="" height={300} width={500} />
                <div className='flex  justify-between pt-5'>
                  <p className='font-[500] text-[15px] leading-[24px] text-[#111111]'>Nike Dri-FIT ADV Run Division</p>
                  <p className='text-[15px] font-[500] px-5'>₹ 5 295</p>

                </div>
                <p className='text-[14px] leading-[24px] text-[#757575] w-36'>Women&apos;s Long-Sleeve Running Top</p>
              </div>
              <div>
                <Image src="/Image (13).png" alt="" height={300} width={500} />
                <div className='flex  justify-between pt-5'>
                  <p className='font-[500] text-[15px] leading-[24px] text-[#111111]'>Nike Fast</p>
                  <p className='text-[15px] font-[500] px-5'>₹ 3 795</p>

                </div>
                <p className='text-[14px] leading-[24px] text-[#757575] w-22'>Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets</p>
              </div>

            </div>
          </div>

        </div>



        {/* dont missection */}
        <div>
          <p className='py-4'>Don&apos;t Miss</p>
          <Image src="/Image (14).png" alt="" width={5000} height={500} />
          <div className='justify-center items-center flex-col text-center py-14 font-poppins'>
            <h1 className='font-[500] font-poppins  text-[30px] sm:text-[53px] md:text-[52px]'>FLIGHT ESSENTIALS</h1>
            <p className='font-normal text-[15px] py-5'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            <button className='bg-[#111111] text-white px-6 py-2 rounded-full text-[15px] '>Shop</button>
          </div>
        </div>
        {/* 3-colm-pic-section */}
        <div>
          <p className='text-[23px] font-[500] leading-[28px] font-poppins py-4'>The Essentials</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-4'>
            <div className=''>
              <Image src="/Frame (14).png" alt="" height={50} width={500} />
            </div>
            <div className=''>
              <Image src="/Frame (13).png" alt="" height={50} width={500} />
            </div>
            <div className=''>
              <Image src="/Frame (15).png" alt="" height={50} width={500} />
            </div>
          </div>
        </div>
        {/* 4-colm-section paragraph */}
        <div className='justify-center items-center  md:pl-52 py-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
            <div className='justify-center items-center text-center  sm:text-left'>
              <h1 className='font-poppins leading-[24px] text-[15px] py-3'>Icons</h1>
              <div className='text-[#757575] text-[14px] leading-[24px] font-poppins '>
                <p className='py-2'>Air Force 1</p>
                <p className='py-2'>Huarache</p>
                <p className='py-2'>Air Max 90</p>
                <p className='py-2'>Air Max 95</p>
              </div>
            </div>
            <div className='justify-center items-center text-center   sm:text-left'>
              <h1 className='font-poppins leading-[24px] text-[15px] py-3'>Shoes</h1>
              <div className='text-[#757575] text-[14px] leading-[24px] font-poppins '>
                <p className='py-2'>All Shoes</p>
                <p className='py-2'>Custom Shoes</p>
                <p className='py-2'>Jordan Shoes</p>
                <p className='py-2'>Running Shoes</p>
              </div>
            </div>
            <div className='justify-center items-center text-center  sm:text-left '>
              <h1 className='font-poppins leading-[24px] text-[15px] py-3'>Clothing</h1>
              <div className='text-[#757575] text-[14px] leading-[24px] font-poppins '>
                <p className='py-2'>All Clothing</p>
                <p className='py-2'>Modest Wear</p>
                <p className='py-2'>Hoodies & Pullovers</p>
                <p className='py-2'>Shirts & Tops</p>
              </div>
            </div>
            <div className='justify-center items-center text-center  sm:text-left '>
              <h1 className='font-poppins leading-[24px] text-[15px] py-3'>Kids&apos;</h1>
              <div className='text-[#757575] text-[14px] leading-[24px] font-poppins '>
                <p className='py-2'>Infant & Toddler Shoes</p>
                <p className='py-2'>Kids&apos; Shoes</p>
                <p className='py-2'>Kids&apos; Jordan Shoes</p>
                <p className='py-2'>Kids&apos; Basketball Shoes</p>
              </div>
            </div>

          </div>
        </div>





      </div>
     



<Footer/>

    </>
  )
}

export default page