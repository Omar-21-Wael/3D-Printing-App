"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavlinkProps } from "../types";
import { JSX } from "react";
export default function NavLink({ children, href }: NavlinkProps): JSX.Element {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative inline-block transition-colors duration-200 ${
        isActive ? "text-[#F77429]" : "text-[#606060]"
      } after:content-[''] after:absolute after:left-[-2px] after:-bottom-1 after:h-[3px] md:after:w-22 after:w-18 after:bg-[#F77429] after:origin-left after:rounded-full after:transition-transform after:duration-300 ${
        isActive ? "after:scale-x-100" : "after:scale-x-0"
      }`}
    >
      {children}
    </Link>
  );
}
