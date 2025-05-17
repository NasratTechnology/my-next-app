import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderTop = () => {
  return (
    <>
      <section className="pl-4 pr-4 bg-sky-950 h-11 sm:h-17 w-full flex justify-center text-white ">
        <div className="container flex-wrap sm:flex-nowrap flex justify-between w-full">
          <div className="w-36 sm-100 hidden sm:block bg-white flex items-center justify-center">
            <Image src="/logo-ntpl-png.png" alt="Logo Image" className="w-auto h-auto" width={200} height={100} />
          </div>
          <div className="flex sm-100">
            <ul className="list-none pl-5 text-lg text-gray-700 flex gap-6 text-white">
              <li className="flex gap-2 align-middle align-center items-center">
                <div className="flex justify-center align-middle align-center">
                  <Image src="/icon-phone-head.svg" alt="icon phone" className="w-[20px] md:w-[40px] h-auto" width={40} height={50} />   
                </div>
                <div className="flex align-center flex-wrap h-8 sm:h-11">
                  <div className="text-[.5rem] md:text-[.7rem] w-full flex h-3 text-[#ccc]">Call Us Now</div>
                  <div className="w-full flex">
                    <Link href="" className="text-[.5rem] md:text-[.9rem] font-bold flex text-[#ccc]">+91 9876543210</Link>
                  </div>
                </div>
              </li>
              <li className="flex gap-2 align-middle align-center items-center">
                <div className="flex justify-center align-middle align-center">
                  <Image src="/icon-phone-head.svg" alt="icon phone" className="w-[20px] md:w-[40px] h-auto" width={40} height={50} />  
                </div>
                <div className="flex align-center flex-wrap h-8 sm:h-11">
                  <div className="text-[.5rem] md:text-[.7rem] w-full flex h-3 text-[#ccc]">Mail Us Today</div>
                  <div className="w-full flex">
                  <Link href="" className="text-[.5rem] md:text-[.9rem] font-bold flex text-[#ccc]">info@email.com</Link>
                  </div>
                </div>
              </li>
              <li className="flex gap-2 align-middle align-center items-center">
                <div className="flex justify-center align-middle align-center items-center">
                  <Image src="/icon-phone-head.svg" alt="icon phone" className="w-[20px] md:w-[40px] h-auto" width={40} height={50} />  
                </div>
                <div className="flex align-center flex-wrap h-8 sm:h-11">
                  <div className="text-[.5rem] md:text-[.7rem] w-full flex h-3 text-[#ccc]">Whatsapp</div>
                  <div className="w-full flex">
                  <Link href="" className="text-[.5rem] md:text-[.9rem] font-bold flex text-[#ccc]">+91 9999999999</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderTop;
