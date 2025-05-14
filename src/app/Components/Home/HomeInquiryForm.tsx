import React from 'react';
import Image from 'next/image';

const HomeInquiryForm = () => {
  return (
    <section className='flex flex-wrap w-full justify-center mt-12 bg-gradient-to-b from-[#D6FFFC] to-[#ffeff5] pt-13 pb-16'>
      <div className='container flex w-full justify-center flex-wrap gap-8 box-border'>
          <div className='w-[56%]'>
              <div>
                <div className='text-base'>Help us Know You</div>
                <div className='text-2xl font-medium'>Have Question? Write a message</div>
              </div>
              <div className='mt-6'>
                <form className="w-full mx-auto mt-5 p-6 bg-white rounded-2xl space-y-4">
                  <div>
                    <label className="block text-gray-600 mb-1">Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name"/>
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Message</label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message"></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Send Message
                  </button>
                </form>
              </div>
          </div>
          <div className='w-[40%]'>
              <Image src="/customersupport.png" alt='epaper 2' className='w-full' width={800} height={400} />
          </div>
      </div>
    </section>
  )
}

export default HomeInquiryForm