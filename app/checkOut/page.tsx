"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const CheckOut = () => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [paymentMethod, setPaymentMethod] = useState<"credit" | "cash">("credit");
    const [isConfirmed, setIsConfirmed] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const savedOrders = localStorage.getItem("orderItems");
        if (savedOrders) {
            setOrderItems(JSON.parse(savedOrders));
        }
    }, []);

    const handleConfirmOrder = () => {
        const orderDetails = {
            orderItems,
            name,
            surname,
            paymentMethod,
        };

        // Save order details
        localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

        // Clear order items from state and localStorage
        setOrderItems([]);
        localStorage.removeItem("orderItems");

        setIsConfirmed(true); // Set confirmation state to true
        localStorage.setItem("isConfirmed", "true"); // Optionally store the confirmation status

        setTimeout(() => {
            router.push("/Check"); // Redirect to confirmation page
        }, 2000);
    };

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
                                <p>{(parseFloat(item.price) * item.quantity).toFixed(2)} AZN</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Add Name and Surname Fields */}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold mb-2">Customer Information</h1>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-3 border rounded-md"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Surname"
                            className="w-full p-3 border rounded-md"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>
                </div>

                {/* Add Payment Method */}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold mb-2">Payment Method</h1>
                    <select
                        className="w-full p-3 border rounded-md"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value as "credit" | "cash")}
                    >
                        <option value="credit">Credit</option>
                        <option value="cash">Cash</option>
                    </select>
                </div>

                {/* Shipping Address */}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold mb-2">Shipping Address</h1>
                    <input
                        type="text"
                        placeholder="Shipping address"
                        className="w-full p-3 border rounded-md"
                    />
                </div>

                {/* Confirm Order Button */}
                <div className="flex justify-center mt-6">
                    <button
                        className="bg-[#FF8A00] text-white py-3 px-6 rounded-md"
                        onClick={handleConfirmOrder}
                    >
                        Confirm Order
                    </button>
                </div>

                {isConfirmed && (
                    <div className="mt-4 text-center text-xl text-green-500">
                        Order confirmed! Redirecting...
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default CheckOut;
