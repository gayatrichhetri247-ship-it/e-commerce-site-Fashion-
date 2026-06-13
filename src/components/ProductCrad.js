import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg shadow-pink-200">
      {/* Product Image */}
      <div className="relative h-80 w-full">
        <Image
          src="/images/products/dress.jpg"
          alt="Polka Dots Dress"
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <p className="text-xs font-medium text-pink-600">DRESSES</p>

        <h3 className="mt-1 text-lg font-bold">
          Polka Dots Dress
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star
            size={14}
            fill="#fcea5b"
            color="#fcea5b"
          />
          <span className="text-sm font-semibold">4.9</span>
          <span className="text-sm text-gray-500">(163)</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            Rs. 1600
          </span>
          <span className="text-sm text-gray-500 line-through">
            Rs. 2100
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full rounded-lg bg-pink-600 py-2 text-white font-bold transition hover:opacity-80">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;