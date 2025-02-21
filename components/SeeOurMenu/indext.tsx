'use client'
import { useRouter } from 'next/navigation';
import Button from '../ui/button';
import Image from 'next/image';
import salad from '../../public/salad.svg';

const Index = () => {
    const router = useRouter();

    const MenuClick = () => {
        router.push('/menu');
    };

    return (
        <div className="bg-[#b9e9ca] py-10">
            <div className="w-[90%] md:w-[80%] m-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <Image 
                        className="mt-5 w-[90%] md:w-[500px] lg:w-[600px]" 
                        src={salad} 
                        alt="salad" 
                    />
                </div>
                <div className="flex flex-col gap-6 md:gap-12 w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-6xl font-bold">
                        Welcome to <span className="text-[#FF8A00]">delizioso</span>
                    </h1>
                    <p className="w-[60%]  text-left  md:w-[55%]  leading-6 mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.
                        Congue nibh nulla malesuada ultricies nec quam.
                    </p>
                    <div className="mt-10 md:mt-24 flex justify-center md:justify-start">
                        <Button text="See our menu" onClick={MenuClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
