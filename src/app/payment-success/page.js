"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!orderId) return;
    (async () => {
      try {
        const encodedId = encodeURIComponent(orderId);
        const res = await fetch(`/api/orders/${encodedId}`);
        const data = await res.json();
        if (data.ok) {
          setOrder(data.order);
          if (typeof window !== "undefined") {
            window.localStorage.setItem("lastOrderId", orderId);
          }
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [orderId]);

  // If the order exists and is pending, mark it as paid
  useEffect(() => {
    if (!orderId || !order) return;
    if (order.status === "paid") return;

    (async () => {
      try {
        const encodedId = encodeURIComponent(orderId);
        const patchResp = await fetch(`/api/orders/${encodedId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "paid", paymentStatus: "paid" }),
        });
        const patchData = await patchResp.json();
        if (patchData.ok) {
          setOrder(patchData.order);
        } else {
          console.error("Failed to mark order as paid:", patchData.error);
        }
      } catch (e) {
        console.error("Failed to update order status:", e);
      }
    })();
  }, [orderId, order]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50">
      <div className="max-w-xl w-full bg-white rounded-2xl p-8 shadow-md text-center">
        <h1 className="text-2xl font-bold mb-2">Payment Successful</h1>
        {orderId ? (
          <>
            <p className="mb-2">Thank you — your order has been placed.</p>
            <p className="font-mono bg-gray-100 inline-block px-3 py-1 rounded-md font-semibold">Order ID: {orderId}</p>
            {order && (
              <div className="mt-4 text-left">
                <p className="text-sm text-gray-600">Status: <span className="font-semibold">{order.status}</span></p>
                <p className="text-sm text-gray-600">Total: NPR {order.subtotal?.toLocaleString?.() ?? order.subtotal}</p>
                <p className="text-sm text-gray-600">Placed: {new Date(order.createdAt).toLocaleString()}</p>
              </div>
            )}
          </>
        ) : (
          <p>No order information was found.</p>
        )}
      </div>
    </div>
  );
}