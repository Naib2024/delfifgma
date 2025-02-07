'use client'
import { useRouter } from 'next/navigation';
import Button from '../ui/button';
import Image from 'next/image';
import salad from '../../public/salad.svg';

const index = () => {
    const router = useRouter();

    const MenuClick = () => {
        router.push('/menu');
    };

    return (
        <div className="bg-[#b9e9ca]">
            <div className="w-[80%] m-auto flex flex-col-reverse md:flex-row items-center justify-center gap-20">
                <div className="w-[100%] md:w-1/2 flex">
                    <Image className="mt-5 w-[100%]" src={salad} alt="salad" />
                </div>
                <div className="flex flex-col gap-8 md:gap-12  md:w-1/2 text-center md:text-left">
                    <div className='flex flex-col '>
                        <h1 className="text-4xl w-[300px] md:text-6xl">
                            Welcome to <span className="text-[#FF8A00]">delizioso</span>
                        </h1>
                    </div>
                    <div>
                        <p className="w-[90%] md:w-[55%] text-justify leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.
                            Congue nibh nulla malesuada ultricies nec quam.
                        </p>
                    </div>
                    <div className='mt-24'>
                        <Button text="See our menu" onClick={MenuClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
