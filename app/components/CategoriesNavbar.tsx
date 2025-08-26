import Cat from "@/app/data/categories.json";
import CatLink from "./catlink";
import { RootLayoutProps } from "@/app/types";
import { JSX } from "react";
export default function CategoriesNavbar({
  children,
}: RootLayoutProps): JSX.Element {
  return (
    <>
      <main className="flex flex-col md:flex-row capitalize md:py-10">
        <nav className="w-full md:w-fit overflow-x-auto md:overflow-x-visible relative ">
          <ul className="flex flex-row md:flex-col gap-4 md:p-10 p-5 whitespace-nowrap mr-2 text-lg shadow-sides">
            <li className="md:mx-2">
              <CatLink href="/3d-models">all</CatLink>
            </li>
            {Cat.map((lnk) => (
              <li key={lnk.slug} className="mx-2">
                <CatLink href={`/3d-models/categories/${lnk.slug}`}>
                  {lnk.displayName}
                </CatLink>
              </li>
            ))}
          </ul>
          <div className="fade md:hidden block"></div>
        </nav>
        {children}
      </main>
    </>
  );
}
