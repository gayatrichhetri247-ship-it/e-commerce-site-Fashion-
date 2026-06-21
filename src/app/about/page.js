import React from "react";
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-10 px-4 sm:px-8 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-100 min-h-screen">
      {/* Intro Header Section */}
      <div className="text-4xl animate-pulse">🌸</div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight text-amber-950">
        Our little love story
      </h1>
      <p className="max-w-2xl px-4 text-center text-sm sm:text-base text-gray-600 leading-relaxed">
        Blush & Bloom began with a simple dream — to make fashion that feels
        like a warm hug and a soft daydream. We design dreamy, feminine pieces
        for the romantics, the twirlers, and the main characters of their own
        sweet stories.
      </p>

      {/* Main Image Container */}
      <div className="w-full flex justify-center my-4 px-2">
        <img 
          src="/images/about/story.jpg" 
          alt="Our love story" 
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl h-auto border-4 sm:border-8 border-white rounded-2xl shadow-xl shadow-pink-200/50 object-cover" 
        />
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-2 mt-8">
        {/* Card 1 */}
        <div className="bg-pink-100/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col gap-3 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-200/30">
          <div className="text-3xl">🌷</div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">Made with love</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Every piece is thoughtfully designed with delicate details, soft
            fabrics, and that little touch of magic that makes you feel
            beautiful.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-100/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col gap-3 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-200/30">
          <div className="text-3xl">🌿</div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">Kind to the planet</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We use ethically sourced, responsibly made fabrics because looking
            pretty should feel good inside and out.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-pink-100/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col gap-3 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-200/30">
          <div className="text-3xl">💝</div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">For every babe</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            From XS to XL, our collections are crafted to celebrate every body
            and every kind of pretty. You belong here.
          </p>
        </div>
      </div>

      {/* Call to Action Banner Box */}
      <div className="flex flex-col items-center justify-center mt-12 w-full max-w-4xl px-6 py-12 bg-linear-to-b from-pink-300 to-pink-100 rounded-3xl gap-4 text-center shadow-lg mx-2">
        <div className="text-4xl">🎀</div>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Come bloom with us</h2>
        <p className="max-w-sm text-xs sm:text-sm text-gray-750 font-medium">
          Join thousands of darlings who dress like the main character every single day.
        </p>
        <Link href="/products">
          <button className="px-6 py-3 sm:py-4 bg-white mt-4 rounded-2xl text-pink-500 font-extrabold shadow-md hover:shadow-xl hover:bg-pink-50 transition-all cursor-pointer text-sm sm:text-base">
            Shop the Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;