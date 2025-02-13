// pages/contact.tsx

import React from 'react';
import Location from "@/components/Location/index"
import Footer from "@/components/layout/Footer"

const page = () => {
  return (
    <>
      <div className="container mx-auto p-6 md:p-12">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
        </div>

        {/* Description Section */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            We love hearing from our customers. Feel free to share your experience or ask any questions you may have.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form>
            {/* First and Last Name Inputs */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
              <input
                type="text"
                placeholder="First Name"
                className="p-4 text-xl border border-gray-300 rounded-lg mb-4 md:mb-0 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-4 text-xl border border-gray-300 rounded-lg w-full"
              />
            </div>

            {/* Email Address and Subject Inputs */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 text-xl border border-gray-300 rounded-lg mb-4 md:mb-0 w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-4 text-xl border border-gray-300 rounded-lg w-full"
              />
            </div>

            {/* Message Input */}
            <div className="mb-8">
              <textarea
                placeholder="Your Message"
                className="p-4 text-xl border border-gray-300 rounded-lg w-full h-40"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#FF8A00] text-white py-4 px-8 text-xl rounded-lg w-full hover:bg-[#e67700] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default page;
