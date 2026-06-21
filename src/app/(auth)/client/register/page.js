"use client";

import React, { useState } from "react";
import Link from "next/link";
import LoginSignUpButton from "@/components/LoginSignUpButton";

const Page = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");
    window.location.href = "/client/login";
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10 md:py-16 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50">
      {/* Registration Form Card Box */}
      <div className="flex flex-col items-center border border-pink-200/60 bg-pink-100/90 backdrop-blur-sm w-full max-w-md h-fit p-5 sm:p-8 rounded-2xl shadow-2xl shadow-pink-300/50">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="text-3xl sm:text-4xl select-none">🎀</div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-amber-950">Register Here ♡</h1>
          <p className="text-xs sm:text-sm text-gray-700 max-w-xs">
            Create an account for sweet perks & order tracking.
          </p>
        </div>

        {/* Tab Toggle Navigation Component */}
        <div className="w-full mt-5">
          <LoginSignUpButton />
        </div>

        {/* Registration Form */}
        <form
          onSubmit={handleRegister}
          className="mt-5 w-full flex flex-col gap-4"
        >
          {/* Full Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-bold text-gray-800 pl-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              placeholder="Daisy Darling"
              className="py-2.5 px-4 border border-pink-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-bold text-gray-800 pl-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="daisydarling@gmail.com"
              className="py-2.5 px-4 border border-pink-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-bold text-gray-800 pl-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="py-2.5 px-4 border border-pink-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 p-3 w-full bg-pink-600 hover:bg-pink-700 active:scale-[0.99] rounded-2xl text-white font-bold transition-all shadow-md shadow-pink-200 text-sm sm:text-base cursor-pointer"
          >
            Create an Account ♡
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;