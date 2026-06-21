"use client";

import { usePathname } from "next/navigation";
import ShopByMood from "./ShopByMood";

export default function ConditionalMoodSection() {
  const pathname = usePathname();

  if (pathname?.startsWith("/products")) {
    return null;
  }

  return <ShopByMood />;
}
