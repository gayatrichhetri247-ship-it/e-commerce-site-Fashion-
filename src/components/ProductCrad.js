import React from "react";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="p-10 relative">
      <div>
        <img
          src="/images/products/dress.jpg"
          alt="Dress"
          className="h-66 w-auto rounded-2xl"
        />
      </div>
      <div className="absolute bottom-12 left-14 text-white ">
        <h1 className="text-lg font-bold">Dresses</h1>
        <Link href="/products/dress">
          <div className="flex items-center gap-0 ">
            <p className="text-xs ">Shop Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 mt-1"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg></div>
          
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
