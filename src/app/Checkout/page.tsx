import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa6';
import { MdCardTravel, MdOutlineMessage } from 'react-icons/md';

function page() {
  return (
   <>
          <div className='max-w-[1540px]'>
            <div className='flex justify-between  h-[52.8px]  items-center font-poppins  flex-col sm:flex-row pt-2 sm:pt-0 gap-y-6 sm:gap-y-0 '>
              <div className='ml-10'>
                <Link href="/"><Image src="/Vector (1).png" alt="" height={100} width={50} /></Link>
              </div>
              <div className='flex gap-5 mr-10  '>
                <p className='flex-col flex-wrap '>000 800 100 9538</p>
                <Link href="/Cart"><MdOutlineMessage  className='text-2xl'/></Link>
                <Link href="/Cart"><MdCardTravel className='text-2xl' /></Link>
              </div>

            </div>
            {/* main-div */}
            <div className='max-w-[880px] mx-auto  flex font-poppins py-10 mb-20  justify-between flex-col sm:flex-row px-2 md:px-0 '>
              {/* first-colmn-div */}
               <div className='max-w-[440px] flex-wrap md:flex-nowrap  '>
                <p className='text-[21px] leading-[24px]'>How would you like to get your order?</p>
                <p className='font-normal text-[14px] leading-[24px] text-[#757575] pt-3 pb-5'>Customs regulation for India require a copy of the recipient &apos; s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <span className='underline'>Learn More</span></p>

                   <div className='border-[2px] rounded-[10px] border-[#111111] py-4 pl-5'>
                    <div className='flex  gap-5'>
                    <MdCardTravel className='text-xl' />
                      <p className='text-[14px] font-[500px] '>Deliver It</p>
                    </div>
                   </div>
                   <p className='font-[500] text-[21px] leading-[24px] my-5'>Enter your name and address:</p>
                   <input type="text"  placeholder='First Name'  className='text-[16px] w-full py-3 border rounded-[4px] pl-5 my-2 outline-none text-[#111111]'/>
                   <input type="text"  placeholder='Last Name'  className='text-[16px] w-full py-3 border rounded-[4px] pl-5 my-2 outline-none text-[#111111]'/>
                   <input type="text"  placeholder='Address Line 1'  className='text-[16px] w-full py-3 border rounded-[4px] pl-5 outline-none my-2 text-[#111111]'/>
                   <input type="text"  placeholder='Address Line 2'  className='text-[16px] w-full py-3 border rounded-[4px] pl-5 outline-none my-2 text-[#111111]'/>
                   <input type="text"  placeholder='Address Line 3'  className='text-[16px] w-full py-3 border rounded-[4px] pl-5 outline-none my-2 text-[#111111]'/>
                   <div className='flex gap-3'>
               <input type="text"  className='w-full py-3 pl-5 border rounded-[4px] outline-none' placeholder='Locality' />
               <input type="text" className='w-full py-3 pl-5 border rounded-[4px] outline-none' placeholder='Postal Code' />
               

                   </div>
                   <div className='flex gap-2 my-3 '>
                   <div className='border py-3 flex  justify-between items-center relative px-2 rounded-[4px] pl-5 w-full'>
           <span className='font-normal text-[16px] text-[#8D8D8D]'>State/Territory</span>
              <select name="" id="" className='outline-none text-[#8D8D8D]'>
                <option value=""></option>
              </select>
            
           </div>
           <div className='border py-3 flex  justify-between items-center relative px-2 rounded-[4px] pl-5  w-full'>
           <span className='font-normal text-[16px] text-[#8D8D8D]'>India</span>
              <select name="" id="" className='outline-none text-[#8D8D8D]'>.
                <option value=""></option>
              </select>
            
           </div>
                   </div>
                    <div className='flex gap-5 items-center pt-5'>
                      <div className='border h-[18px] w-[18px] border-[#CCCCCC] rounded-[3px] '></div>
                      <p className='text-[15px]'>Save this address to my profile</p>
                    </div>
                    <div className='flex gap-5 items-center pt-5'>
                      <div className='border h-[18px] w-[18px] border-[#CCCCCC] rounded-[3px] bg-[#cccccc] '></div>
                      <p className='text-[15px]'>Make this my preferred address</p>
                    </div>

                       <div className='py-8'>
                        <p className='text-[21px] font-[500] leading-[24px]'>What &apos;s your contact information?</p>
                        <input type="text"  placeholder='Email'  className='text-[16px] w-full py-3 border rounded-[4px] pl-5 my-2 outline-none text-[#111111] mt-6'/>
                        <p className='text-[11px] text-[#757575] ml-5'>A confirmation email will be sent after checkout.</p>

                        <input type="text"  placeholder='Phone Number'  className='text-[16px] w-full py-3 border rounded-[4px] pl-5 my-2 outline-none text-[#111111] mt-6'/>
                        <p className='text-[11px] text-[#757575] ml-5'>A carrier might contact you to confirm delivery..</p>
                       </div>
                       <div className='py-8'>
                        <p className='text-[21px] font-[500] leading-[24px]'>What &apos;s your PAN?</p>
                        <input type="text"  placeholder='PAN'  className='text-[16px] w-full py-3 border rounded-[4px] pl-5 my-2 outline-none text-[#111111] mt-6'/>
                        <p className='text-[11px] text-[#757575] ml-5 w-[325.03px]'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                         </div>
                         <div className='flex gap-5 items-center '>
                      <div className='border h-[18px] w-[18px] border-[#CCCCCC] rounded-[3px] '></div>
                      <p className='text-[11px] text-[#757575]'>Save PAN details to Nike Profile</p>
                    </div>
                    <div className='flex gap-5 items-center pt-10 '>
                      <div className='border h-[18px] w-[18px] border-[#CCCCCC] rounded-[3px] '></div>
                      <p className='text-[12px] text-[#757575] w-[404.5px]'>I have read and consent to eShopWorld processing my information in accordance with the <span className='underline'>Privacy Statement</span> and <span className='underline'>Cookie Policy</span>. eShopWorld is a trusted Nike partner.</p>
                    </div>
                    <div className='rounded-[30px] bg-[#F5F5F5] justify-center items-center flex py-3 mt-20 mb-4'>
                      <button className='text-[15px] text-[#757575]'>Continue</button>
                    </div>
                    <p className='border-t-2  py-4 text-[17px] '>Delivery</p>
                    <p className='border-t-2  py-4 text-[17px]  text-[#757575]'>Shipping</p>

                    <p className='border-t-2 py-4 text-[17px] text-[#757575]'>Billing</p>

                    <p className='border-t-2  py-4 text-[17px] text-[#757575]'>Payment</p>








               </div>
               {/* second-colmn-div */}
               <div className='max-w-[320px] flex-wrap md:flex-nowrap   '>
                <p className='text-[21px] font-[500]'>
                Order Summary
                </p>
                <div className='flex justify-between py-3 flex-wrap'>
            <p>Subtotal</p>
            <p>₹ ₹ 20 890.00</p>
          </div>
          <div className='flex justify-between py-3 flex-wrap'>
            <p>Delivery/Shipping</p>
            <p>Free</p>
          </div>
          <div className='flex justify-between flex-wrap border-t-2 border-b-2 py-4 my-4'>
            <p>Total</p>
            <p>₹ 20 890.00</p>
          </div>
          <p className='text-[9px] py-2'>(The total reflects the price of your order, including all duties and taxes)</p>
          <p className='font-[700] text-[15px] pt-4 '>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
              <div className='flex items-center gap-6  '>
               <div className='mt-6 mx-auto'>
                <Image src="/Frame (25).png" alt=""  width={200} height={100} className='w-full'/>
               </div>
               <div className='w-[85.53px] flex-wrap md:flex-nowrap'>
                <p className='text-[14px] leading-[24px] font-normal '>Nike Dri-FIT ADV TechKnit Ultra Men &apos;s Short-Sleeve Running Top</p>
                <p className='text-[#8D8D8D] text-[13px] leading-[16.9px]'>Qty 1</p>
                <p className='text-[#8D8D8D] text-[13px] leading-[16.9px]'>Size L</p>
                <p className='text-[#8D8D8D] text-[13px] leading-[16.9px]'>₹ 3 895.00</p>
               </div>
              </div>
              <div className='flex items-center gap-6   '>
               <div className='mt-6'>
                <Image src="/Frame (26).png" alt=""  width={200} height={100}/>
               </div>
               <div className='w-[85.53px]'>
                <p className='text-[14px] leading-[24px] font-normal '>Nike Dri-FIT ADV TechKnit Ultra Men &apos;s Short-Sleeve Running Top</p>
                <p className='text-[#8D8D8D] text-[13px] leading-[16.9px]'>Qty 1</p>
                <p className='text-[#8D8D8D] text-[13px] leading-[16.9px]'>Size UK 8</p>
                <p className='text-[#8D8D8D] text-[13px] leading-[16.9px]'>₹ 16 995.00</p>
               </div>
               
              </div>
               </div>
               
            </div>










       <div className='bg-[#111111] min-h-[51px] flex items-center max-w-[1540px] justify-between mx-auto  flex-col sm:flex-row   gap-y-4 sm:gap-y-0'>
        {/* content-div */}
              <div className=' ml-5'>
                <div className="flex items-center gap-5 text-white text-[12px] flex-wrap pt-3 sm:pt-0  ">
                              <Image src="/Frame (21).png" alt="location Icon" width={20} height={20} />
                              <p>India</p>
                              <p className="text-[#7E7E7E] text-[9px] font-poppins whitespace-nowrap">© 2023 Nike, Inc. All Rights Reserved</p>
                              <div className="flex  gap-4 text-[#7E7E7E] text-[10px] font-poppins flex-wrap ">
                              <p className='whitespace-nowrap'>Terms of Use</p>
            <p className='whitespace-nowrap'>Terms of Sale</p>
            
            <p className='whitespace-nowrap'> Privacy Policy</p>
          </div>
                            </div>

              </div>
              {/* pics-dv */}
              <div className='flex gap-2 flex-wrap sm:flex-nowrap '>
                <Image src="/Image (22).png" alt=""  height={100} width={50}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (23).png" alt=""  height={100} width={50}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (24).png" alt=""  height={100} width={50}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (25).png" alt=""  height={100} width={50}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (26).png" alt=""  height={100} width={50}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (27).png" alt=""  height={100} width={50}  className="h-auto w-auto object-contain"/>

                <Image src="/Image (28).png" alt=""  height={100} width={50}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (29).png" alt=""  height={100} width={30}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (30).png" alt=""  height={100} width={30}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (31).png" alt=""  height={100} width={30}  className="h-auto w-auto object-contain"/>
                <Image src="/Image (32).png" alt=""  height={100} width={50}  className="h-auto w-auto object-contain"/>


              </div>
       </div>
          </div>

  </>
  )
}

export default page