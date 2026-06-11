import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex justify-between sticky top-0  items-center h-auto px-10  bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100">
      <div className="h-20 w-52 flex items-center">
        <Link href="/home">
          <img src="/images/shoplogo.png" />
        </Link>
      </div>
      <nav className="flex gap-8 ">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/order">Order</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div>
        <div className="flex gap-8 items-center">
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f7529c"
              className="size-7"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <div className=" absolute bottom-5 left-4  bg-red-500 text-white w-4 h-4 rounded-full ">
              <p className="text-xs ml-[5px] mt-[-3px] ">3</p>
            </div>
          </Link>
          <Link href="/Login">
            <button className="bg-pink-500 text-white font-bold px-4 py-1 rounded-2xl">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
