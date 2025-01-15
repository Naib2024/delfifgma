'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/Logo Delizioso.svg'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import bars from '../../../public/bars.svg'
import { FaTimes } from "react-icons/fa";



const Navbar = () => {
  const pathName = usePathname()
  const [showMobile, setShowMobile] = useState(false)
  const links = [
    { id: 0, title: 'Home', path: '/' },
    { id: 1, title: 'Menu', path: '/menu' },
    { id: 2, title: 'About us', path: '/aboutus' },
    { id: 3, title: 'Order online', path: '/orderonline' },
    { id: 4, title: 'Reservation', path: 'reservation' },
    { id: 5, title: 'Contact us', path: 'contactus' },
  ]
  return (
    <div className='flex justify-between w-[80%] m-auto py-3'>
      <div>
        <Link href={'/'}>
          <Image src={logo} alt='logo' />
        </Link>
      </div>
      <div className='hidden md:flex items-center justify-center gap-20'>
        {
          links.map(({ id, title, path }) => {
            return (<Link key={id} href={path} className={`hover:text-[#FF8A00] ${pathName === path ? 'text-[#FF8A00]' : ""}`} >{title}</Link>)
          })
        }
      </div>
      <div className='hidden md:flex items-center gap-7'>
        <button className='border text-xl p-2 rounded-full'><FaShoppingCart /></button>
        <button className='border py-2 px-4 bg-[#3FA72F] rounded-full'>Log in</button>
      </div>
      <div>
        <button className="block md:hidden text-2xl flex items-center justify-center h-10 w-10" onClick={() => setShowMobile(!showMobile)}>
          {
            showMobile ? <FaTimes /> : <Image src={bars} alt='bars' />
          }
        </button>
        {
          showMobile && (
            <>
              <div >
                {
                  links.map(({ id, title, path }) => {
                    return (<Link className={`md:hidden flex flex-col items-center bg-white py-4 gap-4 hover:text-[#FF8A00]  top-6 ${pathName===path ? 'text-[#FF8A00]' : ""}`} key={id} href={path}>{title}</Link>)
                  })
                }
              </div>
              <div className='flex col'>
                <button><FaShoppingCart /></button>
                <button>Log in</button>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Navbar