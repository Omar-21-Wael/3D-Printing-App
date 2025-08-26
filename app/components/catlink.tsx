"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavlinkProps } from "../types";
import { JSX } from "react";
export default function CatLink({ children, href }: NavlinkProps): JSX.Element {
  const pathname = usePathname();


  return (
    <Link
      href={href}
      className={` md:text-lg text-base   cursor-pointer ${
        pathname === href
          ? "text-[#F77429] md:border-l-3 md:pl-2 md:border-[#F77429]"
          : "text-neutral-500"
      }`}
    >
      {children}
    </Link>
  );
}
