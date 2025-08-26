import Form from "next/form";
import HeroImage from "@/Images/MainImages/f8649aecfe8696cdf22db6f7ca522d3310b95d50.png";
import Image from "next/image";
import Link from "next/link";
import HeartAnimation from "../components/LottieHeart";
import { getfiltered } from "@/app/lib/model";
import { ModelsPageProps } from "@/app/types";
import { JSX } from "react";
export default async function ModelsPage({searchParams,}: {searchParams:Promise<ModelsPageProps> }): Promise<JSX.Element> {
    const resolvedParams = await searchParams;

  const search = resolvedParams.searchParams || "";
  console.log(search)
  const names = getfiltered(search);
  if (names.length===0){
    return (

      <div className=" w-full px-2">
         <Form
            action=""
            className="w-full md:w-1/2 relative bottom-15 md:bottom-0"
          >
            <input
              name="searchParams"
              type="search"
              placeholder="Search for a model"
              className="
          border-2
          border-neutral-600
          rounded-full
          max-w-3xl
          w-full
          py-2
          px-3
          focus:outline-none
          focus:ring-2
          focus:ring-orange-400
          focus:border-transparent
          focus:bg-neutral-100
          transition
          duration-200
          ease-in-out
        "
            />
          </Form>
      <h1 className="mx-auto font-bold text-xl">No result found for &quot;{search}&quot;</h1>

      </div>
    )
  }

  return (
    <>
      <main className=" p-10 flex flex-col items-center justify-center gap-5">
        <div className="w-full  md:px-25 flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-0">
          <Form
            action=""
            className="w-full md:w-1/2 relative bottom-15 md:bottom-0"
          >
            <input
              name="searchParams"
              type="search"
              placeholder="Search for a model"
              className="
          border-2
          border-neutral-600
          rounded-full
          max-w-3xl
          w-full
          py-2
          px-3
          focus:outline-none
          focus:ring-2
          focus:ring-orange-400
          focus:border-transparent
          focus:bg-neutral-100
          transition
          duration-200
          ease-in-out
        "
            />
          </Form>

          <h1 className="text-3xl  whitespace-nowrap">All Models</h1>
        </div>

        <section className="md:flex md:flex-row flex-col items-center justify-center gap-6 flex-wrap max-w-[100rem]">
          {names.map((model) => (
            <article
              className="flex flex-col items-baseline mx-12 md:mx-0  border-gray-600 border-1  max-w-[300px] md:max-w-[330px]  md:h-[550px] mb-8 rounded-2xl select-none md:select-auto relative pb-2"
              key={model.id}
            >
              <Link href={`/3d-models/${model.id}`}>
                {" "}
                <div className="mb-3">
                  {" "}
                  <Image
                    src={HeroImage}
                    alt="3D Model"
                    className=" md:w-full max-w-[300px] md:max-w-[400px] rounded-t-2xl pr-[1px]"
                  />{" "}
                </div>
              </Link>
              <div>
                <Link href={`/3d-models/${model.id}`}>
                  <div className="mx-4 flex flex-col items-start gap-4">
                    <h4 className="text-2xl  md:text-xl ">{model.name}</h4>
                    <p className="text-base text-neutral-500">
                      {model.description}
                    </p>
                    <span className="  transition-all duration-200 rounded-4xl hover:rounded-none hover:bg-neutral-200 hover:text-black  border-stone-500 border-2 p-1 px-2 text-sm mb-2 font-bold text-neutral-500 capitalize cursor-pointer select-none">
                      {model.category}
                    </span>
                  </div>
                </Link>

                <div className=" flex flex-row items-center mx-2  md:absolute md:bottom-1  ">
                  <HeartAnimation />
                  <span className=" text-neutral-500 font-medium">
                    {model.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
