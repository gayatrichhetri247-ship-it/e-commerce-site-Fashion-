"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import PopupMessage from "./AddedSuccessfully";
import { useCart } from "@/app/context/CartContext";

const ProductCard = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const normalizedProduct = {
      id: product.id || Date.now(),
      title: product.title || product.name || "Untitled",
      price: Number(product.price || 0),
      image: product.image || "/fallback.jpg",
      category: product.category || "uncategorized",
      rating: product.rating || 0,
      review: product.review || 0,
      qty: 1,
    };

    addToCart(normalizedProduct);

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  // Supports:
  // /images/product.jpg
  // https://images.unsplash.com/...
  // blob:http://localhost...
  // data:image/png;base64,...
  const isValidImage =
    typeof product?.image === "string" &&
    (
      product.image.startsWith("/") ||
      product.image.startsWith("blob:") ||
      product.image.startsWith("data:image") ||
      /^https?:\/\/.+/.test(product.image)
    );

  const safeImage = isValidImage
    ? product.image
    : "/fallback.jpg";

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md shadow-pink-200/40 hover:shadow-lg hover:shadow-pink-200/60 transition-all duration-300 flex flex-col group">

      {/* IMAGE */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
        <img
          src={safeImage}
          alt={product?.title || product?.name || "product"}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "/fallback.jpg";
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4 flex flex-col grow">

        <p className="text-[10px] sm:text-xs font-bold text-pink-600 uppercase tracking-wider">
          {product?.category || "uncategorized"}
        </p>

        <h3
          className="mt-1 text-sm sm:text-base font-bold text-gray-800 line-clamp-1"
          title={product?.title || product?.name}
        >
          {product?.title || product?.name || "Untitled"}
        </h3>

        <div className="mt-1.5 flex items-center gap-1">
          <Star
            size={14}
            fill="#fcea5b"
            color="#fcea5b"
          />
          <span className="text-xs sm:text-sm font-bold text-gray-700">
            {product?.rating || 0}
          </span>
          <span className="text-xs text-gray-400">
            ({product?.review || 0})
          </span>
        </div>

        <div className="mt-2.5 flex items-baseline gap-2 flex-wrap">
          <span className="text-base sm:text-lg font-extrabold text-amber-950">
            Rs. {product?.price || 0}
          </span>

          {product?.originalprice && (
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              Rs. {product.originalprice}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4">
          <button
            onClick={handleAddToCart}
            className="w-full rounded-xl bg-pink-600 hover:bg-pink-700 active:scale-[0.98] py-2.5 text-white font-bold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <PopupMessage
        show={showPopup}
        message="Added to cart successfully ♡"
      />
    </div>
  );
};

export default ProductCard;