import React from 'react'

const FooterTop = () => {
  return (
    <div className='w-full flex flex-wrap pt-4 pb-4 border-b border-black'>
      <ul className='flex flex-wrap md:flex-nowrap w-full justify-start md:justify-between md:text-center text-[#b5b5b5]'>
        <li className='w-full md:w-auto'><a href="">About us</a></li>
        <li className='w-full md:w-auto'><a href="">Privacy Policy</a></li>
        <li className='w-full md:w-auto'><a href="">Terms & Conditions</a></li>
        <li className='w-full md:w-auto'><a href="">Orders Cancellation & Refund Policy</a></li>
        <li className='w-full md:w-auto'><a href="">Customers Review</a></li>
        <li className='w-full md:w-auto'><a href="">FAQS</a></li>
        <li className='w-full md:w-auto'><a href="">Contact Us</a></li>
        <li className='w-full md:w-auto'><a href="">Our Blog</a></li>
      </ul>
    </div>
  )
}

export default FooterTop