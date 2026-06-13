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

      <div className="flex mt-8 justify-between w-full px-4">
        <div className="flex gap-6 items-center text-sm"> 
            <Link href="/shopall" className="px-6 py-1 bg-white border border-pink-300 text-center rounded-2xl">All</Link>
            <Link href="/shopall/dresses" className="px-6 py-1 bg-white border border-pink-300 text-center rounded-2xl">Dresses</Link>
            <Link href="/shopall/tops" className="px-6 py-1 bg-white border border-pink-300 text-center rounded-2xl">Tops</Link>
            <Link href="/shopall/pants" className="px-6 py-1 bg-white border border-pink-300 text-center rounded-2xl">Pants</Link>
            <Link href="/shopall/skirts" className="px-6 py-1 bg-white border border-pink-300 text-center rounded-2xl">Skirts</Link>
            <Link href="/shopall/accessories" className="px-6 py-1 bg-white border border-pink-300 text-center rounded-2xl">Accessories</Link>
        </div>
        <div className="flex gap-4 text-sm"> 
            <input type="text" placeholder="Search products..." className="border border-pink-200 px-4 py-2 rounded-2xl bg-white text-black" />
            <select className="border border-pink-200 px-4 py-2 rounded-2xl bg-white text-black">
                <option className="border border-pink-200 px-4 py-2 rounded-2xl bg-white text-black" >Feature</option>
                <option className="border border-pink-200 px-4 py-2 rounded-2xl bg-white text-black" >Price: Low to High</option>
                <option className="border border-pink-200 px-4 py-2 rounded-2xl bg-white text-black" >Price: High to Low</option>
                <option className="border border-pink-200 px-4 py-2 rounded-2xl bg-white text-black" >Customer Rating</option>
            </select>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-10">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};

export default page;
