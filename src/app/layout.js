import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import { Roboto, Playfair_Display } from "next/font/google";
import ProductCard from "@/components/ProductCrad";

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
        <Header />
        {/* <ProductCard/> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;