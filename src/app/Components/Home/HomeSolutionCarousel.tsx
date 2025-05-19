"use client"; 
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSolutionCarousel = () => {
  return (
    <section className='flex flex-wrap justify-center w-full mt-0 md:mt-25 pt-16 bg-gray-100' id='fulfilling'>
        <div className='flex flex-wrap w-full text-center text-[#333]'>
          <div className='text-base w-full uppercase'>Fulfilling Your Needs for Future</div>
          <div className='text-2xl w-full uppercase font-bold mt-2'>Right Digital Needs with Right Solution</div>
        </div>        
      <div className='container w-full pb-12'>
        <div className="w-full mx-auto mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}             
            // autoplay={{
            //   delay: 5000, 
            //   disableOnInteraction: true,
            // }}
            navigation
            pagination={false}

            breakpoints={{
               320: {
                  slidesPerView: 1,
               },
               640: {
                  slidesPerView: 2,
               },
               1024: {
                  slidesPerView: 3,
               },
               1440: {
                  slidesPerView: 4,
               },
            }}



            className="" >
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
               <Image src="/HSC-01.png" alt="icon phone" className="w-full" width={300} height={380} />
               <div className='text-center p-2.5 pb-4 text-[#555]'>
                  <div className='mt-1'>Small Business Website</div>
                  <div className='mt-1'>Duration : 5 Days</div>
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-02.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center p-2.5 pb-4 text-[#555]'>
                  <div className='mt-1'>Fashion Boutique Logo</div>
                  <div className='mt-1'>Duration : 5 Days</div>
                  <div className='mt-2'>
                  <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-03.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center p-2.5 pb-4 text-[#555]'>
                  <div className='mt-1'>Facebook Page Promotion</div>
                  <div className='mt-1'>Duration : 30 days</div>     
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-04.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center p-2.5 pb-4 text-[#555]'>
                  <div className='mt-1'>Affordable Travel Seo</div>
                  <div className='mt-1'>Duration : 30 days</div>    
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
               <Image src="/HSC-01.png" alt="icon phone" className="w-full" width={300} height={380} />
               <div className='text-center p-2.5 pb-4 text-[#555]'>
                  <div className='mt-1'>Fashion Boutique Logo</div>
                  <div className='mt-1'>Duration : 30 days</div>    
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-02.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center p-2.5 pb-4 text-[#555]'>
                  <div className='mt-1'>Google Ad Online Starter</div>
                  <div className='mt-1'>Duration : 30 days</div>      
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default HomeSolutionCarousel