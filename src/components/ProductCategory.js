"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCrad";
import { useProducts } from "@/app/context/ProductContext";

const ShopAll = () => {
  const { products: customProducts } = useProducts();

  const searchParams = useSearchParams();
const categoryParam = searchParams.get("category");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("feature");
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    "dresses",
    "tops",
    "pants",
    "skirts",
    "accessories",
  ];

useEffect(() => {
  const queryCategory = categoryParam?.toLowerCase();

  if (queryCategory && categories.includes(queryCategory)) {
    setCategory(queryCategory);
  } else {
    setCategory("all");
  }
}, [categoryParam]);

  const allProducts = useMemo(() => {
    return customProducts.map((item) => ({
      ...item,
      title: item.title || item.name,
      category: item.category?.toLowerCase() || "uncategorized",
      rating: item.rating || 5,
      review: item.review || 0,
      id: String(item.id),
    }));
  }, [customProducts]);

  const filteredByCategory = useMemo(() => {
    if (category === "all") return allProducts;

    return allProducts.filter(
      (product) => product.category === category
    );
  }, [allProducts, category]);

  const searchedProducts = useMemo(() => {
    return filteredByCategory.filter((product) =>
      (product.title || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [filteredByCategory, search]);

  const sortedProducts = useMemo(() => {
    const getPrice = (price) =>
      Number(String(price || 0).replace(/,/g, ""));

    const products = [...searchedProducts];

    switch (sort) {
      case "rating":
        return products.sort(
          (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
        );

      case "low-high":
        return products.sort(
          (a, b) => getPrice(a.price) - getPrice(b.price)
        );

      case "high-low":
        return products.sort(
          (a, b) => getPrice(b.price) - getPrice(a.price)
        );

      case "newest":
        return products.sort(
          (a, b) => Number(b.id || 0) - Number(a.id || 0)
        );

      default:
        return products;
    }
  }, [searchedProducts, sort]);

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-2">
      {/* Controls */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 border-b border-pink-100/50 pb-4">
        {/* Categories */}
        <div className="flex gap-2 flex-wrap items-center overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-2xl border text-xs sm:text-sm font-medium capitalize transition-all cursor-pointer ${
                category === cat
                  ? "bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-200"
                  : "bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:text-pink-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 px-4 py-2 pl-10 rounded-2xl bg-white text-sm focus:outline-pink-400"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z"
              />
            </svg>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full sm:w-48 border border-gray-200 px-4 py-2 rounded-2xl bg-white text-sm cursor-pointer focus:outline-pink-400"
          >
            <option value="feature">Featured</option>
            <option value="rating">Top Rated</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Product Count */}
      <div className="text-xs sm:text-sm text-gray-500 font-medium">
        Showing{" "}
        <span className="text-pink-600 font-semibold">
          {sortedProducts.length}
        </span>{" "}
        products
      </div>

      {/* Product Grid */}
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
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white/50 rounded-3xl border border-dashed border-pink-200">
          <div className="text-4xl mb-2">🎀</div>

          <h3 className="text-lg font-bold text-gray-800">
            No products found
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Try a different search term or category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ShopAll;