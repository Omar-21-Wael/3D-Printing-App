import Image from "next/image";
import HeroImage from "@/Images/MainImages/f8649aecfe8696cdf22db6f7ca522d3310b95d50.png";
import HeartAnimation from "@/app/components/LottieHeart";
import { getModelById } from "@/app/lib/model";
import { JSX } from "react";
export default async function ModelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> {
  const { id } = await params;
  const model = getModelById(Number(id));

  return (
    <>
      <main className="flex flex-col justify-center p-1 mx-5 md:flex-row  md:items-center md:px-6 md:gap-25">
        <Image
          className="md:h-full md:max-w-[750px]"
          src={HeroImage}
          alt="3D printing"
        />
        <div className="md:max-w-[400px] ">
          <div className=" flex flex-row items-center md:relative  md:right-2 my-2     ">
            <HeartAnimation />
            <span className=" text-neutral-500 font-medium">
              {model.likes}
            </span>
          </div>
          <div
            className="
                      flex flex-col items-start gap-4 select-none md:select-auto"
          >
            <h1 className="font-bold text-4xl font-[var(--font-montserrat)  ]">
              {model.name}
            </h1>
            <span className="  transition-all duration-200 rounded-4xl hover:rounded-none hover:bg-neutral-200 hover:text-black  border-stone-500 border-2 p-1 px-2 text-sm  font-bold text-neutral-500 capitalize cursor-pointer select-none">
              {model.category}
            </span>
            <p className="text-lg ">{model.description}</p>
            <p className=" absolute  md:relative  bottom-1 left-9 md:left-0 md:bottom-0 md:self-start md:top-6 text-neutral-500 font-medium">
              {model.dateAdded}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
