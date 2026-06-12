import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className=" p-14 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 h-screen flex justify-center ">
      <div className="flex flex-col items-center bg-white rounded-2xl w-[450px] h-fit py-8 shadow-xl shadow-pink-300 ">
        <div className="text-7xl">🔐</div>
        <div className="text-3xl font-bold mt-4">Owner Login</div>
        <div className="text-sm text-gray-600">
          Sign in to access your fashion store dashboard.
        </div>
        <form className="flex flex-col gap-2 w-full p-6 mt-4">
          <label className="font-bold">Password</label>
          <input
            type="password"
            placeholder="password"
            className=" p-2 border-2 border-t-black border-b-gray-500 border-l-black border-r-gray-500 rounded-2xl text-sm"
          />
         <Link href="/admin-dashboard"><button className="bg-pink-600 p-2 text-white font-bold rounded-2xl w-full mt-4">
            Login
          </button> </Link> 
        </form>

        <div className="flex text-sm ">
          <p className="text-gray-700">Demo password:</p>
          <p className="ml-1 text-pink-600 font-semibold">girlish-fashion</p>
        </div>
      </div>
    </div>
  );
};

export default page;
