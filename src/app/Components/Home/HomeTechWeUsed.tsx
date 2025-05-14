import React from 'react';
import Image from 'next/image';

const HomeTechWeUsed = () => {
  return (
    <section className='flex flex-wrap w-full justify-center text-center mt-12'>
      <div className='container flex w-full justify-center flex-wrap'>
        <div className='w-full text-left text-2xl'>Technologies we used</div>
        <div className='w-full flex justify-center mt-8'>
          <ul className='flex flex-wrap w-full justify-between '>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-01.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-02.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-03.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-04.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-05.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-06.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-07.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-08.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
            <li className='w-36 h-14 border border-gray-400'>
                <Image src="/tech-we-used-04.jpg" alt='epaper 2' className='w-full' width={138} height={52} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeTechWeUsed