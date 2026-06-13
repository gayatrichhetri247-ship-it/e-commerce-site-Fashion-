
import React from "react";
import Link from "next/link";
import LoginSignUpButton from "@/components/LoginSignUpButton";
const Page = () => {


  return (
    <div className="flex justify-center p-14 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-100 ">
      <div className="flex flex-col items-center border border-pink-200 bg-pink-100 w-100 h-fit p-6 rounded-2xl shadow-2xl shadow-pink-300">
        <div className="flex flex-col items-center gap-1">
          <div className="text-4xl">🎀</div>
          <div className="text-3xl font-bold">Welcome back</div>
          <div className="text-sm text-gray-700 ">
            Log in to track orders & save your faves.
          </div>
        </div>
        <LoginSignUpButton/>
       
        <form className="mt-4 w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold">Email</label>
            <input
              type="email"
              placeholder="daisy@gmail.com"
              className="py-2 px-4 border-2 rounded-2xl border-t-black border-l-black border-b-gray-500 border-r-gray-500 bg-white"
            />
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <label className="font-bold">Password</label>
            <input
              type="password"
              placeholder=""
              className="py-2 px-4 border-2 rounded-2xl border-t-black border-l-black border-b-gray-500 border-r-gray-500 bg-white"
            />
          </div>
        </form>

        <Link href="/" className="block w-full">
          <button className=" p-2 w-full mt-4 bg-pink-600 rounded-2xl text-white font-bold">
            Login ♡
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
