'use client'; // Needed if you're using app directory in Next.js 13+
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavigationHead() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 sm:px-0">   
        <div className="flex justify-between h-10 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="md:hidden flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                  <Image src="/logo-ntpl-png.png" alt="Logo Image" className="w-auto h-auto" width={60} height={70} />
              </Link>
            </div>
            <div className='hidden md:flex'>
              <div className="space-x-8 items-center uppercase font-bold text-sm">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/#about" className="text-gray-700 hover:text-blue-600">About Us</Link>
                <Link href="/#services" className="text-gray-700 hover:text-blue-600">Services</Link>
                <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Work Portfolio</Link>
                <Link href="/#fulfilling" className="text-gray-700 hover:text-blue-600">Product Outlet</Link>
                <Link href="/#footer" className="text-gray-700 hover:text-blue-600">Conatct Us</Link>
                <Link href="/#getaquote" className="text-gray-700 hover:text-blue-600">Request a Quote</Link>
              </div>
            </div>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <ul className='flex gap-2'>
              <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon_facebook.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
              <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-twitter-x.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
              <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-linked.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
              <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-pinterest.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
              <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-youtube.svg" alt="Logo Image" className="" width={24} height={24} />
              </Link></li>
              <li><Link href="/" className='flex items-center justify-center border border-black rounded-2xl w-8 h-8 p-2'><Image src="/icon-instagram.svg" alt="Logo Image" className="" width={24} height={24} /></Link></li>
          </ul>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 pt-1 flex flex-wrap bg-gradient-to-l from-[#ffa455] to-[#ff3876] uppercase font-bold text-sm text-[#fff]">
            <Link href="/" className="w-100 text-[#fff] pt-2 pb-2 border-b border-[#ffffff5e] border-solid ">Home</Link>
            <Link href="/#about" className="w-100 text-[#fff] pt-2 pb-2 border-b border-[#ffffff5e] border-solid ">About Us</Link>
            <Link href="/#services" className="w-100 text-[#fff] pt-2 pb-2 border-b border-[#ffffff5e] border-solid ">Services</Link>
            <Link href="/WorkPortfolio" className="w-100 text-[#fff] pt-2 pb-2 border-b border-[#ffffff5e] border-solid ">Work Portfolio</Link>
            <Link href="#fulfilling" className="w-100 text-[#fff] pt-2 pb-2 border-b border-[#ffffff5e] border-solid ">Product Outlet</Link>
            <Link href="#footer" className="w-100 text-[#fff] pt-2 pb-2 border-b border-[#ffffff5e] border-solid ">Conatct Us</Link>
            <Link href="/#getaquote" className="w-100 text-[#fff]">Request a Quote</Link>
        </div>
      )}
    </nav>
  );
}
