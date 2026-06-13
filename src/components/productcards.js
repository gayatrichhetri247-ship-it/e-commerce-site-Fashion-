import React from "react";
import ProductCard from "./ProductCrad";
import dresses from "../data/dresses.json";

const Productcards = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {dresses.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Productcards;
