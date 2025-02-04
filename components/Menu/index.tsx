'use client'
import React, { useEffect, useState } from "react";
import { IUsers } from "@/INterface/INterface";
import getAllUsers from "@/services/GetAllUsers";
import MainButton from "../MainButton/index";
import Image from "next/image";
import Button from "../ui/button";
// import Imag6e from "../../public/image1.svg";

const Index = () => {
  const categories = ["Dinner", "Lunch", "Desert", "Drink"];
  const [selectCategory, setSelectCategory] = useState("all");
  const [data, setData] = useState<IUsers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers();
        setData(result);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const filterMenuByCategory = (menu: IUsers[], category: string) => {
    if (category === "all") return menu;
    return menu.filter((item) => item.category.toLowerCase() === category.toLowerCase());
  };
  const filteredData = filterMenuByCategory(data, selectCategory);
  return (
    <div>
      <h1 className="text-4xl text-center">Our popular menu</h1>
      {/* <Image src={Imag6e} alt="" /> */}

      <div className="flex gap-3 justify-center mt-4 ">
        <MainButton
          text="All Category"
          isOutline={selectCategory !== "all"}
          onClick={() => setSelectCategory("all")}
        />
        {categories.map((category, index) => (
          <MainButton
            text={category}
            key={index}
            isOutline={selectCategory.toLowerCase() !== category.toLowerCase()}
            onClick={() => setSelectCategory(category)}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {filteredData.map(({ id, discription, name, price, img }) => (
          <div
            key={id}
            className="border p-4 flex flex-col items-center space-y-3 w-64 text-center shadow-lg rounded-xl bg-[#f3f2f1]"
          >
            <div className="w-full flex justify-center">
              {img ? (
                <Image src={img} width={150} height={150} alt={name}
                  className="rounded-md"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-gray-600 text-sm">{discription}</p>
            <div className="flex justify-between items-center ">
              <h5 className="text-lg font-bold">{price}</h5>
              <Button text="Order Now" />
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Index;
