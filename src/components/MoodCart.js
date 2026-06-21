import React from "react";
import Link from "next/link";
import Image from "next/image";

const MoodCard = ({ title, icon, image, link }) => {
  return (
    <Link 
      href={link}
      className="group relative block w-full h-95 sm:h-105 rounded-4xl overflow-hidden shadow-md shadow-pink-200/30 bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-pink-300/40 hover:-translate-y-1 cursor-pointer"
    >
      {/* Optimized Next.js Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={image} 
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div>
      
      {/* Dark Subtle Bottom Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Content Meta Information Box */}
      <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-1 text-left select-none z-10">
        <div className="text-xl sm:text-2xl drop-shadow-md mb-0.5">{icon}</div>
        <h3 className="font-serif text-2xl font-extrabold text-white tracking-wide">
          {title}
        </h3>
        <div className="text-xs text-pink-100 font-medium tracking-wide flex items-center gap-1 mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
          Shop now <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
};

export default MoodCard;