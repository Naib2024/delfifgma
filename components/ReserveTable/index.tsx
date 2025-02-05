'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import picture from '../../public/Picture (1).svg'
import picture2 from '../../public/Picture (2).svg'
import picture3 from '../../public/Picture (3).svg'
import reserv from '../../public/reserv.svg'
import Button from '../ui/button'

const index = () => {
    const [ show, setShow ] = useState(true)
    return (
        <div className='bg-[#FFF4E7] mt-36 pt-20 pb-28'>    
    <div className='md:flex justify-between '>
        <div className='relative hidden md:block'>
            <div className="absolute bottom-[80%] left-96">
                <Image src={picture} alt="picture " />
            </div>
            <Image className='w-[600px]' src={picture2} alt="picture2" />
            <div className="absolute top-[85%]">
                <Image src={picture3} alt="picture3" />
            </div>
        </div>
        {
            show && (
                <>
                <div className="md:hidden flex justify-center">
                    <Image src={reserv} alt='reserv'/>
                </div>
                </>
            )
        }
        <div className='w-full md:w-[30%] flex flex-col gap-14 justify-center m-auto px-6 md:pr-24'>
            <div>
                <h1 className='text-5xl'>Let's reserve a table</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
            </div>
            <div>
                <Button text='Reservation' />
            </div>
        </div>
    </div>
</div>

    )
}

export default index