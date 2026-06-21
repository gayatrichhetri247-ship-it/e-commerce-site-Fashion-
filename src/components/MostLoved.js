"use client";

import { useMemo } from "react";
import ProductCard from "./ProductCrad";
import { useProducts } from "@/app/context/ProductContext";

const MostLoved = () => {
  const { products } = useProducts();

  const topRatedProducts = useMemo(
    () =>
      [...products]
        .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
        .slice(0, 7),
    [products]
  );

  return (
    <section className="w-full px-14 py-12 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-950">
          Most Loved
        </h2>

        <p className="text-gray-500 mt-2">
          Our highest-rated customer favorites ♡
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topRatedProducts.map((product) => (
          <ProductCard
            key={`${product.category}-${product.id}`}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default MostLoved;