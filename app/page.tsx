import React from 'react'
import meal from '../public/meal.svg'
import Image from 'next/image'
import SeeOurMenu from"../components/SeeOurMenu/indext"
import Menu from '../components/Menu/index'
import Chef from '../components/Chef/index'
import ReserveTable from '../components/ReserveTable/index'
import OpenTime from "../components/OpenTime/index"

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
      <SeeOurMenu />
      {/* third section */}
      <div className=' container m-auto'>
        <Menu />
      </div>
      {/* 4 */}
      <ReserveTable />
      {/* 5 */}
      <Chef />
      {/* 6 */}
      <OpenTime />
    </>
  )
}

export default Page;
