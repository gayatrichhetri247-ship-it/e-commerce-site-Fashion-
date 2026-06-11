import React from "react";
import Link from "next/link"

const page = () => {
  return (

      <div className="flex flex-col items-center gap-4 py-10 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100">
        <div className="text-4xl">🌸</div>
        <div className="text-4xl font-extrabold">Our little love story</div>
        <div className="px-96 text-center text-sm text-gray-600">
          Blush & Bloom began with a simple dream — to make fashion that feels
          like a warm hug and a soft daydream. We design dreamy, feminine pieces
          for the romantics, the twirlers, and the main characters of their own
          sweet stories.
        </div>
        <div className="w-full  h-auto flex justify-center ">
          <img src="/images/about/story.jpg" alt="Our love story" className="border-8 bg-cover border-white rounded-2xl shadow-xl shadow-pink-200" />
        </div>
        <div className="flex justify-between px-14 mt-14 gap-10">
          <div className="  py-4 px-8 bg-pink-100 rounded-2xl flex flex-col gap-2 shadow-xl ">
            <div className="text-3xl">🌷</div>
            <div className="text-xl font-bold">Made with love</div>
            <div className="text-sm text-gray-600">
              Every piece is thoughtfully designed with delicate details, soft
              fabrics, and that little touch of magic that makes you feel
              beautiful.
            </div>
          </div>
          <div className=" py-4 px-8 bg-pink-100 rounded-2xl flex flex-col gap-2 shadow-xl">
            <div className="text-3xl">🌿</div>
            <div className="text-xl font-bold">Kind to the planet</div>
            <div className="text-sm text-gray-600">
              We use ethically sourced, responsibly made fabrics because looking
              pretty should feel good inside and out.
            </div>
          </div>
          <div className=" py-4 px-8 bg-pink-100 rounded-2xl flex flex-col gap-2 shadow-xl">
            <div className="text-3xl">💝</div>
            <div className="text-xl font-bold">For every babe</div>
            <div className="text-sm text-gray-600">
              From XS to XL, our collections are crafted to celebrate every body
              and every kind of pretty. You belong here.
          </div>
          </div>
        </div>
        <div className=" flex flex-col items-center mt-10 w-[900px] h-[300px] items-center justify-center bg-gradient-to-b from-pink-300 to-pink-100 rounded-3xl gap-4">
          <div className="text-4xl">🎀</div>
          <div className="text-4xl font-bold">Come bloom with us</div>
          <div className="w-96 text-center text-xs ">Join thousands of darlings who dress like the main character every single day.</div>
          <Link href="/products">
            <button className="px-6 py-4 bg-white mt-6 rounded-2xl text-pink-400 font-extrabold shadow-2xl">Shop the Collection</button>
          </Link>
        </div>
      </div>

  );
};

export default page;
