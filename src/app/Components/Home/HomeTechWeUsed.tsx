import React from 'react';
import Image from 'next/image';

const HomeTechWeUsed = () => {
  return (
    <section className='flex flex-wrap w-full justify-center text-center pt-4 bg-white'> 
      <div className='container flex w-full justify-center flex-wrap mt-2 md:mt-8'>
        <div className='w-full text-left text-2xl text-black'>Technologies we used</div>
        <div className='w-full flex justify-center mt-8'>
          <ul className='flex flex-wrap w-full md:justify-between '>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-01.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-02.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-03.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-04.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-05.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-06.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-07.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-08.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
            <li className='w-26 h-14 sm:w-36 sm:h-14 border border-gray-400'>
                <Image src="/tech-we-used-04.jpg" alt='epaper 2' className='w-[80] sm:w-[118]' width={118} height={52} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeTechWeUsed