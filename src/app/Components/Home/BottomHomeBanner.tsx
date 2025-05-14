import React from 'react';
import Image from 'next/image';

const BottomHomeBanner = () => {
  return (
    <section className="w-full flex justify-center pt-3 pb-3 bg-gradient-to-t from-[#f8ecff] to-[#fffaf5]">
            <div className="container ">
                <div className="flex w-full justify-center">
                    <ul className='flex w-full justify-between'>
                        <li className='flex gap-1.5'>
                            <div className="flex items-center">
                                <Image src="/quality.png" alt="icon phone" className="w-auto h-auto" width={30} height={30} />
                            </div>
                            <div className="">
                                <div className="text-base font-bold">Premium Quality Work</div>
                                <div className="">You only get premium quality work</div>
                            </div>
                        </li>
                        <li className='flex gap-1.5'>
                            <div className="flex items-center">
                                <Image src="/price.png" alt="icon phone" className="w-auto h-auto" width={30} height={30} />
                            </div>
                            <div className="">
                                <div className="">Reasonable Price</div>
                                <div className="">The price is always reasonable & good</div>
                            </div>
                        </li>
                        <li className='flex gap-1.5'>
                            <div className="flex items-center">
                                <Image src="/ontime.png" alt="icon phone" className="w-auto h-auto" width={30} height={30} />
                            </div>
                            <div className="">
                                <div className="">On Time Delivery</div>
                                <div className="">Our delivery is always on time</div>
                            </div>
                        </li>
                        <li className='flex gap-1.5'>
                            <div className="flex items-center">
                                <Image src="/support.png" alt="icon phone" className="w-auto h-auto" width={30} height={30} />
                            </div>
                            <div className="">
                                <div className="">Customer Support</div>
                                <div className="">
                                We give you a 24 * 7 support</div>
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