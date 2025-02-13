import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo2.svg'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import { title } from 'process';

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
        { id: 1, title: "About us", path: './aboutus' },
        { id: 2, title: "Testimonial", path: './Testimonial' },
        { id: 3, title: "Event", path: './Event' }
    ]
    const fourthLinks = [
        { id: 0, title: "3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat", path: "" },
        { id: 1, title: "delizioso@gmail.com", path: "" },
        { id: 2, title: "+123 4567 8901", path: "./+123 4567 8901" },
    ]
    return (
        <>
            <footer className="bg-[#311F09] py-10 mt-32 flex flex-col">
                {/* Top Section */}
                <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:gap-7">
                    {/* 1st Section */}
                    <div className="flex flex-col items-center md:items-start gap-5 w-[90%] md:w-[28%] p-4 mx-auto md:mx-0 text-left md:text-left">
                        <div>
                            <Image src={logo} alt="logo" className="w-[100px] md:w-auto" />
                        </div>
                        <div className="w-full md:w-[80%]">
                            <p className="text-white font-bold">
                                Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
                            </p>
                        </div>
                        <div className="flex text-2xl gap-4">
                            {links.map(({ id, title, path }) => (
                                <div key={id} className="p-2 rounded-full bg-[#E3E2E0]">
                                    <Link href={path}>{title}</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Sections */}
                    <div className="flex flex-wrap justify-center md:justify-start w-full md:w-auto gap-5">
                        {/* Pages */}
                        <div className="p-4 text-left md:text-left w-full md:w-auto">
                            <h3 className="text-2xl text-[#FF8A00] font-bold">Page</h3>
                            <div className="flex flex-col">
                                {secondLinks.map(({ id, title, path }) => (
                                    <Link key={id} href={path} className="block py-1 text-white">
                                        {title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Information */}
                        <div className="p-4 text-left md:text-left w-full md:w-auto">
                            <p className="text-2xl text-[#FF8A00] font-bold">Information</p>
                            <div className="flex flex-col">
                                {thirdLinks.map(({ id, title, path }) => (
                                    <Link key={id} href={path} className="block py-1 text-white">
                                        {title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div className="p-4 text-left md:text-left">
                        <p className="text-[#FF8A00] text-2xl font-bold">Get in touch</p>
                        <div className="flex flex-col">
                            {fourthLinks.map(({ id, path, title }) => (
                                <Link key={id} href={path} className="block text-white py-2">
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center text-white mt-5">
                    <p> © {new Date().getFullYear()} Delizioso.</p>
                </div>
            </footer>
        </>
    );

}
export default index