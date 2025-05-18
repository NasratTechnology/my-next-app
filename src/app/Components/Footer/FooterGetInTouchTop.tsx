import React from 'react';
import Image from 'next/image';

const FooterGetInTouchTop = () => {
  return (    
    <section className='flex w-full justify-center mt-9'>
      <ul className='w-full flex flex-wrap md:flex-nowrap justify-center text-[#ccc] gap:4 md:gap-8'>
        <li className='flex w-full md:w-1/4 gap-1 align-middle items-center'>
          <div><Image src="/icon-phone-white.png" alt='' width={20} height={20} /></div>
          <div className='text-sm'>+91 9988776544/1122334455</div>
        </li>
        <li className='flex w-full md:w-1/3 gap-1 align-middle items-center'>
          <div><Image src="/icon-mapmarker-white.png" alt='' width={20} height={20} /></div>
          <div className='text-sm'>John Doe 1234 Elm Street Apt 56B Springfield, IL 62704 United States</div>
        </li>
        <li className='flex w-full md:w-1/4 gap-1 align-middle items-center'>
          <div><Image src="/icon-envelope-white.png" alt='' width={20} height={20} /></div>
          <div className='text-sm'>email@email.com / info@email.com</div>
        </li>
      </ul>
    </section>
  );
}

export default FooterGetInTouchTop