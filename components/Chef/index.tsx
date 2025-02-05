'use client'
import getAllChef from '@/services/GetAllChef'
import React, { useEffect, useState } from 'react'
import { IChef } from '@/INterface/INterface'
import Image from 'next/image'

const Index = () => {
    const [data, setData] = useState<IChef[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllChef();
                setData(result);
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className=' container m-auto mt-40'>
            <h1 className='text-5xl text-center'>Our Greatest Chefs</h1>

            <div className="mt-10">
                {data ? (
                    <div className="flex justify-center gap-5">
                        {data.map(({ id, name, position, img }) => (
                            <div key={id}>
                                <div className="border p-4 rounded-lg shadow-lg">
                                    <Image src={img} alt='img' width={200} height={200} />
                                </div>
                                <div className='text-center'>
                                    <h2 className="text-xl font-bold">{name}</h2>
                                    <p className="text-xl">{position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading chefs...</p>
                )}
            </div>
        </div>
    );
};

export default Index;
