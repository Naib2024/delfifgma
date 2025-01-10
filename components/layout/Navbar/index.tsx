'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/Logo Delizioso.svg'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathName = usePathname() 
  const links = [
    {id:0,title:'Home',path:'/'},
    {id:1,title:'Menu',path:'/menu'},
    {id:2,title:'About us',path:'/aboutus'},
    {id:3,title:'Order online',path:'/orderonline'},
    {id:4,title:'Reservation',path:'reservation'},
    {id:5,title:'Contact us',path:'contactus'},
  ]
  return (
    <div className='border flex justify-between w-[90%] m-auto'>
      <div>
        <Link href={'/'}>
        <Image src={logo} alt='logo'/> 
        </Link>
      </div>
      <div className='flex items-center justify-center gap-20'>
        {
          links.map(({id,title,path})=>{
            return(<Link  key={id} href={path} className={`hover:text-[#FF8A00] ${pathName === path ?  'text-[#FF8A00]' : "" }`} >{title}</Link>)
          })
        }
      </div>
      <div className='flex justify-center items-center gap-7'>
        <button className='border text-xl p-2 rounded-full	'><FaShoppingCart /></button>
        <button className='border p-2'>Log in</button>
      </div>
    </div>
  )
}

export default Navbar