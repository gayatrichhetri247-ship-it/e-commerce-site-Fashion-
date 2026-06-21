"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";
import PopupMessage from "./AddedSuccessfully";
import { useCart } from "@/app/context/CartContext";

const ProductCard = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md shadow-pink-200/40 hover:shadow-lg hover:shadow-pink-200/60 transition-all duration-300 flex flex-col group">
      
      {/* Product Image Frame Wrapper */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Information Payload Details */}
      <div className="p-3 sm:p-4 flex flex-col grow">
        {/* Category Label */}
        <p className="text-[10px] sm:text-xs font-bold text-pink-600 uppercase tracking-wider">
          {product.category}
        </p>

        {/* Product Title */}
        <h3 className="mt-1 text-sm sm:text-base font-bold text-gray-800 line-clamp-1 tracking-tight" title={product.title}>
          {product.title}
        </h3>

        {/* Ratings block metadata */}
        <div className="mt-1.5 flex items-center gap-1">
          <Star size={14} fill="#fcea5b" color="#fcea5b" className="shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400 font-medium">({product.review})</span>
        </div>

        {/* Pricing Stack */}
        <div className="mt-2.5 flex items-baseline gap-2 flex-wrap">
          <span className="text-base sm:text-lg font-extrabold text-amber-950">
            Rs. {product.price}
          </span>
          {product.originalprice && (
            <span className="text-xs sm:text-sm text-gray-400 line-through font-medium">
              Rs. {product.originalprice}
            </span>
          )}
        </div>

        {/* Button Wrapper - Pushed to bottom via margin-top-auto */}
        <div className="mt-auto pt-4">
          <button
            onClick={handleAddToCart}
            className="w-full rounded-xl bg-pink-600 hover:bg-pink-700 active:scale-[0.98] py-2.5 px-4 text-xs sm:text-sm font-bold text-white shadow-md shadow-pink-100 transition-all cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Notification Toast Trigger Popup */}
      <PopupMessage show={showPopup} message=" Added Cart Successfully! ♡" />
    </div>
  );
};

export default ProductCard;