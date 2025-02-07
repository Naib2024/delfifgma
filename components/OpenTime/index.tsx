import React from 'react'
import Button from '../ui/button'

const index = () => {
    return (
        <div className=' bg-bannerImg container m-auto h-[500px] flex justify-center items-center'>
            <div className='w-[40%] border text-center'>
                <h1 className="text-2xl">We are open from</h1>
                <h3 className="text-xl">Monday-Sunday</h3>
                <p>Lunch: Mon-Sun: 11:00am-02:00pm</p>
                <p>Dinner: Sunday: 04:00pm-08:00pm</p>
                <p>Other days: 04:00pm-09:00pm</p>
                <div className='flex gap-2 justify-center'>
                    <Button text='Order Now' />
                    <Button text='Reservation' />
                </div>
            </div>
        </div>
    )
}

export default index