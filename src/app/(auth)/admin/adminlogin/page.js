"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "girlish-fashion") {
      router.push("/admin-dashboard");
    } else {
      setError("Wrong password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 flex justify-center items-center px-4 py-10 md:py-14">
      {/* Login Card Box */}
      <div className="flex flex-col items-center bg-white rounded-2xl w-full max-w-md h-fit py-8 px-4 sm:px-6 shadow-xl shadow-pink-300/60 border border-pink-100/50">
        
        {/* Lock Emoji Icon */}
        <div className="text-5xl sm:text-7xl select-none">🔐</div>
        
        {/* Headings */}
        <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-amber-950 tracking-tight text-center">
          Owner Login
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 text-center max-w-xs">
          Sign in to access your fashion store dashboard.
        </p>

        {/* Input Interactive Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-2 w-full mt-4 py-4">
          <label className="font-bold text-sm sm:text-base text-gray-800 pl-1">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter owner password..."
            className="p-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all bg-gray-50/50"
          />

          {/* Validation Failure Error Output Banner */}
          {error && (
            <p className="text-red-500 text-xs sm:text-sm font-medium pl-1 mt-1 animate-shake">
              ⚠️ {error}
            </p>
          )}

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 active:scale-[0.99] text-white font-bold py-3 px-4 rounded-2xl w-full mt-4 shadow-md shadow-pink-100 transition-all text-sm sm:text-base cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Helper Footer Hint Banner */}
        <div className="flex flex-wrap justify-center items-center text-xs sm:text-sm bg-pink-50/60 border border-pink-100/70 px-4 py-2 rounded-xl mt-2">
          <span className="text-gray-600 font-medium">Demo password:</span>
          <span className="ml-1.5 text-pink-600 font-bold tracking-wide select-all">
            girlish-fashion
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Page;