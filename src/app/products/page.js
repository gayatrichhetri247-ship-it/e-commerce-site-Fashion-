import Productcards from "@/components/productcards";
import ShopAll from "@/components/ProductCategory";
import ProductCard from "@/components/ProductCrad";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" h-auto bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 flex flex-col items-center p-8">
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#f04a94"
            className="size-16 flex ml-24"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </div>
        
        <div className="flex flex-col gap2 items-center">
            <h1 className="text-5xl font-extrabold">Shop All</h1>
            <p className="text-lg text-gray-500 mt-4">Curated with love, just for you ♡</p>
        </div>
      </div>

      <div className="flex mt-8 justify-between  px-4">
        <ShopAll/>
        
    
      </div>
      <div className="mt-10">
        <Productcards/>
      </div>
    </div>
  );
};

export default page;
