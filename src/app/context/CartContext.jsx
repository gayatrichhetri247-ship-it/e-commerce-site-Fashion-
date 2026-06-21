"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
    }

    setMounted(true);
  }, []);

  // Save cart whenever cart changes
  useEffect(() => {
    if (!mounted) return;

    try {
      localStorage.setItem(
        "cart",
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cartItems, mounted]);

  const parsePrice = (price) => {
    if (price == null) return 0;
    const normalized = typeof price === "string" ? String(price).replace(/[^0-9.]/g, "") : String(price);
    return Number(normalized) || 0;
  };

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: (item.qty || 1) + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: product.qty || 1,
        },
      ];
    });
  };

  // Remove single product
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Update quantity
  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, qty),
            }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);

    try {
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  // Total items count
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.qty || 1),
    0
  );

  const getQuantity = (item) => item.qty ?? item.quantity ?? 1;

  // Total amount
  const cartTotal = cartItems.reduce((total, item) => {
    const price = parsePrice(item.price);
    return total + price * getQuantity(item);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}