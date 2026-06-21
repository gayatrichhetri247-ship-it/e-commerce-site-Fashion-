import React from "react";
import Link from "next/link";
import Productcards from "@/components/productcards";
import ShopAll from "@/components/ProductCategory";
import ProductCard from "@/components/ProductCrad";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 flex flex-col items-center p-4 sm:p-8">
      
      {/* Header Container */}
      <div className="flex flex-col items-center text-center mt-4 sm:mt-6">
        {/* Shopping Cart Icon */}
        <div className="flex justify-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#f04a94"
            className="w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-105"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </div>
        
        {/* Title & Subtitle text */}
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-950 tracking-tight">
            Shop All
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xs sm:max-w-md">
            Curated with love, just for you ♡
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      {/* Assuming ShopAll component inside contains your grid/layout code */}
      <div className="w-full max-w-7xl mx-auto mt-6 sm:mt-10 px-2 sm:px-4">
        <ShopAll />
      </div>
      
    </div>
  );
};

export default Page;