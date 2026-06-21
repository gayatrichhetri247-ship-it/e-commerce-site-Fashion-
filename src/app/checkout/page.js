"use client";

import Image from "next/image";
import Link from "next/link";
import ClientOnly from "@/components/ClientOnly";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const { user, isLoggedIn } = useUser();

  const [message, setMessage] = useState("");

  const getPrice = (price) => {
    return Number(price.toString().replace(/,/g, ""));
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + getPrice(item.price) * item.qty;
  }, 0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  useEffect(() => {
    if (!user) return;

    setFormData({
      fullName: user.name || "",
      email: user.email || "",
      address: user.address || "",
      city: user.city || "",
      zip: user.zip || "",
    });
  }, [user]);

  const handlePlaceOrder = async () => {
    setMessage("");
    let orderId;

    // Validation
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.zip.trim()
    ) {
      setMessage("Please fill all fields before placing the order.");
      return;
    }

    if (cartItems.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    try {
      // Create an order record on the server to get a unique Order ID
      const createResp = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            name: formData.fullName,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            zip: formData.zip,
          },
          items: cartItems,
          subtotal,
          note: "Order placed",
        }),
      });

      const createData = await createResp.json();
      if (!createData.ok) {
        setMessage("Failed to create order. Please try again.");
        return;
      }

      orderId = createData.orderId;

      // Mark order as paid and redirect to success page
      let paymentMarked = false;
      try {
        const encodedId = encodeURIComponent(orderId);
        const patchResp = await fetch(`/api/orders/${encodedId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "paid", paymentStatus: "paid" }),
        });
        const patchData = await patchResp.json();
        if (patchData.ok) {
          paymentMarked = true;
        }
      } catch (e) {
        console.error("Failed to mark order paid:", e);
      }

      // Clear cart after successful order
      clearCart();

      // Redirect to success page
      window.location.href = `/payment-success?orderId=${encodeURIComponent(orderId)}`;

      return;
    } catch (error) {
      console.error(error);
      setMessage("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {/* The login prompt depends on client-only state (localStorage). Render only on client to avoid SSR hydration mismatch. */}
      <ClientOnly>
        {!isLoggedIn && (
          <div className="mb-6 bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-xl">
            Please login first to auto-fill your shipping details.
            <Link
              href="/client/login"
              className="ml-2 text-pink-600 font-semibold underline"
            >
              Login
            </Link>
          </div>
        )}
      </ClientOnly>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SHIPPING FORM */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value,
                  })
                }
                className="w-full mt-1 p-3 border rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full mt-1 p-3 border rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Street Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value,
                  })
                }
                placeholder="123 Blossom Lane"
                className="w-full mt-1 p-3 border rounded-xl outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value,
                    })
                  }
                  placeholder="Kathmandu"
                  className="w-full mt-1 p-3 border rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium">ZIP</label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      zip: e.target.value,
                    })
                  }
                  placeholder="44600"
                  className="w-full mt-1 p-3 border rounded-xl outline-none"
                />
              </div>
            </div>

            {message && (
              <div
                className={`p-3 rounded-xl text-sm ${
                  message.includes("successful")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-semibold transition"
            >
              Place Order • NPR {subtotal.toLocaleString()}
            </button>
          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
          <h2 className="text-lg font-semibold mb-4">Your Order</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border-b pb-4"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-medium text-sm">{item.title}</p>

                  <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                </div>

                <p className="font-semibold">
                  NPR {(getPrice(item.price) * item.qty).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>NPR {subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>NPR {subtotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
