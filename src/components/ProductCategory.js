"use client";

import Link from "next/link";
import ProductCard from "./ProductCrad";
import { usePathname } from "next/navigation";
import { useState } from "react";

import dresses from "../data/dresses.json";
import tops from "../data/tops.json";
import pants from "../data/pants.json"
import skirts from "../data/skirts.json"
import accessories from "../data/accessories.json"

const ShopAll = () => {
  const pathname = usePathname();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("feature");

  // Combine all products
  const allProducts = [...dresses, ...tops, ...pants, ...skirts, ...accessories];

  // Get category from URL
  const category = pathname.split("/")[2];

  // Category Filter
  let filteredProducts = allProducts;


  if (category) {
    filteredProducts = allProducts.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Search Filter
  filteredProducts = filteredProducts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  switch (sort) {
    case "low-high":
      filteredProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      break;

    case "high-low":
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.price - a.price
      );
      break;

    case "rating":
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.rating - a.rating
      );
      break;

    default:
      break;
  }

  return (
    <div className="flex flex-col gap-6 h-auto w-full">

      {/* TOP BAR */}
      <div className="flex justify-between items-center flex-wrap gap-4">

        {/* CATEGORY BUTTONS */}
        <div className="flex gap-3 flex-wrap text-sm">
          <Link href="/shopall" className="px-6 py-2 border rounded-2xl">
            All
          </Link>

          <Link
            href="/shopall/dresses"
            className="px-6 py-2 border rounded-2xl"
          >
            Dresses
          </Link>

          <Link
            href="/shopall/tops"
            className="px-6 py-2 border rounded-2xl"
          >
            Tops
          </Link>

          <Link
            href="/shopall/pants"
            className="px-6 py-2 border rounded-2xl"
          >
            Pants
          </Link>

          <Link
            href="/shopall/skirts"
            className="px-6 py-2 border rounded-2xl"
          >
            Skirts
          </Link>

          <Link
            href="/shopall/accessories"
            className="px-6 py-2 border rounded-2xl"
          >
            Accessories
          </Link>
        </div>

        {/* SEARCH + SORT */}
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-pink-200 px-4 py-2 rounded-2xl bg-white text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-pink-200 px-4 py-2 rounded-2xl bg-white text-black"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="feature">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopAll;