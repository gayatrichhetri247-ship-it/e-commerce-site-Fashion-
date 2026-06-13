"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LoginSignUpButton = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-pink-300 flex gap-4 rounded-2xl mt-4">
      <Link
        href="/client/login"
        className={`w-1/2 px-2 py-1 text-center rounded-3xl border font-bold ${
          pathname === "/client/login"
            ? "bg-pink-500 text-white border-none"
            : "bg-pink-300 text-pink-800 border-pink-600"
        }`}
      >
        Login
      </Link>

      <Link
        href="/client/register"
        className={`w-1/2 px-2 py-1 text-center rounded-3xl border font-bold ${
          pathname === "/client/register"
            ? "bg-pink-500 text-white border-none"
            : "bg-pink-300 text-pink-800 border-pink-600"
        }`}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default LoginSignUpButton;