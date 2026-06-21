"use client";

import { createContext, useContext, useEffect, useState } from "react";
import dresses from "../../data/dresses.json";
import tops from "../../data/tops.json";
import pants from "../../data/pants.json";
import skirts from "../../data/skirts.json";
import accessories from "../../data/accessories.json";

const ProductContext = createContext();

const buildDefaultProducts = () => {
  const datasets = {
    dresses,
    tops,
    pants,
    skirts,
    accessories,
  };

  return Object.entries(datasets).flatMap(([category, items]) =>
    items.map((item) => ({
      ...item,
      id: String(item.id),
      category: category.toLowerCase(),
    }))
  );
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(buildDefaultProducts);

  useEffect(() => {
    const defaultProducts = buildDefaultProducts();
    const saved = localStorage.getItem("products");

    if (!saved) {
      sync(defaultProducts);
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        const merged = new Map(
          defaultProducts.map((item) => [String(item.id), item])
        );

        parsed.forEach((item) => {
          if (!item || item.id == null) return;
          merged.set(String(item.id), {
            ...item,
            id: String(item.id),
            category: item.category?.toLowerCase() || "uncategorized",
          });
        });

        setProducts(Array.from(merged.values()));
      } else {
        setProducts(defaultProducts);
      }
    } catch (error) {
      console.warn("Failed to parse saved products:", error);
      setProducts(defaultProducts);
    }
  }, []);

  const sync = (data) => {
    localStorage.setItem("products", JSON.stringify(data));
  };

  const addProduct = (product) => {
    setProducts((prev) => {
      const newProduct = {
        ...product,
        id: String(product.id || crypto.randomUUID()),
        category: product.category?.toLowerCase() || "uncategorized",
      };

      const updated = [...prev, newProduct];
      sync(updated);
      return updated;
    });
  };

  const removeProduct = (id) => {
    setProducts((prev) => {
      const updated = prev.filter(
        (p) => String(p.id) !== String(id) // FIX: type-safe compare
      );

      sync(updated);
      return updated;
    });
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);