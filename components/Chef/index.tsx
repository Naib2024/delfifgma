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
        <div className=' container m-auto'>
            <h1 className='text-4xl'>Our Greatest Chefs</h1>

            <div className="mt-10">
                {data ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map(({id,name,position,img}) => (
                            <div key={id} className="border p-4 rounded-lg shadow-lg">
                               <div>
                               <Image src={img} alt='img' width={100} height={100}/>
                               </div>
                                <h2 className="text-2xl font-bold">{name}</h2>
                                <p className="text-xl">{position}</p>
                                
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
