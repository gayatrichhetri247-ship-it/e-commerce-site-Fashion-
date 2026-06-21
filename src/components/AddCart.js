"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

const AddCart = ({ setShowCart }) => {
  const { cartItems, removeFromCart, updateQty } = useCart();
  const router = useRouter();

  const getPrice = (price) =>
    Number(String(price || 0).replace(/,/g, ""));

  const formatNPR = (value) =>
    new Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
    }).format(value);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = getPrice(item.price);
    return acc + price * item.qty;
  }, 0);

  const handleCheckout = () => {
    setShowCart(false); // close cart modal
    router.push("/checkout"); // navigate to checkout page
  };

  return (
    // Replaced max-w-md with md:max-w-md to keep it fluid on small screens while preserving design on desktop
    <div className="w-full md:max-w-md h-full flex flex-col p-4">
      {/* Cart Items */}
      <div className="mt-4 flex flex-col gap-3 flex-1 overflow-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Cart is empty
          </p>
        ) : (
          cartItems.map((item) => {
            const price = getPrice(item.price);
            const total = price * item.qty;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-3 flex gap-3 shadow-sm"
              >
                {/* Product Image */}
                {/* shrink-0 keeps the thumbnail square shape from breaking on narrow screens */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                {/* min-w-0 stops child strings from causing the block to scale out of bounds */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2">
                    <h3 className="font-semibold text-sm truncate" title={item.title}>
                      {item.title}
                    </h3>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 shrink-0"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 truncate">
                    {item.category}
                  </p>

                  {/* flex-wrap ensures price elements drop down smoothly if product metadata gets crowded on small screen layers */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQty(
                            item.id,
                            Math.max(1, item.qty - 1)
                          )
                        }
                        className="w-6 h-6 rounded-full bg-pink-100 hover:bg-pink-200 text-center flex items-center justify-center cursor-pointer"
                      >
                        -
                      </button>

                      <span className="text-sm font-medium">
                        {item.qty}
                      </span>

                      <button
                        onClick={() =>
                          updateQty(item.id, item.qty + 1)
                        }
                        className="w-6 h-6 rounded-full bg-pink-100 hover:bg-pink-200 text-center flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <div className="ml-auto text-pink-600 font-semibold text-sm sm:text-base whitespace-nowrap">
                      {formatNPR(total)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="pt-4 border-t border-pink-100">
          <div className="flex justify-between mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold text-lg">
              {formatNPR(subtotal)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition cursor-pointer"
          >
            Checkout ♡
          </button>

          <p className="text-center text-xs text-gray-500 mt-2">
            or keep shopping
          </p>
        </div>
      )}
    </div>
  );
};

export default AddCart;