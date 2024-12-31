import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function page() {
  return (
   <>
   <Navbar/>
   <div className='max-w-[1540px] font-poppins px-2 md:px-0  '>
    <div className='justify-center items-center text-center pt-20 pb-5'>
        <h1 className='font-[500] text-[32px] leading-[36px]'>GET HELP</h1>
        <div className="flex justify-center items-center">
  <div className="relative w-[457.33px] my-5 ">
    <input 
      type="text" 
      className="w-full text-[#757575] py-3 px-4 pr-10 border rounded-xl  outline-none text-[15px]" 
      placeholder="What can we help you with?"
    />
    <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#757575] h-6 w-7" />
  </div>







</div>
    </div>
      {/* main-section-3-part-div */}

      <div className='max-w-[1309px] flex  mx-auto font-poppins pb-10 flex-wrap md:flex-nowrap'>
        {/* 1-div */}
        <div className='w-[939.75px] px-5' >
          <h1 className='font-[500] text-[28px] leading-[32px]'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                <p className='font-normal text-[15px] leading-[28px] py-3'>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <div className='px-5'>
                <p className='font-normal text-[16px] leding-[28px] py-2'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>

<p className='text-[15px]'>If you enter your PAN information at checkout, you &apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
<p className='text-[16px] py-4'>Apple Pay</p>
                </div>
                <p className='text-[16px]'>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.</p>
                <div className='  pt-5 flex gap-4 flex-col sm:flex-row'>
            <button className='bg-[#111111] text-white px-6 py-2 rounded-full text-[15px]'>JOIN US</button>
            <button className='bg-[#111111] text-white px-6 py-2 rounded-full text-[15px]'>SHOP NIKE</button>
          </div>
          <div className=''>
            <h1 className='text-[20px] py-4'>FAQs</h1>
            <h1 className='text-[16px] font-[700]'>Does my card need international purchases enabled?</h1>
            <p className='text-[16px] font-normal leading-[28px] py-3'>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
            <p className='text-[15px] leading-[28px] font-normal'>Please note, some banks may charge <span className='font-[600] text-[14px] underline'> a small transaction fee</span> for international orders.</p>
            <h1 className='font-[700] text-[15px] pt-3 pb-2'>Can I pay for my order with multiple methods?</h1>
           <p className='font-normal text-[15px] '> No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>

           <h1 className='font-[700] text-[15px] pt-5 pb-2'>What payment method is accepted for SNKRS orders?</h1>
           <p className='font-normal text-[15px] '>You can use any accepted credit card to pay for your SNKRS order.</p>

           <h1 className='font-[700] text-[15px] pt-5 pb-2'>Why don&apos;t I see Apple Pay as an option?</h1>
           <p className='font-normal text-[15px] '>To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>


           <p className='text-[15px] leading-[28px] pt-5'>Was this answer helpful?</p>
          {/* icons */}
           <p className='text-[16px] leading-[24px] text-[#757575] py-3'>RELATED</p>
          <div className='px-5'>
          <p className='text-[16px] leading-[28px] font-[500] underline py-2'>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
          <p className='text-[16px] leading-[28px] font-[500] underline py-2'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
          </div>
          </div>





        </div>
        {/* 2-div */}
        <div className='w-[0.5px] h-[900px] bg-[#CCCCCC] ml-8 hidden md:block'></div>
        {/* 3-div */}
        <div className='max-w-[313.25px] mx-auto text-center'>
          <h1 className='text-[28px] font-[500] w-[265.61px] mx-auto'>Contact Us</h1>
          <div className='flex-col  flex justify-center items-center text-center w-[265.61px]  '>
             <Image src="/Image (18).png" alt="" height={20} width={50} className='py-4' />
             <p className='text-[15px] leading-[24px]'>000 800 919 0566</p>
             <p className='leading-[28px] text-[15px]'>Products & Orders: 24 hours a day, 7 days a week
             Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
             <div className='pt-20 flex flex-col justify-center items-center'>
             <Image src="/Image (19).png" alt="" height={20} width={50} className='py-4' />
             <p className='text-[15px] leading-[14px] pb-2'>24 hours a day</p>
             <p>7 days a week</p>
             </div>

             <div className='pt-20 flex flex-col justify-center items-center'>
             <Image src="/Image (20).png" alt="" height={20} width={50} className='py-4' />
             <p className='text-[15px] leading-[14px] pb-2'>We&apos;ll reply withiny</p>
             <p>five business days</p>
             </div>

             <div className='pt-20 flex flex-col justify-center items-center'>
             <Image src="/Image (21).png" alt="" height={20} width={50} className='py-4' />
             <p className='text-[16px] leading-[14px] pb-2'>STORE LOCATOR</p>
             <p className='text-[15px]'>Find Nike retail stores near you</p>
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