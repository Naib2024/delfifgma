'use client'
import getAllChef from '@/services/GetAllChef'
import React, { useEffect, useState } from 'react'
import { IChef } from '@/INterface/INterface'
import Image from 'next/image'
import Button from '../ui/button'

const Index = () => {
    const [data, setData] = useState<IChef[]>([]);
    const [showChef, setShowChef] = useState(false);    

    const displayedChefs = showChef ? data : data.slice(0, 3);

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
        <div className='container m-auto mt-40'>
            <h1 className='text-5xl text-center'>Our Greatest Chefs</h1>
            <div className="mt-10">
                {data.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 justify-center">
                        {displayedChefs.map(({ id, name, position, img }) => (
                            <div key={id} className="flex flex-col items-center">
                                <div className="border p-4 rounded-lg shadow-lg">
                                    <Image src={img} alt="img" width={200} height={200} />
                                </div>
                                <div className="text-center mt-2">
                                    <h2 className="text-xl font-bold">{name}</h2>
                                    <p className="text-lg">{position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center">Loading chefs...</p>
                )}
            </div>
            {data.length > 3 && (
                <div className='flex justify-center mt-10'>
                    <Button text={showChef ? 'Show Less' : 'View All'} onClick={() => setShowChef(!showChef)} />
                </div>
            )}
        </div>
    );
};

export default Index;
