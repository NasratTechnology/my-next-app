import React from 'react';
import Image from 'next/image';

const FooterGetInTouch = () => {
  return (    
    <section className='flex w-full justify-between mt-9'>
      <ul className='w-full flex justify-center text-white gap-8'>
        <li className='flex gap-1 align-middle items-center'>
          <div className='bg-[#080f33] w-[280px] h-[120px] text-center flex items-center justify-center flex-wrap p-4 text-[#ccc]'>
            <div className='w-full'>Get in Touch</div>
            <div className='w-full flex justify-center gap-1 items-center'>
              <div><Image src="/icon-phone-white.png" alt='' width={20} height={20} /></div>
              <div>+91 998877665544</div>
            </div>
            <div className='w-full flex justify-center gap-1 items-center'>
              <div><Image src="/icon-envelope-white.png" alt='' width={20} height={20} /></div>
              <div>info@email.com</div>
            </div>
          </div>
        </li>
        <li className='flex gap-1 align-middle items-center'>
          <div className='bg-[#080f33] w-[280px] h-[120px] text-center flex items-center justify-center flex-wrap p-4 text-[#ccc]'>
            <div className='w-full'>Get in Touch</div>
            <div className='w-full flex justify-center gap-1 items-center'>
              <div><Image src="/icon-phone-white.png" alt='' width={20} height={20} /></div>
              <div>+91 998877665544</div>
            </div>
            <div className='w-full flex justify-center gap-1 items-center'>
              <div><Image src="/icon-envelope-white.png" alt='' width={20} height={20} /></div>
              <div>info@email.com</div>
            </div>
          </div>
        </li>
        <li className='flex gap-1 align-middle items-center'>
          <div className='bg-[#080f33] w-[280px] h-[120px] text-center flex items-center justify-center flex-wrap p-4 text-[#ccc]'>
            <div className='w-full'>Get in Touch</div>
            <div className='w-full flex justify-center gap-1 items-center'>
              <div><Image src="/icon-phone-white.png" alt='' width={20} height={20} /></div>
              <div>+91 998877665544</div>
            </div>
            <div className='w-full flex justify-center gap-1 items-center'>
              <div><Image src="/icon-envelope-white.png" alt='' width={20} height={20} /></div>
              <div>info@email.com</div>
            </div>
          </div>
        </li>
        <li className='flex gap-1 align-middle items-center'>
          <div className='bg-[#080f33] w-[280px] h-[120px] text-center flex items-center justify-center flex-wrap p-4 text-[#ccc]'>
            <div className='w-full'>Get in Touch</div>
            <div className='w-full flex justify-center gap-1 items-center'>
              <div><Image src="/icon-phone-white.png" alt='' width={20} height={20} /></div>
              <div>+91 998877665544</div>
            </div>
            <div className='w-full flex justify-center gap-1 items-center'>
              <div><Image src="/icon-envelope-white.png" alt='' width={20} height={20} /></div>
              <div>info@email.com</div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FooterGetInTouch