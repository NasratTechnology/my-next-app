import React from 'react';
import Image from 'next/image';

const FooterSocial = () => {
  return (
    <div className='flex justify-center mt-14'>
      <ul className='flex justify-center gap-5 relative md:before:content-[""] md:before:absolute md:before:w-[200px] md:before:left-[-210px] md:before:top-[10px] md:before:h-[1px] md:before:border-b before:border-black md:before:border-solid  md:after:content-[""] md:after:absolute md:after:w-[200px] md:after:right-[-210px] md:after:top-[10px] md:after:h-[1px] md:after:border-b md:after:border-black md:after:border-solid'> 
        <li><a href=""><Image src="/social-face.png" alt="social" width={20} height={20} /></a></li>
        <li><a href=""><Image src="/social-twitter.png" alt="social" width={20} height={20} /></a></li>
        <li><a href=""><Image src="/social-instagram.png" alt="social" width={20} height={20} /></a></li>
        <li><a href=""><Image src="/social-pinterest.png" alt="social" width={20} height={20} /></a></li>
        <li><a href=""><Image src="/social-linkedin.png" alt="social" width={20} height={20} /></a></li>
        <li><a href=""><Image src="/social-youtube.png" alt="social" width={20} height={20} /></a></li>
      </ul>
    </div>
  );  
}

export default FooterSocial