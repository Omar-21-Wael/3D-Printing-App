import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Navbar from "@/app/components/navbar";
import type { RootLayoutProps } from "@/app/types";
import { JSX } from "react";
const AlbertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-albert",
});
const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${AlbertSans.className}`}>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
