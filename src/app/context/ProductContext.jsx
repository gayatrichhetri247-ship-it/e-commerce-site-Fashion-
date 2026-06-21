"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("products");

    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  const addProduct = (product) => {
    const updated = [...products, product];

    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const removeProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);

    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);