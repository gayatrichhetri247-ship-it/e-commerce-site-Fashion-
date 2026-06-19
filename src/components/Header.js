"use client";

import React, { useState } from "react";
import Link from "next/link";
import AddCart from "@/components/AddCart";
import { useTheme } from "next-themes";
import { useCart } from "@/app/context/CartContext";
// import { useCart } from "../app/context/CartContext.jsx";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { theme, setTheme } = useTheme();
  const { cartItems } = useCart();

  return (
    <>
      <header className="flex justify-between top-0 items-center h-auto px-10 border-b-2 border-pink-100 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50">
        <div className="h-20 w-52 flex items-center">
          <Link href="/">
            <img src="/images/shoplogo.png" />
          </Link>
        </div>

        <nav className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/order">Order</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex gap-8 items-center">
          {/* Keep your first SVG exactly the same */}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f5cb42"
              className="size-6 cursor-pointer w-8 h-8 p-1 rounded-full bg-pink-200"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Cart Icon Popup */}
          <button onClick={() => setShowCart(true)} className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f7529c"
              className="size-7 cursor-pointer"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>

            <div className="absolute bottom-5 left-4 bg-red-500 text-white w-4 h-4 rounded-full">
              <p className="text-xs ml-[5px] mt-[-3px]">{cartItems.length}</p>
            </div>
          </button>

          <Link href="/client/login">
            <button className="bg-pink-500 text-white font-bold px-4 py-1 rounded-2xl cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Overlay */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setShowCart(false)}
        />
      )}

      {/* Cart Popup */}
      <div
        className={`fixed top-0 right-0 h-screen w-[400px] border-pink-100 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100 z-50 shadow-2xl transition-transform duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex gap-1">
            <h2 className=" mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="#f7529c"
                className="size-7 cursor-pointer"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </h2>
            <h2 className="text-2xl font-bold"> My Cart</h2>
          </div>

          <button onClick={() => setShowCart(false)} className="text-2xl">
            ✕
          </button>
        </div>

        <div className="p-4">
          <AddCart />
        </div>
      </div>
    </>
  );
};

export default Header;
