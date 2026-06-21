import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import { Roboto, Playfair_Display } from "next/font/google";
import ProductCard from "@/components/ProductCrad";
import FooterSection from "@/components/FooterSection";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import ShopByMood from "@/components/ShopByMood";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={playfair.className}>
      <UserProvider>
       <CartProvider>
        <Header />
        {children}
           <ShopByMood/>
        <FooterSection/>
        </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;