"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import logo from '@/public/logo(2).svg'
import sign from '@/public/Login.svg'
import { useRouter } from "next/navigation";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "naibn149@gmail.com" && password === "Salam991") {
      router.push("./");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-[400px] p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">Log in</h2>
        <p className="text-center text-gray-500 mb-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#FF8A00]">
            Sign up
          </Link>
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
              placeholder="**********"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-[#FF8A00] border-gray-300 rounded" />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-[#FF8A00]">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF8A00] text-white py-2 rounded-md hover:bg-[#e67e00] transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
