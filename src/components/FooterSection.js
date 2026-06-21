import React from "react";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100 px-6 sm:px-12 pt-14 pb-4">
      {/* Footer Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        
        {/* Brand / Logo Section */}
        <div className="flex flex-col gap-4">
          <img 
            src="/images/shoplogo.png" 
            alt="Logo" 
            className="h-auto w-40 object-contain" 
          />
          <p className="max-w-xs text-sm text-gray-700 leading-relaxed">
            Dreamy, feminine fashion made to make you feel like the main
            character. Twirl on, darling. ♡
          </p>
          <div className="text-xl tracking-wide select-none">🌷 &nbsp;🎀 &nbsp;💌 &nbsp;🦋</div>
        </div>

        {/* Shop Category Links */}
        <div className="flex gap-2 flex-col text-gray-700 text-sm">
          <h3 className="uppercase font-extrabold text-sm tracking-wider text-black mb-1">
            Shop
          </h3>
          <Link href="/products?category=dresses" className="hover:text-pink-600 transition-colors">Dresses</Link>
          <Link href="/products?category=tops" className="hover:text-pink-600 transition-colors">Tops</Link>
          <Link href="/products?category=skirts" className="hover:text-pink-600 transition-colors">Skirts</Link>
          <Link href="/products?category=accessories" className="hover:text-pink-600 transition-colors">Accessories</Link>
        </div>

        {/* Support & Admin Links */}
        <div className="flex gap-2 flex-col text-gray-700 text-sm">
          <h3 className="uppercase font-extrabold text-sm tracking-wider text-black mb-1">
            Sweet Help
          </h3>
          <Link href="/returns" className="hover:text-pink-600 transition-colors">Shipping & Returns</Link>
          <Link href="/size-guide" className="hover:text-pink-600 transition-colors">Size Guide</Link>
          <Link href="/track-order" className="hover:text-pink-600 transition-colors">Track My Order</Link>
          <Link href="/contact" className="hover:text-pink-600 transition-colors">Contact Us</Link>
          <Link href="/admin/adminlogin" className="mt-2 hover:text-pink-600 transition-colors font-medium">
            🛠️ Owner Dashboard
          </Link>
        </div>

        {/* Newsletter Section */}
        <div className="flex gap-2 flex-col text-gray-700 text-sm">
          <h3 className="uppercase font-extrabold text-sm tracking-wider text-black mb-1">
            Join the Club ♡
          </h3>
          <p className="max-w-xs">Get 20% off your first order and first dibs on new drops.</p>
          
          {/* Newsletter Input/Button */}
          <div className="flex items-center mt-2 max-w-sm">
            <input 
              type="email" 
              placeholder="Your@email.com" 
              className="w-full min-w-0 border-none px-4 py-2 text-sm rounded-l-2xl bg-white focus:outline-pink-300" 
            />
            <button className="px-4 py-2 bg-pink-400 hover:bg-pink-500 border border-pink-400 hover:border-pink-500 text-white font-extrabold rounded-r-2xl text-sm transition-colors shrink-0 cursor-pointer">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Legal Line */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 py-4 text-xs text-gray-700 border-t border-pink-200 text-center sm:text-left">
        <div>© 2026 Girlish Fashion Shop. Made with ♡.</div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <span>·</span>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <span>·</span>
          <Link href="/cookies" className="hover:underline">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;