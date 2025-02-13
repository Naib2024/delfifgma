'use client'
import React, { useEffect, useState} from "react";
import getAllUsers from "@/services/GetAllUsers";
import { IUsers } from "@/INterface/INterface";


const  ProductCard=(result)=>{
  const [data, setData] = useState<IUsers[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getAllUsers();
          setData(result);
          console.log(result);
          
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchData();
    }, []);
  


    const { productData, clickBtn } = result;
    return (

<div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[65%]  p-3 pt-10">
        {/* {currentItems.map(({ id, discription, name, price, img }) => (
          <div
            key={id}
            className="m-auto border p-3 flex flex-col items-center space-y-2  w-[250px] text-center shadow-md rounded-xl bg-[#f3f2f1] hover:bg-[#FF8A00] hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full flex justify-center ">
              {img ? (
                <Image src={img} width={150} height={250} alt={name} className="rounded-md" />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <h1 className="text-sm font-semibold">{name}</h1>
            <p className="text-gray-600 text-xs">{discription}</p>
            <div className="flex justify-between items-center gap-2">
              <h5 className="text-sm font-bold">{price}</h5>
              <Button text="Order Now" classes="bg-[#FF8A00] text-sm sm:text-sm lg:text-sm hover:text-black bg-white" onClick={MenuClick} />
            </div>
          </div>
        ))} */}
        salam
      </div>



        // <div>
        //     {productData.name}
        //     <br />
        //     Price: {productData.price}
        //     <br />
        //     <button onClick={clickBtn}>Add to basket</button>
        // </div>
    );
};



export default ProductCard



