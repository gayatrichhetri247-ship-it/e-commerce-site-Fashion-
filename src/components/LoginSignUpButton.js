"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LoginSignUpButton = () => {
  const pathname = usePathname();

  return (
    // Added p-1 to give the inner links breathing room inside the container on smaller screens
    <div className="w-full bg-pink-300 flex gap-2 sm:gap-4 rounded-2xl mt-4 p-1">
      <Link
        href="/client/login"
        className={`w-1/2 px-2 py-1.5 sm:py-1 text-center rounded-3xl border font-bold text-sm sm:text-base transition-all ${
          pathname === "/client/login"
            ? "bg-pink-500 text-white border-none"
            : "bg-pink-200 text-pink-800 border-pink-600"
        }`}
      >
        Login
      </Link>

      <Link
        href="/client/register"
        className={`w-1/2 px-2 py-1.5 sm:py-1 text-center rounded-3xl border font-bold text-sm sm:text-base transition-all ${
          pathname === "/client/register"
            ? "bg-pink-500 text-white border-none"
            : "bg-pink-200 text-pink-800 border-pink-600"
        }`}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default LoginSignUpButton;