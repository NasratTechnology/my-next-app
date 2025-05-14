
"use client"; 
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeBanner = () => {
  return (
    <section className='flex justify-center'>
      <div className=' w-full'>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}loop={true} 
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,  
            }}
            navigation
            pagination={false}
            className="" 
          >
            <SwiperSlide className='overflow-y-auto'>
               <Image src="/banner-01.png" alt="icon phone" className="w-full" width={1536} height={50} />
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto'>
                <Image src="/banner-01.png" alt='epaper 2' className='w-full' width={1536} height={50} />
            </SwiperSlide>
            <SwiperSlide className='overflow-y-auto'>
                <Image src="/banner-01.png" alt='epaper 2' className='w-full' width={1536} height={50} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner