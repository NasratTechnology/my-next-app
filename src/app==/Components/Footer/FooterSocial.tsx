import React from 'react';
import Image from 'next/image';

const FooterSocial = () => {
  return (
    <div className='flex justify-center mt-14'>
      <ul className='flex justify-center gap-5 relative before:content-[""] before:absolute before:w-[200px] before:left-[-210px] before:top-[10px] before:h-[1px] before:border-b before:border-black before:border-solid  after:content-[""] after:absolute after:w-[200px] after:right-[-210px] after:top-[10px] after:h-[1px] after:border-b after:border-black after:border-solid'> 
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