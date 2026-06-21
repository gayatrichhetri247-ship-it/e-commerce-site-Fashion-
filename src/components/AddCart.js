"use client";

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
    const qty = item.qty || item.quantity || 1;
    return acc + price * qty;
  }, 0);

  const handleCheckout = () => {
    setShowCart(false);
    router.push("/checkout");
  };

  return (
    <div className="w-full md:max-w-md h-full flex flex-col p-4">
      {/* CART ITEMS */}
      <div className="mt-4 flex flex-col gap-3 flex-1 overflow-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Cart is empty
          </p>
        ) : (
          cartItems.map((item) => {
            const price = getPrice(item.price);
            const qty = item.qty || item.quantity || 1;
            const total = price * qty;

          const isValidImage =
  typeof item.image === "string" &&
  (
    item.image.startsWith("/") ||
    item.image.startsWith("blob:") ||
    item.image.startsWith("data:image") ||
    /^https?:\/\/.+/.test(item.image)
  );

const safeImage = isValidImage
  ? item.image
  : "/fallback.jpg";

            return (
              <div
                key={item.id || item.title}
                className="bg-white rounded-2xl p-3 flex gap-3 shadow-sm"
              >
                {/* IMAGE */}
               <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
  <img
    src={safeImage}
    alt={item.title || "product"}
    className="w-full h-full object-cover"
    onError={(e) => {
      e.currentTarget.src = "/fallback.jpg";
    }}
  />
</div>

                {/* DETAILS */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2">
                    <h3
                      className="font-semibold text-sm truncate"
                      title={item.title}
                    >
                      {item.title || "Untitled"}
                    </h3>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 shrink-0"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 truncate">
                    {item.category || "uncategorized"}
                  </p>

                  {/* QUANTITY + PRICE */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQty(item.id, Math.max(1, qty - 1))
                        }
                        className="w-6 h-6 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center"
                      >
                        -
                      </button>

                      <span className="text-sm font-medium">
                        {qty}
                      </span>

                      <button
                        onClick={() =>
                          updateQty(item.id, qty + 1)
                        }
                        className="w-6 h-6 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center"
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

      {/* FOOTER */}
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
            className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition"
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