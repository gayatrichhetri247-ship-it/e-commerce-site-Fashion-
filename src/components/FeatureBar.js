import React from 'react';

// Using standard Lucide icons as placeholders, but styled to match the vibe.
// If you want to use the exact custom pixel/emoji art, you can replace these with <img> tags.
import { Truck, Heart, Leaf } from 'lucide-react';

export default function FeaturesBar() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-orange-600 fill-orange-500" />,
      title: "Free Shipping",
      description: "On all orders over $75",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600 fill-red-500" />,
      title: "Sweet Returns",
      description: "Easy 3-day returns",
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600 fill-green-500" />,
      title: "Lovingly Made",
      description: "Ethically sourced fabrics",
    },
  ];

  return (
    <div className="w-full bg-[#FFF5F6] border-t border-b border-[#FFE5E9] py-8 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 p-8 gap-36 justify-items-center md:justify-items-start">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Soft rounded icon container */}
            <div className="flex items-center justify-center w-14 h-14 bg-[#FFF0F2] rounded-2xl shadow-sm border border-[#FFE0E4]/50 shrink-0">
              {feature.icon}
            </div>
            
            {/* Text content */}
            <div className="flex flex-col">
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A] tracking-wide leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-[#707070] font-sans mt-0.5">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}