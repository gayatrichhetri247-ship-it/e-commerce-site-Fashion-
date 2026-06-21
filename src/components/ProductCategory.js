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

  const filteredByCategory = useMemo(() => {
    if (category === "all") return allProducts;
    return allProducts.filter((p) => p.category === category);
  }, [category, allProducts]);

  const searched = useMemo(() => {
    return filteredByCategory.filter((p) =>
      (p.title || "").toLowerCase().includes(search.toLowerCase())
    );
  }, [search, filteredByCategory]);

  const sortedProducts = useMemo(() => {
    const arr = [...searched];

    switch (sort) {
      case "rating":
        return arr.sort(
          (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
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
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-2">
      
      {/* Controls Container */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 border-b border-pink-100/50 pb-4">
        
        {/* Category Filter Pills List */}
        <div className="flex gap-2 flex-wrap items-center justify-start overflow-x-auto no-scrollbar pb-1 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-2xl border text-xs sm:text-sm font-medium transition-all duration-200 capitalize cursor-pointer shrink-0 ${
                category === cat
                  ? "bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-200"
                  : "bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:text-pink-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Inputs (Search & Filter Dropdowns) */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Search Box Input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search pretty items..."
              className="w-full border border-gray-200 px-4 py-2 pl-10 rounded-2xl bg-white text-sm focus:outline-pink-400 text-gray-800 placeholder-gray-400 transition-colors"
            />
            {/* Embedded Search Magnifying Glass Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
            </svg>
          </div>

          {/* Sort Selection Box */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full sm:w-48 border border-gray-200 px-4 py-2 rounded-2xl bg-white text-sm focus:outline-pink-400 text-gray-700 cursor-pointer transition-colors"
          >
            <option value="feature">Featured</option>
            <option value="rating">Top Rated</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Meta Item Count Indicator */}
      <div className="text-xs sm:text-sm text-gray-500 font-medium pl-1">
        Showing <span className="text-pink-600 font-semibold">{sortedProducts.length}</span> beautiful products
      </div>

      {/* Dynamic Grid Layout Display Cards */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={`${product.category}-${product.id}`}
              product={product}
            />
          ))}
        </div>
      ) : (
        /* Empty Search/Filter Return View State */
        <div className="flex flex-col items-center justify-center py-20 text-center px-4 bg-white/50 backdrop-blur-sm rounded-3xl border border-dashed border-pink-200">
          <div className="text-4xl mb-2">🎀</div>
          <h3 className="text-lg font-bold text-gray-800">No darlings found</h3>
          <p className="text-sm text-gray-500 max-w-xs mt-1">We could not find matches for your selection. Try checking your keywords or filters!</p>
        </div>
      )}
    </div>
  );
};

export default ShopAll;