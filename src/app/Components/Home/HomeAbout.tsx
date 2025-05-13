import React from 'react';
import Image from 'next/image';

const HomeAbout = () => {
  return (
    <>
      <section className='flex justify-center w-full mt-20 flex-wrap'>
        <div className='container text-center'>
          <div className='text-2xl font-medium text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
          <div className='text-base mt-4 text-gray-800 leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum dolorem assumenda quisquam suscipit earum eveniet repellat eum! Quae, odit. Atque reprehenderit quos nostrum! Dolorum atque accusamus nemo vel exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum dolorem assumenda quisquam suscipit earum eveniet repellat eum! Quae, odit. Atque reprehenderit quos nostrum! Dolorum atque accusamus nemo vel exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum dolorem assumenda quisquam suscipit earum eveniet repellat eum! Quae, odit. Atque reprehenderit quos nostrum! Dolorum atque accusamus nemo vel exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum dolorem assumenda quisquam suscipit earum eveniet repellat eum! Quae, odit. Atque reprehenderit quos nostrum! Dolorum atque accusamus nemo vel exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum dolorem assumenda quisquam suscipit earum eveniet repellat eum! Quae, odit. Atque reprehenderit quos nostrum! Dolorum atque accusamus nemo vel exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum dolorem assumenda quisquam suscipit earum eveniet repellat eum! Quae, odit. Atque reprehenderit quos nostrum! Dolorum atque accusamus nemo vel exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum dolorem assumenda quisquam suscipit earum eveniet repellat eum! Quae, odit. Atque reprehenderit quos nostrum! Dolorum atque accusamus nemo vel exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum dolorem </div>
        </div>

        <div className='container mt-16 text-center'>
        <div className='list-homeAbout'>
              <ul className="flex items-center flex-wrap gap-y-14 justify-center relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-full before:h-[1px] before:border-b before:border-dotted before:border-gray-800">
                  <li className='flex flex-wrap justify-center w-1/3 relative after:content-[""] after:absolute after:right-[-20px] after:top-0 after:w-[1px] after:h-[130px] after:border-r after:border-dotted after:border-gray-800'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/seo.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className='text-[13px] uppercase font-medium w-full mt-1.5'>Lorem ipsum dolor sit</div>
                      <div className='text-[14px] w-full mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
                  </li>
                  <li className='flex flex-wrap justify-center w-1/3 relative after:content-[""] after:absolute after:right-[-20px] after:top-0 after:w-[1px] after:h-[130px] after:border-r after:border-dotted after:border-gray-800'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/seo.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className='text-[13px] uppercase font-medium w-full mt-1.5'>Lorem ipsum dolor sit</div>
                      <div className='text-[14px] w-full mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
                  </li>
                  <li className='flex flex-wrap justify-center w-1/3 relative '>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/seo.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className='text-[13px] uppercase font-medium w-full mt-1.5'>Lorem ipsum dolor sit</div>
                      <div className='text-[14px] w-full mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
                  </li>
                  <li className='flex flex-wrap justify-center w-1/3 relative after:content-[""] after:absolute after:right-[-20px] after:top-[-26px] after:w-[1px] after:h-[130px] after:border-r after:border-dotted after:border-gray-800'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/seo.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className='text-[13px] uppercase font-medium w-full mt-1.5'>Lorem ipsum dolor sit</div>
                      <div className='text-[14px] w-full mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
                  </li>
                  <li className='flex flex-wrap justify-center w-1/3 relative after:content-[""] after:absolute after:right-[-20px] after:top-[-26px] after:w-[1px] after:h-[130px] after:border-r after:border-dotted after:border-gray-800'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/seo.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className='text-[13px] uppercase font-medium w-full mt-1.5'>Lorem ipsum dolor sit</div>
                      <div className='text-[14px] w-full mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
                  </li>
                  <li className='flex flex-wrap justify-center w-1/3 relative'>
                      <div className='flex items-center justify-center w-full'>
                          <Image src="/seo.png" alt="seo" className="w-auto h-auto" width={40} height={50} />
                      </div>
                      <div className='text-[13px] uppercase font-medium w-full mt-1.5'>Lorem ipsum dolor sit</div>
                      <div className='text-[14px] w-full mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
                  </li>
              </ul>
        </div>
        </div>



      </section>
    </>
  )
}

export default HomeAbout