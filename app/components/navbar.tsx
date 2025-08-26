import { JSX } from "react";
import { RootLayoutProps } from "../types";
import NavLink from "./NavLink";

export default function Navbar({ children }: RootLayoutProps): JSX.Element {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 sticky max-w-[150rem]">
        <div className=" font-bold text-lg md:text-1xl">
          <NavLink href="/">LOGO</NavLink>
        </div>

        <nav>
          <ul className="flex flex-row items-center md:gap-10 gap-4 md:text-base text-sm font-semibold uppercase relative select-none ">
            <li className="p-2">
              <NavLink href="/3d-models">3d models</NavLink>
            </li>
            <li className="p-2">
              <NavLink href="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}
