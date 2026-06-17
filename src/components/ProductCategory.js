"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCrad";

import dresses from "../data/dresses.json";
import tops from "../data/tops.json";
import pants from "../data/pants.json";
import skirts from "../data/skirts.json";
import accessories from "../data/accessories.json";

const ShopAll = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("feature");
  const [category, setCategory] = useState("all");

  // FIX: isolate datasets properly (no cross contamination risk)
  const datasetMap = {
    dresses,
    tops,
    pants,
    skirts,
    accessories,
  };

  const allProducts = useMemo(() => {
    return Object.entries(datasetMap).flatMap(([cat, items]) =>
      items.map((item) => ({
        ...item,
        category: cat,
      }))
    );
  }, []);

  // STRICT CATEGORY FILTER
  const filteredByCategory = useMemo(() => {
    if (category === "all") return allProducts;
    return allProducts.filter((p) => p.category === category);
  }, [category, allProducts]);

  // SEARCH FILTER
  const searched = useMemo(() => {
    return filteredByCategory.filter((p) =>
      (p.title || "").toLowerCase().includes(search.toLowerCase())
    );
  }, [search, filteredByCategory]);

  // SORT (no mutation of original array)
  const sortedProducts = useMemo(() => {
    const arr = [...searched];

   switch (sort) {
  case "rating":
    return arr.sort(
      (a, b) =>
        Number(b.rating || 0) - Number(a.rating || 0)
    );

  case "low-high":
    return arr.sort(
      (a, b) =>
        Number((a.price || "0").replace(/,/g, "")) -
        Number((b.price || "0").replace(/,/g, ""))
    );

  case "high-low":
    return arr.sort(
      (a, b) =>
        Number((b.price || "0").replace(/,/g, "")) -
        Number((a.price || "0").replace(/,/g, ""))
    );

  case "newest":
    return arr.sort(
      (a, b) => Number(b.id || 0) - Number(a.id || 0)
    );

  default:
    return arr;
}
  }, [searched, sort]);

  const categories = [
    "all",
    "dresses",
    "tops",
    "pants",
    "skirts",
    "accessories",
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-2xl border ${
                category === cat
                  ? "bg-pink-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="border px-4 py-2 rounded-2xl bg-white"
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded-2xl bg-white"
          >
            <option value="feature">Featured</option>
            <option value="rating">Top Rated</option>
            <option value="low-high">Low → High</option>
            <option value="high-low">High → Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Count */}
      <div className="text-sm text-gray-500">
        Showing {sortedProducts.length} products
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={`${product.category}-${product.id}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopAll;