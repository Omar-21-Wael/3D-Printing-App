import HeroImage from "@/Images/MainImages/f8649aecfe8696cdf22db6f7ca522d3310b95d50.png";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
export default function Home(): JSX.Element {
  return (
    <>
      <main className="flex md:flex-row flex-col items-center  md:p-10  m-10 justify-center gap-20 md:gap-0">
        <div className="flex flex-col items-start max-w-[700px] gap-y-0     ">
          <span className="md:block hidden text-zinc-500  font-medium text-xs uppercase tracking-wide ">
            Your go-to platform for 3D printing files
          </span>
          <h1 className="font-bold  md:text-5xl text-4xl md:w-[80%] w-full mt-5">
            Discover what’s possible with 3D printing
          </h1>
          <p className=" font-normal md:text-xl text-lg md:w-[75%] w-full mt-5">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <Link
            className=" text-base mt-[64px] rounded-2xl bg-stone-100 py-3 md:px-10  px-5 uppercase font-bold items-stretch border-solid border-3 transition-all decoration-1   hover:rounded-none hover:bg-stone-300"
            href="/3d-models"
          >
            Browse models
          </Link>
        </div>

        <div className="relative max-w-[600px] ">
          <Image
            className=" rounded-full w-full h-full object-cover"
            src={HeroImage}
            alt="3D printing"
          />
          <div className="absolute top-1/2 left-1/2 w-[40%] h-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FAFAFA]" />

          <div className="absolute top-[15%] left-[-3%] w-[60%] h-[25%] rotate-45 bg-[#FAFAFA]" />

          <div className="absolute bottom-[10%] right-[-8%] w-[60%] h-[25%] rotate-45 bg-[#FAFAFA]" />
        </div>
      </main>
    </>
  );
}
