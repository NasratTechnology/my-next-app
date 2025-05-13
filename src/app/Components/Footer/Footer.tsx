import React from 'react'
import FooterTop from './FooterTop';
import FooterLogo from './FooterLogo';
import FooterSocial from './FooterSocial';
import FooterGetInTouch from './FooterGetInTouch';
import FooterCopyright from './FooterCopyright';
import FooterGetInTouchTop from './FooterGetInTouchTop';

const Footer = () => {
  return (
    <>
    <section className='w-full bg-gradient-to-b from-[#0B1233] to-[#041662] flex flex-wrap justify-center'>
      <div className='container '>
        <FooterTop />
        <FooterLogo />
        <FooterSocial />
        <FooterGetInTouchTop />
        <FooterGetInTouch />
        <FooterCopyright />
      </div>
    </section>
    </>
  )
}

export default Footer;