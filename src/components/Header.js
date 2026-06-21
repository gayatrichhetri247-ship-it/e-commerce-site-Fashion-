"use client";

import React, { useState } from "react";
import Link from "next/link";
import AddCart from "@/components/AddCart";
import { useTheme } from "next-themes";
import { useCart } from "@/app/context/CartContext";
import { useUser } from "@/app/context/UserContext";
import ProfileDropdown from "@/components/ProfileDropdown";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { theme, setTheme } = useTheme();
  const { cartItems } = useCart();
  const { user, isLoggedIn } = useUser();

  return (
    <>
      <header className="flex justify-between top-0 items-center h-auto px-10 border-b-2 border-pink-100 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50">
        <div className="h-20 w-52 flex items-center">
          <Link href="/">
            <img src="/images/shoplogo.png" />
          </Link>
        </div>

        <nav className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex gap-8 items-center">
         

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

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center text-xs font-bold text-white bg-linear-to-r from-pink-500 to-red-500 rounded-full shadow-md animate-bounce">
                {cartItems.length > 99 ? "99+" : cartItems.length}
              </span>
            )}
          </button>

          {isLoggedIn ? (
            <ProfileDropdown user={user} />
          ) : (
            <Link href="/client/login">
              <button className="bg-pink-500 text-white font-bold px-4 py-1 rounded-2xl cursor-pointer">
                Login
              </button>
            </Link>
          )}
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
        className={`fixed top-0 right-0 h-screen w-100 border-pink-100 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-100 z-50 shadow-2xl transition-transform duration-300 ${
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
          <AddCart setShowCart={setShowCart} />
        </div>
      </div>
    </>
  );
};

export default Header;
