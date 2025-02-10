"use client"
import React from 'react'
import Image from 'next/image'
import chef1 from '../../public/PictureAbout.svg'
import mobileImg from '../../public/Picturemobile.svg'
import chef2 from "@/public/PictureAbout(1).svg"
import mobileImg2 from '@/public/PictureMobile(2).svg'
import owner from '@/public/PictureAbout(2).svg'
import mobileOwner from '@/public/mobileowner.svg'
import Footer from '@/components/layout/Footer/index'
const Page = () => {
  return (
    <>
      <div className='w-full'>
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center px-6">
          <div className="w-full md:w-[70%] mx-auto hidden md:block">
            <Image src={chef1} alt="chef1" />
          </div>
          <div className="w-full md:w-[50%] mt-8 md:mt-0 text-center md:text-left ">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
              <span className="text-[#FF8A00]">Our</span> restaurant
            </h1>
            <div className="block md:hidden flex justify-center my-6">
              <Image src={mobileImg} alt="mobile image" width={300} height={300} />
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed w-full md:w-[80%] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center px-6 overflow-hidden">
          <div className="block md:hidden flex justify-center my-6">
            <Image src={mobileImg2} alt="mobile image" width={300} height={300} />
          </div>
          <div className="w-full md:w-[50%] flex justify-center items-center text-center md:text-left">
            <p className="w-[90%] md:w-[45%] leading-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
          <div className="hidden md:block mx-auto ">
            <Image src={chef2} alt="img" className="w-[100%] mx-auto object-contain" />
          </div>
        </div>
      </div>
      <div className="container mx-auto  flex flex-col md:flex-row  justify-between items-center  mt-32">
        <div className="hidden md:block">
          <Image src={owner} alt="own" />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left  w-[50%]">
          <h1 className="text-4xl md:text-6xl w-full md:w-[70%]"><span className='text-[#FF8A00]'>Owner</span> & Executive Chef</h1>
          <div className='block sm:hidden'>
            <Image src={mobileOwner} alt='ing' />
          </div>
          <h3 className="font-bold text-2xl mt-2">Ismail Marzuki</h3>
          <p className="text-xl leading-8 w-full md:w-[60%] mt-2">  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default Page;
