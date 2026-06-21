import React from "react";
import moodData from "@/data/mooddata.json"; // Adjust relative alias mapping to your direct paths
import MoodCard from "./MoodCart";

export default function ShopByMood() {
  return (
    <section className="w-full min-h-screen bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50 px-4 py-12 sm:py-16 md:py-20 flex flex-col items-center gap-10 sm:gap-14">
      
      {/* Header Block Section */}
      <div className="text-center flex flex-col gap-2.5">
        <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Shop by Mood
        </h2>
        <p className="text-sm sm:text-base text-gray-500 font-medium flex items-center justify-center gap-1.5">
          Find your flavor of pretty <span className="text-xs text-pink-400">✿</span>
        </p>
      </div>

      {/* Responsive Cards Grid Layout matching image config */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5 px-2 md:px-6">
        {moodData.map((mood) => (
          <MoodCard 
            key={mood.id}
            title={mood.title}
            image={mood.image}
            link={mood.link}
          />
        ))}
      </div>

    </section>
  );
}