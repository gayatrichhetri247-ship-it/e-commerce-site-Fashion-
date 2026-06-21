import React from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen lg:h-screen px-6 sm:px-10 lg:px-14 py-10 gap-12 lg:gap-20 xl:gap-28 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-100">
      
      {/* Left Content Column */}
      <div className="flex gap-4 flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 order-2 lg:order-1">
        {/* Collection Tag */}
        <div className="px-6 h-10 rounded-3xl text-lg bg-white w-fit flex gap-4 items-center border border-pink-200 shadow-sm">
          <Image
            src="/images/home-page/tulip.png"
            alt="Tulip"
            width={5}
            height={5}
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">New Spring Collection</span>
        </div>

        {/* Headings */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-amber-950 tracking-tight">
            Bloom into
          </span>
          <span className="text-pink-500 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold capitalize tracking-tight">
            your softest era
          </span>
        </div>

        {/* Description */}
        <div className="text-sm sm:text-md max-w-sm sm:max-w-md text-gray-500 leading-relaxed balance-text">
          Dreamy dresses, cloud-soft knits and twirly skirts in every shade of
          pretty. Dress like the main character, darling. ♡
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 w-full sm:w-auto">
          <Link href="/products" className="w-full sm:w-60">
            <div className="text-center cursor-pointer py-3.5 text-md sm:text-lg bg-pink-600 text-white rounded-3xl font-bold shadow-md hover:bg-pink-700 transition-colors">
              Shop Now
            </div>
          </Link>
          <Link href="/products" className="w-full sm:w-60">
            <div className="text-center cursor-pointer py-3.5 text-md sm:text-lg bg-white text-pink-600 border border-pink-600 rounded-3xl font-bold hover:bg-pink-50 transition-colors">
              Explore Dresses
            </div>
          </Link>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="relative order-1 lg:order-2 max-w-xs sm:max-w-md lg:max-w-none">
        <img
          src="/images/home-page/home-girl-image.jpg"
          alt="Image of a girl in a spring dress"
         
          className="w-full lg:w-100 xl:w-112.5 h-auto border-4 sm:border-8 border-white rounded-2xl shadow-xl"
        />
        
        {/* Promotional Sale Badge */}
        <div className="absolute -top-4 -right-4 sm:-right-8 rotate-12 flex flex-col items-start bg-pink-600 w-fit py-2 px-4 sm:px-6 text-white font-bold text-xs sm:text-sm rounded-3xl sm:rounded-4xl shadow-lg">
          <span>20% Off</span>
          <span className="whitespace-nowrap">End of Season Sale</span>
        </div>
      </div>
      

    </div>
  );
};

export default Page;