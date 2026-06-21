import React, { useMemo } from "react";
import ProductCard from "./ProductCrad";
import { useProducts } from "@/app/context/ProductContext";

const Productcards = () => {
  const { products } = useProducts();

  const allProducts = useMemo(
    () =>
      products.map((product) => ({
        ...product,
        id: String(product.id),
      })),
    [products]
  );

  return (
    <div className="grid grid-cols-4 gap-6">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Productcards;
