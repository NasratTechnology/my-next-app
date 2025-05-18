import React from 'react';
import Image from 'next/image';

const HomeAbout = () => {
  return (
    <>
      <section className='flex justify-center w-full p-4 pt-4 md:pt-4 flex-wrap bg-white'>      
        <div className='container text-left md:text-center'>
          <div className='text-2xl font-bold text-black pt-6'>About Nasra Technology</div>
          <div className='text-base mt-4 text-gray-800 leading-8'>Through advanced technologies and innovative solutions, we enable clients to optimize operations, enhance customer experiences, and achieve 
            ustainable growth through digital transformation.</div> 
          <h2>Creating Impact Through Exceptional Digital Experiences</h2>
          <div className='text-base mt-4 text-gray-800 leading-8'>
          Nasra Technology is a full-stack software development company, backed by a
          global team of skilled professionals passionate about building impactful digital
          products that improve lives and reshape industries at scale.<br />
          Since 2020, we have partnered with clients around the world to elevate their
          digital strategies through cutting-edge technologies, robust platforms, and
          scalable frameworks. Our experience, attention to detail, and commitment to
          excellence make us a trusted partner—from concept and design to launch and
          long-term support. <br />
          We pride ourselves on delivering solutions grounded in research, built with
          sustainable, high-quality code, and developed through transparent,
          collaborative partnerships. At Nasra Technology, we do not just build software—
          we create digital products that drive real value, accelerate growth, and stand
          the test of time.<br /><br />
          <strong>At Shortcut Nasra Technology, we shape the future of digital by crafting exceptional products for forward-thinking companies around the world.</strong>
          </div> 
        </div>

        <div className='container mt-16 text-center'> 
        <div className='list-homeAbout'>
              <ul className="flex items-center flex-wrap gap-y-4 md:gap-y-0 justify-center relative md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:w-full md:before:h-[1px] md:before:border-b md:before:border-dotted md:before:border-gray-800">
                  <li className='border-b border-[#ccc] border-dotted pb-4 md:pb-0 md:border-0 flex flex-wrap w-full md:w-1/3 justify-center w-1/3 relative md:after:content-[""] md:after:absolute md:after:right-[-20px] md:after:top-0 md:after:w-[1px] md:after:h-[130px] md:after:border-r md:after:border-dotted md:after:border-gray-800 md:pb-4'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/seo.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className=' text-black'>
                        <div className='text-[13px] uppercase font-bold w-full mt-1.5 '>Digital Marketing</div>
                        <div className='text-[14px] w-full mt-2 text-[#222]'>Think a step ahead & use Digital Marketing to always win</div>
                      </div>
                  </li>
                  <li className='border-b border-[#ccc] border-dotted pb-4 md:pb-0 md:border-0 flex flex-wrap w-full md:w-1/3 justify-center w-1/3 relative md:after:content-[""] md:after:absolute md:after:right-[-20px] md:after:top-0 md:after:w-[1px] md:after:h-[130px] md:after:border-r md:after:border-dotted md:after:border-gray-800 md:pb-4'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/facebook-ad.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className=' text-black'>
                        <div className='text-[13px] uppercase font-bold w-full mt-1.5'>Facebook Ads</div>
                        <div className='text-[14px] w-full mt-2 text-[#222]'>Not just socialize, use it to boost your growth too</div>
                      </div>
                  </li>
                  <li className='border-b border-[#ccc] border-dotted pb-4 md:pb-0 md:border-0 flex flex-wrap w-full md:w-1/3 justify-center w-1/3 relative md:pb-4'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/google-ad.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className=' text-black'>
                        <div className='text-[13px] uppercase font-bold w-full mt-1.5'>Google PPC</div>
                        <div className='text-[14px] w-full mt-2 text-[#222]'>Each and every click adds to your business growth</div>
                      </div>
                  </li>
                  <li className='border-b border-[#ccc] border-dotted pb-4 md:pb-0 md:border-0 flex flex-wrap w-full md:w-1/3 justify-center w-1/3 relative md:after:content-[""] md:after:absolute md:after:right-[-20px] md:after:top-0 md:after:w-[1px] md:after:h-[130px] md:after:border-r md:after:border-dotted md:after:border-gray-800 md:pt-4'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/website.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className=' text-black'>
                        <div className='text-[13px] uppercase font-bold w-full mt-1.5'>Web Design & Development</div>
                        <div className='text-[14px] w-full mt-2 text-[#222]'>The best world class Web Design is finally under your reach</div>
                      </div>
                  </li>
                  <li className='border-b border-[#ccc] border-dotted pb-4 md:pb-0 md:border-0 flex flex-wrap w-full md:w-1/3 justify-center w-1/3 relative md:after:content-[""] md:after:absolute md:after:right-[-20px] md:after:top-0 md:after:w-[1px] md:after:h-[130px] md:after:border-r md:after:border-dotted md:after:border-gray-800 md:pt-4'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/software.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className=' text-black'>
                        <div className='text-[13px] uppercase font-bold w-full mt-1.5'>Software Development</div>
                        <div className='text-[14px] w-full mt-2 text-[#222]'>The essential component that cannot be ignored</div>
                      </div>
                  </li>
                  <li className='flex flex-wrap w-full md:w-1/3 justify-center w-1/3 relative md:pt-4'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/logo.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className=' text-black'>
                        <div className='text-[13px] uppercase font-bold w-full mt-1.5'>Logo Design</div>
                        <div className='text-[14px] w-full mt-2 text-[#222]'>It is very important to be uniquely seen by your customers</div>  
                      </div>
                  </li>
              </ul>
        </div>
        </div>



      </section>
    </>
  )
}

export default HomeAbout