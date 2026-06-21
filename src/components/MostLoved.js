"use client";

import dresses from "../data/dresses.json";
import tops from "../data/tops.json";
import pants from "../data/pants.json";
import skirts from "../data/skirts.json";
import accessories from "../data/accessories.json";

import ProductCard from "./ProductCrad";

const MostLoved = () => {
  const allProducts = [
    ...dresses.map((item) => ({ ...item, category: "dresses" })),
    ...tops.map((item) => ({ ...item, category: "tops" })),
    ...pants.map((item) => ({ ...item, category: "pants" })),
    ...skirts.map((item) => ({ ...item, category: "skirts" })),
    ...accessories.map((item) => ({ ...item, category: "accessories" })),
  ];

  const topRatedProducts = [...allProducts]
    .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
    .slice(0, 7);

  return (
    <section className="w-full px-14 py-12 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50">
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