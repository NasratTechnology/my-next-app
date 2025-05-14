import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavigationHead = () => {
  return (
    <nav className='flex justify-center pt-4 pb-4'>
      <div className="container flex justify-between w-full">
        <div className='flex align-middle items-center'>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="uppercase font-medium text-[#555] uppercase hover:text-blue-600">Home</Link>
            <Link href="/" className="uppercase font-medium text-[#555] uppercase hover:text-blue-600">About us</Link>
            <Link href="/" className="uppercase font-medium text-[#555] uppercase hover:text-blue-600">Services</Link>
            <Link href="/" className="uppercase font-medium text-[#555] uppercase hover:text-blue-600">Work Portfolio</Link>
            <Link href="/" className="uppercase font-medium text-[#555] uppercase hover:text-blue-600"> Product Outlet</Link>
            <Link href="/" className="uppercase font-medium text-[#555] uppercase hover:text-blue-600">Conatct Us</Link>
            <Link href="/" className="uppercase font-medium text-[#555] uppercase hover:text-blue-600">Request a Quote</Link>
          </div>
        </div> 
        <div>
          <ul className='flex gap-2'>
            <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon_facebook.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
            <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-twitter-x.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
            <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-linked.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
            <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-pinterest.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
            <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-youtube.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
            <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-instagram.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationHead;