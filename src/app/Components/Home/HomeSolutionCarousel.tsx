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
    <section className='flex flex-wrap justify-center w-full mt-25 pt-16 bg-gray-100'>
        <div className='flex flex-wrap w-full text-center'>
          <div className='text-base w-full'>Fulfilling Your Needs for Future</div>
          <div className='text-2xl w-full'>Right Digital Needs with Right Solution</div>
        </div>        
      <div className='container w-full pb-12'>
        <div className="w-full mx-auto mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}loop={true}             
            // autoplay={{
            //   delay: 5000, 
            //   disableOnInteraction: true,
            // }}
            navigation
            pagination={false}
            className="" >
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
               <Image src="/HSC-01.png" alt="icon phone" className="w-full" width={300} height={380} />
               <div className='text-center p-2.5  pb-4'>
                  <div className='mt-1'>Google Ad Online Starter</div>
                  <div className='mt-1'>Duration : 30 days</div>
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-02.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center  p-2.5  pb-4'>
                  <div className='mt-1'>Google Ad Online Starter</div>
                  <div className='mt-1'>Duration : 30 days</div>
                  <div className='mt-2'>
                  <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-03.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center  p-2.5  pb-4'>
                  <div className='mt-1'>Google Ad Online Starter</div>
                  <div className='mt-1'>Duration : 30 days</div>     
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-04.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center  p-2.5  pb-4'>
                  <div className='mt-1'>Google Ad Online Starter</div>
                  <div className='mt-1'>Duration : 30 days</div>    
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
               <Image src="/HSC-01.png" alt="icon phone" className="w-full" width={300} height={380} />
               <div className='text-center  p-2.5  pb-4'>
                  <div className='mt-1'>Google Ad Online Starter</div>
                  <div className='mt-1'>Duration : 30 days</div>    
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-02.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center  p-2.5  pb-4'>
                  <div className='mt-1'>Google Ad Online Starter</div>
                  <div className='mt-1'>Duration : 30 days</div>      
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-03.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center  p-2.5  pb-4'>
                  <div className='mt-1'>Google Ad Online Starter</div>
                  <div className='mt-1'>Duration : 30 days</div>    
                  <div className='mt-2'>
                     <Link href='/' className='rounded-[20px] text-white uppercase text-[14px] border border-[#ccc] p-1.5 block w-28 font-semibold mx-auto bg-gradient-to-r from-[#ffaa85] to-[#ff2d8d]'>Get a Quote</Link>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto border border-gray-300'>
                <Image src="/HSC-04.png" alt='epaper 2' className='w-full' width={300} height={380} />
               <div className='text-center  p-2.5  pb-4'>
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