import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { RiArrowDropDownLine } from 'react-icons/ri'
function page() {
  return (
 <  >
<Navbar/>
 <div className='max-w-[1550px]    '>
    
      <div className='pt-10 flex justify-between flex-col  sm:flex-row items-start sm:items-center '>
      <div className='font-poppins font-[500] text-[24px] leading-[31.2px] ml-5'>New (500)</div>
      <div>
        <div className='flex gap-6 font-normal text-[16px] items-center'><p>Hide Filters</p>
        <Image src="/Frame (22).png" alt=""  height={20} width={20}/>
       

        <div className='flex '>
            <label htmlFor="" className='font-normal text-[15px] '>SortBy
            <select name="" id="" className='outline-none w-[20px]'>
                <option value="" className='font-normal text-[15px]'></option>
                <option value="">woow</option>
                <option value="">hooo</option>
            </select></label>
        </div>
      </div>
      </div>
      </div>
        {/* mainsection-start */} 
        <div className='flex ml-7 flex-wrap  items-start mx-auto'>
            <div className='w-[200px] py-7 px-3 text-left justify-center items-center whitespace-nowrap'>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Shoes</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Tops & T-Shirts</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Hoodies & Sweatshirts</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Jackets</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Trousers & Tights</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Shorts</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Tracksuits</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Jumpsuits & Rompers</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Skirts & Dresses</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px] py-1'>Socks</p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px]   '>Accessories </p>
                <p className='font-poppins font-[500]  text-[15px] leading-[21.6px]   '> & Equipment</p>
                {/* last-sec */}
           <div className=''>
               <div className='flex border-t-2 mt-20 items-center justify-between'>
          <p className='text-[16px] font-[500] leading-[24px]  mt-3'>Gender</p>
          <RiArrowDropDownLine  className='mt-3 text-2xl'/>
               </div>
               <div className='flex items-center gap-2 pt-4'>
                <div className='border w-[16px] h-[16px] rounded-[3px]'>

                </div>
                <p className='text-[14px]'>Men</p>
               </div>
               <div className='flex items-center gap-2 py-1 '>
                <div className='border w-[16px] h-[16px] rounded-[3px]'>

                </div>
                <p className='text-[14px]'>Women</p>
               </div>
               <div className='flex items-center gap-2 '>
                <div className='border w-[16px] h-[16px] rounded-[3px]'>

                </div>
                <p className='text-[14px]'>Unisex</p>
               </div>

           </div>
           
           <div className=''>
               <div className='flex border-t-2 mt-4 items-center justify-between'>
          <p className='text-[16px] font-[500] leading-[24px]  mt-3'>Kids</p>
          <RiArrowDropDownLine  className='mt-3 text-2xl'/>
               </div>
               <div className='flex items-center gap-2 pt-4'>
                <div className='border w-[16px] h-[16px] rounded-[3px]'>

                </div>
                <p className='text-[14px]'>Boys</p>
               </div>
               <div className='flex items-center gap-2 py-1 '>
                <div className='border w-[16px] h-[16px] rounded-[3px]'>

                </div>
                <p className='text-[14px]'>Girls</p>
               </div>
               

           </div>
           
           <div className=''>
               <div className='flex border-t-2 mt-4 items-center justify-between'>
          <p className='text-[16px] font-[500] leading-[24px]  mt-3'>Shop By Price</p>
          <RiArrowDropDownLine  className='mt-3 text-2xl'/>
               </div>
               <div className='flex items-center gap-2 pt-4'>
                <div className='border w-[16px] h-[16px] rounded-[3px]'>

                </div>
                <p className='text-[14px] font-normal '>Under ₹ 2 500.00</p>
               </div>
               <div className='flex items-center gap-2 py-1 '>
                <div className='border w-[16px] h-[16px] rounded-[3px]'>

                </div>
                <p className='text-[14px]'>₹ 2 501.00 - ₹ 7 500.00</p>
               </div>
              

           </div>

            </div>
            <div className='w-2 h-[290px] bg-[#111111]  opacity-[50%] mt-8 ml-2 rounded-[7px]'></div>
            {/* picdiv */}
            <div className='w-[1200px] ml-12 md:mt-8 px-1 mx-auto flex-wrap '>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2 '>
                    <div >
                        <Image src="/Rectangle.png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (1).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Link href="/Product"><Image src="/Rectangle (2).png" alt=""  height={400} width={400}/></Link>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
              {/* 2part */} 
              <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2  pt-10'>
                    <div >
                        <Image src="/Rectangle (3).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (4).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (5).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
                {/* part-3 */}
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2  pt-10'>
                    <div >
                        <Image src="/Rectangle (6).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (7).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (8).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
                {/* part-4-section */}
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2 pt-10 '>
                    <div >
                        <Image src="/Rectangle (9).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (10).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (11).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
              {/* 5part */} 
              <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2  pt-10'>
                    <div >
                        <Image src="/Rectangle (12).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (13).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (14).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
                {/* part-6 */}
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2  pt-10'>
                    <div >
                        <Image src="/Rectangle (15).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (16).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (17).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
                {/* part-7 */}
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2  pt-10'>
                    <div >
                        <Image src="/Rectangle (18).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (19).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (20).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
              {/* 8part */} 
              <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2  pt-10'>
                    <div >
                        <Image src="/Rectangle (21).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (22).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (23).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
                {/* part-9 */}
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2  pt-10'>
                    <div >
                        <Image src="/Rectangle (24).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (25).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (26).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
                {/* par-10 */}
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-2 pt-10 '>
                    <div >
                        <Image src="/Rectangle (27).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (28).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/Rectangle (29).png" alt=""  height={400} width={400}/>
                        <div className='font-poppins'>
                            <p className='text-[#9E3500]  font-[500] leading-[28px] pt-2'>Just In</p>
                            <p className='leading-[24px]  font-normal text-[#11111] text-[15px] py-1'>Nike Air Force 1 Mid &apos;07</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>Men&apos;s Shoes</p>
                            <p className='font-normal text-[15px] leading-[24px] text-[#757575]'>1 Colour</p>
                            <p className='font-[500] text-[15px] leading-[28px] text-[#111111] pt-2'>MRP : ₹ 10 795.00</p>
                        </div>
                    </div>
                </div>
                {/* 
    last section */}
               <div className='w-full  border-t  mt-32 mb-10'>
                <p className='font-[500] font-poppins text-[19px] leading-[24px] items-center pt-10'>Related Categories</p>
               <div className='py-8 flex flex-wrap gap-3  sm:ml-[-1%] whitespace-nowrap ]'>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>Best Selling Products </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>Best Shoes </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>New Basketball Shoes </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>New Football Shoes </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>New Men&apos;s Shoes </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>New Running Shoes </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>Best Men&apos;s Shoes </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>New Jordan Shoes </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>Best Women&apos;s Shoes </Link></div>
               <div className='border border-[#CCCCCC] px-3 py-1 rounded-[20px]'><Link href="#" className='text-[12px]  font-normal leading-[18px] font-poppins items-center'>Best Training & Gym </Link></div>
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