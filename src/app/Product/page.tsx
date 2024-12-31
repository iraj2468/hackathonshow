import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { FaCartPlus } from 'react-icons/fa6'

function page() {
  return (
   <>
     <Navbar/>
     <div className='max-w-[1440px] '>
        <div className='max-w-[1200px] mx-auto pt-10 md:pt-20 flex flex-col md:flex-row items-center  gap-20 px-2 sd:px-0 mb-40 md:mb-56'>
            <div  className='  md:w-1/2'>
                <Image src="/Rectangle (2).png" alt="" height={500} width={600} className='rounded-sm  ' />
            </div>
            <div className='md:w-1/2 justify-center items-center '>
                <h1 className='font-poppins font-[500] text-[48px] leading-[48px] mx-auto '>Nike Air Force 1 
                PLT.AF.ORM</h1>
                <p className='font-poppins font-normal text-[15px] leading-[28px] pt-10 max-w-[374.990px]'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot; inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                <h1 className='font-poppins font-[500] text-[36px] leading-[28px] pt-8'>₹ 8 695.00</h1>
                <div className='px-6 py-2 bg-[#111111] text-white flex  whitespace-nowrap gap-2 w-[174.42px] rounded-[30px] items-center justify-center mt-6 '>
                <FaCartPlus />
                   <Link href="#" className='text-[13px]'>  Add To Cart</Link>
                </div>
            </div>

        </div>
     </div>


     
     
     <Footer/>
   </>
  )
}

export default page