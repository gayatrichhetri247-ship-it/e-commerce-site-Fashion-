import Image from "next/image";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg shadow-pink-200">
      
      <div className="relative h-80 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-pink-600 uppercase">
          {product.category}
        </p>

        <h3 className="mt-1 text-lg font-bold">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <Star size={14} fill="#fcea5b" color="#fcea5b" />
          <span className="text-sm font-semibold">
            {product.rating}
          </span>
          <span className="text-sm text-gray-500">
            ({product.review})
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold">
            Rs. {product.price}
          </span>

          <span className="text-sm text-gray-500 line-through">
            Rs. {product.originalprice}
          </span>
        </div>

        <button className="mt-4 w-full rounded-lg bg-pink-600 py-2 font-bold text-white hover:opacity-80">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;