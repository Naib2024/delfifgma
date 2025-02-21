'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/Logo Delizioso.svg'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { usePathname, useRouter } from 'next/navigation'
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
    { id: 4, title: 'Contact us', path: '/contactus' },
  ]
  const router = useRouter()
  const log = () => router.push("./LogIn")
  const check = () => router.push('./Check')

  const handleLinkClick = () => {
    setShowMobile(false);
  };

  return (
    <div className='container m-auto p-5'>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href={'/'}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex justify-around w-[55%]">
          {links.map(({ id, title, path }) => {
            return (
              <Link
                key={id}
                href={path}
                className={`hover:text-[#FF8A00] ${pathName === path ? 'text-[#FF8A00]' : ''}`}
              >
                {title}
              </Link>
            )
          })}
        </div>
        <div className="hidden md:flex items-center gap-7">
          <button className="border text-xl p-2 rounded-full" onClick={check}><FaShoppingCart /></button>
          <button className="border py-2 px-4 bg-[#3FA72F] rounded-full" onClick={log}>Log in</button>
        </div>
        <div className="block md:hidden flex items-center gap-3">
          <button
            onClick={() => setShowMobile(!showMobile)}
            className="text-2xl"
          >
            {showMobile ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <Image src={bars} alt="Menu" width={24} height={24} />
            )}
          </button>
          <button className="text-xl" onClick={check}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
      {showMobile && (
        <div className="md:hidden flex flex-col bg-white py-4 gap-4">
          {links.map(({ id, title, path }) => (
            <Link
              key={id}
              href={path}
              className={`hover:text-[#FF8A00] ${pathName === path ? 'text-[#FF8A00]' : ''}`}
              onClick={handleLinkClick} 
            >
              {title}
            </Link>
          ))}
          <div className="flex flex-col gap-4">
            <button className="border py-2 px-4 bg-[#3FA72F] rounded-full" onClick={log}>
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
