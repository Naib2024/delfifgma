import React from 'react'
import meal from '../public/meal.svg'
import Image from 'next/image'
import salad from '../public/salad.svg'
import Button from '../components/ui/button'
import Menu from '../components/Menu/index'
import Chef from '../components/Chef/index'
import ReserveTable from '../components/ReserveTable/index'

const Page = () => {
  return (
    <>
      {/* firts section */}
      <div className="w-[80%] m-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mt-10 md:mt-[10%] md:w-[50%]">
          <div>
            <button className="bg-[#f1c899] px-3 py-1 rounded-full text-[#FF8A00] hover:text-white">
              Restaurant
            </button>
          </div>
          <div className="mt-10">
            <h1 className="text-4xl md:text-7xl font-bold">
              Italian Cuisine
            </h1>
            <p className="w-[100%] md:w-[340px] py-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.
            </p>
          </div>
          <div className="flex gap-3 mt-8 md:mt-16">
            <button className="bg-[#FF8A00] text-3xl md:text-xl py-2 px-4 rounded-full hover:text-white">
              Order now
            </button>
            <button className="bg-[#3FA72F] text-3xl md:text-xl py-2 px-4 rounded-full hover:text-white">
              Reservation
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%] mt-10 md:mt-[10%] flex justify-center">
          <Image src={meal} alt="meal" />
        </div>
      </div>
      {/* second side */}
      <div className=" bg-[#b9e9ca]">
        <div className="w-[80%] m-auto flex flex-col-reverse md:flex-row items-center justify-center gap-20">
          <div className="w-[100%] md:w-1/2 flex">
            <Image className="mt-5 w-[100%]" src={salad} alt="salad" />
          </div>
          <div className="flex flex-col gap-8 md:gap-12  md:w-1/2 text-center md:text-left">
            <div className='flex flex-col '>
              <h1 className="text-4xl w-[300px] md:text-6xl">
                Welcome to <span className="text-[#FF8A00]">delizioso</ span>
              </h1>
            </div>
            <div>
              <p className="w-[90%] md:w-[55%] text-justify leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.
                Congue nibh nulla malesuada ultricies nec quam.
              </p>
            </div>
            <div className='mt-24 '>
              <Button text="See our menu" />
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div className=' container m-auto'>
        <Menu />
      </div>
      {/* 4 */}
      <ReserveTable />
      {/* 5 */}
      <Chef />
    </>
  )
}

export default Page;
