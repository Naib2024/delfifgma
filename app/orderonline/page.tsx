"use client";
import React, { useEffect, useState } from "react";
import { IUsers } from "@/INterface/INterface";
import getAllUsers from "@/services/GetAllUsers";
import MainButton from "@/components/MainButton";
import Image from "next/image";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import OrderList from "@/components/OrderList";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const categories = ["Dinner", "Lunch", "Desert", "Drink"];
  const [selectCategory, setSelectCategory] = useState("all");
  const [data, setData] = useState<IUsers[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderItems, setOrderItems] = useState([]);
  const [itemsPerPage] = useState(9);
  const router = useRouter();
  const [mobile, setMobile] = useState(true);

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

  const MenuClick = (item: any) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };
  

  const filterMenuByCategory = (menu, category) => {
    if (category === "all") return menu;
    return menu.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  };

  const filteredData = filterMenuByCategory(data, selectCategory);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const Order = ()=> router.push("./checkOut")
  return (
    <>
      <div className="container m-auto">
        {/* Category Buttons */}
        <div className="flex gap-2 justify-center mt-4">
          <MainButton
            text="All Category"
            isOutline={selectCategory !== "all"}
            onClick={() => {
              setSelectCategory("all");
              setCurrentPage(1);
            }}
          />
          {categories.map((category) => (
            <MainButton
              text={category}
              key={category}
              isOutline={selectCategory.toLowerCase() !== category.toLowerCase()}
              onClick={() => {
                setSelectCategory(category);
                setCurrentPage(1);
              }}
            />
          ))}
        </div>

        <div className="flex">
          {/* Menu Items */}
          <div className="w-[70%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-3 ">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="m-auto border p-3 flex flex-col items-center space-y-2 text-center shadow-md rounded-xl bg-[#f3f2f1] hover:bg-[#FF8A00] hover:shadow-xl transition-all duration-300 hidden md:block"
              >
                <div className="w-full flex justify-center">
                  {item.img ? (
                    <Image
                      src={item.img}
                      width={250}
                      height={250}
                      alt={item.name}
                      className="rounded-md"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <h1 className="text-sm font-semibold">{item.name}</h1>
                <p className="text-gray-600 text-xs">{item.discription}</p>
                <div className="flex justify-between items-center gap-2">
                  <h5 className="text-sm font-bold">{item.price}</h5>
                  <Button
                    text="Order Now"
                    classes="bg-[#FF8A00] text-sm sm:text-sm lg:text-sm hover:text-black bg-white"
                    onClick={() => MenuClick(item)}
                  />
                </div>
              </div>
            ))}
          </div>
          <OrderList orderItems={orderItems} setOrderItems={setOrderItems} />

        </div>
        {mobile && (
  <div className="md:hidden w-full m-auto flex flex-col items-center p-3">
    <div className="w-full flex flex-col items-center gap-5">
      {currentItems.map(({ id, discription, name, price, img }: any) => (
        <div
          key={id}
          className="border p-3 flex flex-col items-center text-center shadow-md rounded-xl bg-[#f3f2f1] hover:bg-[#FF8A00] hover:shadow-xl transition-all duration-300"
        >
          <div className="w-full flex justify-center">
            {img ? (
              <Image
                src={img}
                width={200}
                height={200}
                alt={name}
                className="rounded-md"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
          <h1 className="text-sm font-semibold mt-2">{name}</h1>
          <p className="text-gray-600 text-xs">{discription}</p>
          <div className="flex justify-center items-center gap-3 mt-2">
            <h5 className="text-sm font-bold">{price} AZN</h5>
            <Button
              text={`+ ${orderItems.find(i => i.id === id)?.quantity || 0}`} // Button text dəyişir
              classes="bg-[#FF8A00] text-sm hover:text-black bg-white"
              onClick={() =>
                MenuClick({ id, discription, name, price, img })
              }
            />
          </div>
        </div>
      ))}
    </div>
    <button className="mt-3 text-lg text-white py-2 px-5 border bg-[#512982] rounded-xl" onClick={Order} >
      Order List
    </button>
  </div>
)}



        {/* Pagination Controls */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={prevPage}
            className="px-3 py-2 bg-gray-200 rounded-full hover:bg-[#FF8A00] disabled:opacity-50 transition-all duration-300"
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-2 rounded-full ${currentPage === index + 1
                ? "bg-[#FF8A00] text-white"
                : "bg-gray-200 hover:bg-[#FF8A00]"
                } transition-all duration-300`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            className="px-3 py-2 bg-gray-200 rounded-full hover:bg-[#FF8A00] disabled:opacity-50 transition-all duration-300"
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
