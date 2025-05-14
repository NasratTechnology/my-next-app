import React from 'react';
import Image from 'next/image';

const FooterLogo = () => {
  return (
    <div className='flex justify-center text-center mt-12'>
      <a href="">
        <Image src="/logo-ntpl-png.png" alt="logo" width={200} height={100}/> 
      </a>
    </div>
  )
}

export default FooterLogo