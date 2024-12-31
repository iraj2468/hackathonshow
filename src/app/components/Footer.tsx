import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
      <div className="bg-[#111111] px-4 sm:px-10 py-8">
        {/* Footer Main Section */}
        <div className="flex flex-wrap justify-between max-w-[1440px] mx-auto">
          {/* Links Section */}
          <div className="w-full lg:w-[70%] mb-8 lg:mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-white text-[10px] font-normal font-poppins">
                <p className="py-2">Find A Store</p>
                <p className="py-2">Become A Member</p>
                <p className="py-2">Sign Up for Email</p>
                <p className="py-2">Send Us Feedback</p>
                <p className="py-2">Student Discounts</p>
              </div>
              <div className="text-white text-[10px] font-normal font-poppins">
                <p className="text-[12px] py-2">Get Help</p>
                <p className="text-[#7E7E7E] py-2">Order Status</p>
                <p className="text-[#7E7E7E] py-2">Delivery</p>
                <p className="text-[#7E7E7E] py-2">Returns</p>
                <p className="text-[#7E7E7E] py-2">Payment Options</p>
                <p className="text-[#7E7E7E] py-2">Contact Us On Nike.com Inquiries</p>
                <p className="text-[#7E7E7E] py-2">Contact Us On All Other Inquiries</p>
              </div>
              <div className="text-white text-[10px] font-normal font-poppins">
                <p className="text-[12px] py-2">About Nike</p>
                <p className="text-[#7E7E7E] py-2">News</p>
                <p className="text-[#7E7E7E] py-2">Careers</p>
                <p className="text-[#7E7E7E] py-2">Investors</p>
                <p className="text-[#7E7E7E] py-2">Sustainability</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          {/* Social Icons */}
<div className="flex gap-6 justify-center lg:justify-start items-center mt-[-10%] ">
  <div className="w-10 h-10 flex items-center justify-center">
    <Image src="/Frame (16).png" alt="Social Icon" layout="intrinsic" width={30} height={30} />
  </div>
  <div className="w-10 h-10 flex items-center justify-center">
    <Image src="/Frame (17).png" alt="Social Icon" layout="intrinsic" width={30} height={30} />
  </div>
  <div className="w-10 h-10 flex items-center justify-center">
    <Image src="/Frame (18).png" alt="Social Icon" layout="intrinsic" width={30} height={30} />
  </div>
  <div className="w-10 h-10 flex items-center justify-center">
    <Image src="/Frame (19).png" alt="Social Icon" layout="intrinsic" width={30} height={30} />
  </div>
</div>

        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center mt-8 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-6 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 text-white text-[12px]">
              <Image src="/Frame (21).png" alt="location Icon" width={20} height={20} />
              <p>India</p>
            </div>
            <p className="text-[#7E7E7E] text-[11px] font-poppins">© 2023 Nike, Inc. All Rights Reserved</p>
          </div>
          <div className="flex gap-4 text-[#7E7E7E] text-[12px] font-poppins whitespace-nowrap flex-wrap">
            <p>Guides</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Nike Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
