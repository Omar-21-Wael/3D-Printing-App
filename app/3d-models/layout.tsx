import CategoriesNavbar from "@/app/components/CategoriesNavbar";
import type { RootLayoutProps } from "@/app/types";
import { JSX } from "react";
export default function ModuleLayout({
  children,
}: RootLayoutProps): JSX.Element {
  return <CategoriesNavbar>{children}</CategoriesNavbar>;
}
