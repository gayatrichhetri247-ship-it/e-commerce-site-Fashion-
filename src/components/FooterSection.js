import React from "react";
import Link from "next/link"
const FooterSection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100 px-12 pt-14">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <img src="/images/shoplogo.png" alt="Logo" className="h-auto w-46 ml-[-16px] mt-[-30px] " />

          <div className="w-70 text-sm text-gray-700 mt-[-24px]">
            Dreamy, feminine fashion made to make you feel like the main
            character. Twirl on, darling. ♡
          </div>
          <div>🌷  🎀  💌  🦋</div>
        </div>
        <div className="flex gap-2 flex-col text-gray-700 text-sm">
          <div className="uppercase font-extrabold text-md tracking-wider text-black">Shop</div>
          <div>Dresses</div>
          <div>Tops</div>
          <div>Skirts</div>
          <div>Accessories</div>
        </div>
        <div className="flex gap-2 flex-col text-gray-700 text-sm">
          <div className="uppercase font-extrabold text-md tracking-wider text-black"> Sweet Help</div>
          <div>Shipping & Returns</div>
          <div>Size Guide</div>
          <div>Track My Order</div>
          <div>Contact Us</div>
          <Link href="/admin/adminlogin"><div>🛠️ Owner Dashboard</div></Link>
        </div>
        <div className="flex gap-2 flex-col text-gray-700 text-sm">
          <div className="uppercase font-extrabold text-md tracking-wider text-black">Join the Club ♡</div>
          <div className="w-74">Get 20% off your first order and first dibs on new drops.</div>
          <div className="mt-2">
            <input type="email" placeholder="Your@email.com" className="border-none px-4 py-2 rounded-l-2xl bg-white" />
            <button className=" px-2 py-2 bg-pink-400 border border-pink-400 text-white font-extrabold">Join</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12 py-4 text-xs text-gray-700 border-t border-pink-200">
        <div>© 2026 Girlish Fashion Shop. Made with ♡.</div>
        <div>Privacy · Terms · Cookies</div>
      </div>
    </div>
  );
};

export default FooterSection;
