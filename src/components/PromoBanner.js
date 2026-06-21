"use client";

import React from "react";
import Link from "next/link";
export default function PromoBanner() {
  return (
    <div className="w-full bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50">
    <div className="w-full max-w-7xl mx-auto px-6 py-8 ">
      {/* Main Card Container */}
      <div className="relative w-full bg-[#ff6392] rounded-[2.5rem] px-6 py-12 md:py-16 text-center flex flex-col items-center justify-center shadow-sm overflow-hidden">
        
        {/* Ribbon Bow Icon Container */}
        <div className="text-4xl md:text-5xl mb-4 animate-bounce duration-1000 ease-in-out select-none">
          🎀
        </div>

        {/* Primary Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
          20% off your first order
        </h2>

        {/* Subtitle Description */}
        <p className="text-white/90 text-xs sm:text-sm font-medium tracking-wide max-w-xl leading-relaxed mb-8 px-2">
          Join the Blush Club for exclusive drops, birthday treats and a sweet
          welcome gift. Use code <span className="font-bold text-white">BLOOM20</span> at checkout.
        </p>

        {/* CTA Call to Action Action Button */}
        <Link href='/products'><button 
          onClick={() => {
            // Optional: Add logic to copy coupon code or smooth scroll to products
            console.log("Treating yourself!");
          }}
          className="bg-white text-[#ff6392] font-semibold text-xs sm:text-sm tracking-wide px-8 py-3.5 rounded-full hover:bg-pink-50 transition-all duration-200 shadow-md shadow-pink-700/20 active:scale-95 cursor-pointer"
        >
          Treat Yourself
        </button>
        </Link>

      </div>
    </div>
    </div>
  );
}