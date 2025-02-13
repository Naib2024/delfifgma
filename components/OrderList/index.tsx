import React from "react";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const OrderList = ({ orderItems, setOrderItems }: any) => {
  const increaseQuantity = (id: any) => {
    setOrderItems((prevItems: any) =>
      prevItems.map((item: any) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: any) => {
    setOrderItems((prevItems: any) =>
      prevItems.map((item: any) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const router = useRouter()
  const Click = () => router.push("/reservation")

  return (
    <div className="hidden sm:block border w-[26%] mt-10 p-4">
      <Button text="Order list" classes="rounded-md" onClick={Click} />
      <h3 className="text-xl font-bold">Order List</h3>
      {orderItems.length === 0 ? (
        <p>No items in the order.</p>
      ) : (
        orderItems.map((item: any) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <div>
              <h4>{item.name}</h4>
              <p>{item.price.slice(0, item.price.length - 4) * item.quantity} AZN</p>
            </div>
            <div className="flex items-center gap-2">
              <Button text="+" onClick={() => increaseQuantity(item.id)} />
              <h1 className="text-3xl">{item.quantity}</h1>
              <Button text="-" onClick={() => decreaseQuantity(item.id)} />
            </div>
          </div>
        ))
      )}
    </div>

  );
};

export default OrderList;
