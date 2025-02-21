import React from "react";
import Button from "../ui/button";
import { CiTrash } from "react-icons/ci";
import { useRouter } from "next/navigation";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderListProps {
  orderItems: OrderItem[];
  setOrderItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

const OrderList: React.FC<OrderListProps> = ({ orderItems, setOrderItems }) => {
  const router = useRouter();

  const goToCheckout = () => {
    if (orderItems.length > 0) {
      localStorage.setItem("orderItems", JSON.stringify(orderItems));
      router.push("/checkOut");
    }
  };

  const increaseQuantity = (id: number) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const remove = (id: number) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="hidden sm:block border w-[25%] justify-center items-center mt-10 p-4">
      <button
        onClick={goToCheckout}
        className="bg-[#FF8A00] text-white px-4 py-2 rounded-md mb-4 w-full"
      >
        Order List
      </button>
      <h3 className="text-xl font-bold">Order List</h3>
      {orderItems.length === 0 ? (
        <p>No items in the order.</p>
      ) : (
        orderItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <div>
              <h4>{item.name}</h4>
              <p>{item.price.slice(0, item.price.length - 4) * item.quantity} AZN</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="text-lg border w-6 rounded-full"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <h1 className="text-3xl">{item.quantity}</h1>
              <button
                className="text-lg border w-6 rounded-full"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
              <button
                onClick={() => remove(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <CiTrash size={20} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
