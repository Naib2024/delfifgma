import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo2.svg'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';

const index = () => {
    const links = [
        { id: 1, title: <FaTwitter />, path: 'https://x.com/?lang=en' },
        { id: 2, title: <FaInstagram />, path: 'https://www.instagram.com/' },
        { id: 3, title: <FaFacebook />, path: 'https://www.facebook.com/' }
    ]
    const secondLinks = [
        { id: 0, title: 'Home', path: '/' },
        { id: 1, title: 'Menu', path: '/menu' },
        { id: 2, title: 'About us', path: '/aboutus' },
        { id: 3, title: 'Order online', path: '/orderonline' },
        { id: 4, title: 'Reservation', path: '/reservation' },
        { id: 5, title: 'Contact us', path: '/contactus' },
    ]
    const thirdLinks = [
        { id: 1, title:"About us", path: './aboutus' },
        { id: 2, title: "Testimonial", path: './Testimonial' },
        { id: 3, title: "Event", path: './Event' }
    ]
    return (
        <footer className='bg-[#311F09] h-[500px] mt-32'>
            {/* 1 part*/}
            <div className=' container m-auto flex justify-center ite'>
                <div className="border flex flex-col gap-7 w-[90%] md:w-[28%] p-4">
                    <div className="flex">
                        <Image src={logo} alt="logo" className="w-[100px] md:w-auto" />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <p className="text-white text-left">
                            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
                        </p>
                    </div>
                    <div className="flex text-2xl gap-4">
                        {links.map(({ id, title, path }) => (
                            <div key={id} className="border p-2 rounded-full bg-[#E3E2E0]">
                                <Link href={path}>{title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                {/* 2 */}
                <div className='border'>
                    <div>
                        <h3 className='text-2xl text-[#FF8A00]'>Page</h3>
                    </div>
                    <div className="flex flex-col">
                        {secondLinks.map(({ id, title, path }) => (
                            <Link key={id} href={path} className="block py-1 text-white ">
                                {title}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* 3 */}
                <div className='border'>
                    <div>
                        <p className='text-2xl text-[#FF8A00]'>Information</p>
                    </div>
                    <div className='flex flex-col'>
                        {
                            thirdLinks.map(({id,title,path})=>{
                                return(<Link key={id} href={path} className='block text-white py-1'>{title}</Link>)
                            })
                        }
                    </div>
                </div>
                {/* 4 */}
                <div>
                    
                </div>
            </div>
            {/* 2 part */}
            <div>

            </div>
        </footer>
    )
}

export default index