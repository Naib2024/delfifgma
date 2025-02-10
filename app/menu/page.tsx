import React from 'react'
import Menu from '@/components/Menu/index'
import Footer from '@/components/layout/Footer/index'

const page = () => {
  return (
    <div>
      <h1 className='text-4xl text-center my-12'>Menu</h1>
    <Menu />
    <Footer />
    </div>
  )
}

export default page