"use client";
import React, { useEffect, useState } from "react";

const Confirmation = () => {
    const [orderDetails, setOrderDetails] = useState<any>(null);

    useEffect(() => {
        const savedOrderDetails = localStorage.getItem("orderDetails");
        if (savedOrderDetails) {
            setOrderDetails(JSON.parse(savedOrderDetails));
        }
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            {orderDetails ? (
                <>
                    <h1 className="text-2xl font-semibold mb-4">Order Confirmed!</h1>
                    <p className="mb-4">Thank you for your order, {orderDetails.name} {orderDetails.surname}.</p>

                    <div className="border p-4 rounded-md mb-6">
                        <h3 className="font-semibold mb-2">Your Order:</h3>
                        <ul className="list-disc ml-5">
                            {orderDetails.orderItems.map((item: any) => (
                                <li key={item.id}>
                                    {item.name} x {item.quantity} - {item.price.slice(0, item.price.length - 4) * item.quantity} AZN

                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="mb-4">Payment Method: {orderDetails.paymentMethod}</p>

                    <h3 className="font-semibold">Shipping Address:</h3>
                    {/* Here you could show the address if stored */}
                    <p>Shipping address goes here (if you decide to capture it).</p>
                </>
            ) : (
                <p>Loading your order details...</p>
            )}
        </div>
    );
};

export default Confirmation;
