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
    <div className="flex justify-center p-14 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50">
      <div className="flex flex-col items-center border border-pink-200 bg-pink-100 w-100 h-fit p-6 rounded-2xl shadow-2xl shadow-pink-300">
        <div className="flex flex-col items-center gap-1">
          <div className="text-4xl">🎀</div>
          <div className="text-3xl font-bold">Register Here ♡</div>
          <div className="text-sm text-gray-700">
            Create an account for sweet perks & order tracking.
          </div>
        </div>

        <LoginSignUpButton />

        <form
          onSubmit={handleRegister}
          className="mt-4 w-full flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="font-bold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              placeholder="Daisy Darling"
              className="py-2 px-4 border-2 rounded-2xl bg-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="daisydarling@gmail.com"
              className="py-2 px-4 border-2 rounded-2xl bg-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="py-2 px-4 border-2 rounded-2xl bg-white"
              required
            />
          </div>

          <button
            type="submit"
            className="p-2 w-full bg-pink-600 rounded-2xl text-white font-bold"
          >
            Create an Account ♡
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;