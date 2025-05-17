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
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="md:hidden flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                MySite
              </Link>
            </div>
            <div className='hidden md:flex'>
              <div className="space-x-8 items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
                <Link href="/Services" className="text-gray-700 hover:text-blue-600">Services</Link>
                <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Work Portfolio</Link>
                <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Product Outlet</Link>
                <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Conatct Us</Link>
                <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Request a Quote</Link>
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
        <div className="md:hidden px-4 pb-4 space-y-2">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link href="/Services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Work Portfolio</Link>
            <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Product Outlet</Link>
            <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Conatct Us</Link>
            <Link href="/WorkPortfolio" className="text-gray-700 hover:text-blue-600">Request a Quote</Link>
        </div>
      )}
    </nav>
  );
}
