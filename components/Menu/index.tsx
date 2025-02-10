'use client'
import React, { useEffect, useState } from "react";
import { IUsers } from "@/INterface/INterface";
import getAllUsers from "@/services/GetAllUsers";
import MainButton from "../MainButton/index";
import Image from "next/image";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const Index = () => {
  const categories = ["Dinner", "Lunch", "Desert", "Drink"];
  const [selectCategory, setSelectCategory] = useState("all");
  const [data, setData] = useState<IUsers[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [itemsPerPage] = useState(6); // Items per page (can be adjusted)
  const router = useRouter();

  const MenuClick = () => {
    router.push('/reservation');
  }

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
  
  // Filtered data based on the selected category
  const filteredData = filterMenuByCategory(data, selectCategory);

  // Calculate the index of the first and last item based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the data to show the current page's items
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle the next page click
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Handle the previous page click
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex gap-3 justify-center mt-4">
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

      {/* Menu Items in Grid Layout (3 columns, 2 rows for desktop, 1 column for mobile) */}
      <div className="w-[70%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {currentItems.map(({ id, discription, name, price, img }) => (
          <div
            key={id}
            className="border p-4 flex flex-col items-center space-y-3 text-center shadow-lg rounded-xl bg-[#f3f2f1] hover:bg-[#FF8A00] hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full flex justify-center">
              {img ? (
                <Image src={img} width={150} height={150} alt={name} className="rounded-md" />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-gray-600 text-sm">{discription}</p>
            <div className="flex justify-between items-center gap-3">
              <h5 className="text-lg font-bold">{price}</h5>
              <Button text="Order Now" classes="text-sm sm:text-sm lg:text-sm" onClick={MenuClick} />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-4">
        {/* Previous Button */}
        <button
          onClick={prevPage}
          className="px-4 py-2 bg-gray-200 rounded-full hover:bg-[#FF8A00] disabled:opacity-50 transition-all duration-300"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-[#FF8A00] text-white' : 'bg-gray-200 hover:bg-[#FF8A00]'} transition-all duration-300`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={nextPage}
          className="px-4 py-2 bg-gray-200 rounded-full hover:bg-[#FF8A00] disabled:opacity-50 transition-all duration-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Index;
