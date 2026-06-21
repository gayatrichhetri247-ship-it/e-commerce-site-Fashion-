"use client";

import React, { useState } from "react";
import Link from "next/link";
import AddCart from "@/components/AddCart";
import { useTheme } from "next-themes";
import { useCart } from "@/app/context/CartContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { cartItems } = useCart();

  return (
    <>
      <header className="sticky top-0 z-40 flex justify-between items-center h-20 px-6 md:px-10 border-b-2 border-pink-100 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50">
        {/* Brand Logo */}
        <div className="h-full w-40 sm:w-52 flex items-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/images/shoplogo.png" alt="Shop Logo" className="object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 font-medium text-gray-700 hover:text-pink-600 transition-colors">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <Link href="/about" className="hover:text-pink-600">About</Link>
          <Link href="/products" className="hover:text-pink-600">Products</Link>
          <Link href="/order" className="hover:text-pink-600">Order</Link>
          <Link href="/contact" className="hover:text-pink-600">Contact</Link>
        </nav>

        {/* Header Action Items */}
        <div className="flex gap-4 md:gap-8 items-center">
          {/* Cart Icon Button */}
          <button onClick={() => setShowCart(true)} className="relative p-1 focus:outline-none" aria-label="Open Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f7529c"
              className="w-7 h-7 cursor-pointer"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>

            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-md animate-bounce">
                {cartItems.length > 99 ? "99+" : cartItems.length}
              </span>
            )}
          </button>

          {/* Login Button */}
          <Link href="/client/login">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-1.5 rounded-2xl cursor-pointer transition-colors text-sm sm:text-base">
              Login
            </button>
          </Link>

          {/* Mobile Hamburger Trigger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="block lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden fixed top-20 left-0 w-full bg-pink-50/95 backdrop-blur-md border-b border-pink-100 flex flex-col items-center gap-5 py-6 font-semibold text-gray-800 shadow-lg z-30 animate-fade-in-down">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-600 w-full text-center py-2">Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-600 w-full text-center py-2">About</Link>
          <Link href="/products" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-600 w-full text-center py-2">Products</Link>
          <Link href="/order" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-600 w-full text-center py-2">Order</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-600 w-full text-center py-2">Contact</Link>
        </nav>
      )}

      {/* Slide-out Cart Backdrop Overlay */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={() => setShowCart(false)}
        />
      )}

      {/* Cart Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[400px] border-l border-pink-100 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100 z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b bg-white/40 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f7529c"
              className="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-800">My Cart</h2>
          </div>

          <button 
            onClick={() => setShowCart(false)} 
            className="text-gray-500 hover:text-black p-2 text-xl focus:outline-none"
            aria-label="Close Cart"
          >
            ✕
          </button>
        </div>

        <div className="p-4 h-[calc(100vh-70px)] overflow-y-auto">
          <AddCart setShowCart={setShowCart} />
        </div>
      </div>
    </>
  );
};

export default Header;