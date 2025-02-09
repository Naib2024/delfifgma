'use client'
import React, { useState } from 'react'
import Button from '../ui/button'
import { useRouter } from 'next/navigation'

const index = () => {
    const [mobile, setMobile] = useState(true)
    const router = useRouter()
    const Click = () => {
        router.push('./orderonline')
    }
    const otherClick = () => {
        router.push('./reservation')
    }
    return (
        <>
            <div className="bg-bannerImg bg-no-repeat bg-center container m-auto h-[600px] mt-48 hidden md:flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-6 text-center text-white w-[90%] md:w-[70%] lg:w-[50%] p-6">
                    <h1 className="text-6xl font-bold">We are open from</h1>
                    <h3 className="text-3xl font-bold">Monday-Sunday</h3>

                    <div className="flex flex-col gap-2 w-[80%] md:w-[50%] text-center">
                        <p>Lunch: Mon-Sun: 11:00am - 02:00pm</p>
                        <p>Dinner: Sunday: 04:00pm - 08:00pm</p>
                        <p>Other Days: 04:00pm - 09:00pm</p>
                    </div>

                    <div className="flex gap-2 justify-center">
                        <Button text="Order Now" onClick={Click} />
                        <Button text="Reservation" onClick={otherClick} />
                    </div>
                </div>
            </div>

            {
                mobile && (
                    <div className="md:hidden bg-backIMg bg-center bg-no-repeat h-[420px] flex flex-col justify-center items-center text-center p-5">
                        <h1 className="text-2xl font-bold text-white">We are open from</h1>
                        <h3 className="text-xl font-bold text-white">Monday - Sunday</h3>

                        <div className="flex flex-col gap-2 mt-4 w-[80%] text-white">
                            <p>Lunch: Mon-Sun: 11:00am - 02:00pm</p>
                            <p>Dinner: Sunday: 04:00pm - 08:00pm</p>
                            <p>Other Days: 04:00pm - 09:00pm</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 mt-5">
                            <Button text="Order Now" onClick={Click} />
                            <Button text="Reservation" onClick={otherClick} />
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default index