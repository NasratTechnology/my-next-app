import React from 'react';
import Image from 'next/image';

const BottomHomeBanner = () => {
  return (
    <section className="w-full flex justify-center pt-3 pb-3 bg-gradient-to-t from-[#f8ecff] to-[#fffaf5]">
            <div className="container ">
                <div className="flex w-full justify-center">
                    <ul className='flex flex-wrap w-full justify-between'>
                        <li className='flex w-full md:w-1/4 gap-1.5 p-3 border-b border-[#d2d2d2] border-solid md:border-0'>
                            <div className="flex items-center">
                                <Image src="/quality.png" alt="icon phone" className="w-auto h-auto" width={30} height={30} />
                            </div>
                            <div className="">
                                <div className="text-[.8rem] sm:text-base font-bold">Premium Quality Work</div>
                                <div className="text-[.8rem] sm:text-base">You only get premium quality work</div>
                            </div>
                        </li>
                        <li className='flex w-full md:w-1/4 gap-1.5 p-3 border-b border-[#d2d2d2] border-solid md:border-0'>
                            <div className="flex items-center">
                                <Image src="/price.png" alt="icon phone" className="w-auto h-auto" width={30} height={30} />
                            </div>
                            <div className="">
                                <div className="text-[.8rem] sm:text-base font-bold">Reasonable Price</div>
                                <div className="text-[.8rem] sm:text-base">The price is always reasonable & good</div>
                            </div>
                        </li>
                        <li className='flex w-full md:w-1/4 gap-1.5 p-3 border-b border-[#d2d2d2] border-solid md:border-0'>
                            <div className="flex items-center">
                                <Image src="/ontime.png" alt="icon phone" className="w-auto h-auto" width={30} height={30} />
                            </div>
                            <div className="">
                                <div className="text-[.8rem] sm:text-base font-bold">On Time Delivery</div>
                                <div className="text-[.8rem] sm:text-base">Our delivery is always on time</div>
                            </div>
                        </li>
                        <li className='flex w-full md:w-1/4 gap-1.5 p-3'>
                            <div className="flex items-center">
                                <Image src="/support.png" alt="icon phone" className="w-auto h-auto" width={30} height={30} />
                            </div>
                            <div className="">
                                <div className="text-[.8rem] sm:text-base font-bold">Customer Support</div>
                                <div className="text-[.8rem] sm:text-base">We give you a 24 * 7 support</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
  )
}
// linear-gradient(to bottom,#fffaf5 0,#f8ecff 100%)

export default BottomHomeBanner