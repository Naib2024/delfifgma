import React from 'react'
import Menu from '@/components/Menu/index'
import Footer from '@/components/layout/Footer/index'

const page = () => {
  return (
    <>
      <div className=' w-[1400x] m-auto'>
        <h1 className='text-4xl text-center my-12'>Menu</h1>
        <Menu />
      </div>
      <Footer />
    </>
  )
}

export default page