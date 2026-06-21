"use client";

import React, { useState } from "react";
import LoginSignUpButton from "@/components/LoginSignUpButton";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const router = useRouter();
  const { login } = useUser();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("Account not found");
      return;
    }

    if (
      savedUser.email !== loginData.email &&
      savedUser.password !== loginData.password
    ) {
      setError("Incorrect email and password");
      return;
    }

    if (savedUser.email !== loginData.email) {
      setError("Incorrect email");
      return;
    }

    if (savedUser.password !== loginData.password) {
      setError("Incorrect password");
      return;
    }

    // Save user in UserContext
    login(savedUser);

    // Redirect to home page
    router.push("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10 md:py-16 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100">
      {/* Login Form Card Box */}
      <div className="flex flex-col items-center border border-pink-200/60 bg-pink-100/90 backdrop-blur-sm w-full max-w-md h-fit p-5 sm:p-8 rounded-2xl shadow-2xl shadow-pink-300/50">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="text-3xl sm:text-4xl select-none">🎀</div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-amber-950">Welcome Back</h1>
          <p className="text-xs sm:text-sm text-gray-700 max-w-xs">
            Log in to track orders & save your faves.
          </p>
        </div>

        {/* Tab Toggle Navigation Component */}
        <div className="w-full mt-5">
          <LoginSignUpButton />
        </div>

        {/* Input Interactive Fields Form */}
        <form
          onSubmit={handleLogin}
          className="mt-5 w-full flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-bold text-gray-800 pl-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="yourname@domain.com"
              value={loginData.email}
              onChange={handleChange}
              className="py-2.5 px-4 border border-pink-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-bold text-gray-800 pl-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={loginData.password}
              onChange={handleChange}
              className="py-2.5 px-4 border border-pink-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Validation Errors Output Banner */}
          {error && (
            <p className="text-red-500 text-xs sm:text-sm font-semibold pl-1">
              ⚠️ {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 p-3 w-full bg-pink-600 hover:bg-pink-700 active:scale-[0.99] rounded-2xl text-white font-bold transition-all shadow-md shadow-pink-200 text-sm sm:text-base cursor-pointer"
          >
            Login ♡
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;