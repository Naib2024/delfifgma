"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const CheckOut = () => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    useEffect(() => {
        const savedOrders = localStorage.getItem("orderItems");
        if (savedOrders) {
            setOrderItems(JSON.parse(savedOrders));
        }
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-semibold mb-4">Order Summary</h1>

                {orderItems.length === 0 ? (
                    <p>No items in your order.</p>
                ) : (
                    <div className="border p-4 rounded-md">
                        {orderItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center mb-2">
                                <div>
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p>{item.quantity} x {item.price} AZN</p>
                                </div>
                                <p>{item.price.slice(0, item.price.length - 4) * item.quantity} AZN</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-6">
                    <h1 className="text-2xl font-semibold mb-2">Shipping Address</h1>
                    <input
                        type="text"
                        placeholder="Shipping address"
                        className="w-full p-3 border rounded-md"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button className="bg-[#FF8A00] text-white py-3 px-6 rounded-md">
                        Confirm Order
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CheckOut;
