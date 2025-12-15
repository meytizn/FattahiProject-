"use clinet"
import React from 'react'
import Image from "next/image";

// import Carts from '../Carts';


const Header = () => {
  return (
    <>
    <div className='z-40
        shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)]
    h-[100px] text-white bg-[#030162] w-full flex flex-row justify-between content-center items-center p-1 '>
 

    

<Image
          className="w-[80px] p-2 "
          src="/icons/azadlogo.jpg"   //it refers to public/
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

<div className='flex flex-row gap-2 md:gap-3 content-center items-center pr-10  '>
     <h1> حسین فتاحی</h1>

{/* <Image
          className="w-[70px] pb-4 md:pb-0   "
          src="/icons/youtubeicon.png"   //it refers to public/
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}

          </div>

    </div>

      {/* <Carts/> */}

     

</>  )
}

export default Header
