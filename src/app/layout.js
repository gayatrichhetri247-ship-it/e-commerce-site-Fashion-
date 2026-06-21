import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import ClientOnly from "@/components/ClientOnly";
import { Roboto, Playfair_Display } from "next/font/google";
import FooterSection from "@/components/FooterSection";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import HomeOnlySections from "@/components/HomeOnlySections";
import { ProductProvider } from "./context/ProductContext";

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
            <ProductProvider>
              <ClientOnly>
                <Header />
              </ClientOnly>
              {children}
              <ClientOnly>
                <HomeOnlySections />
              </ClientOnly>
              <FooterSection />
            </ProductProvider>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
