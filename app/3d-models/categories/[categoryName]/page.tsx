import { getModelsByCategory } from "@/app/lib/category";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/Images/MainImages/f8649aecfe8696cdf22db6f7ca522d3310b95d50.png";
import HeartAnimation from "@/app/components/LottieHeart";
import { ModelsByCategoryProps } from "@/app/types";
import { JSX } from "react";
export default async function CategoriesPage({ params,}: {params: Promise<Omit<ModelsByCategoryProps, "Models">>;}): Promise<JSX.Element> {
  const Par = await params;
  const { categoryName, Models } = getModelsByCategory(Par.categoryName);
  console.log(Par.categoryName);

  if (Models.length === 0)
    return (
      <h1 className=" text-2xl md:text-3xl md:self-start md:mx-10">
        {" "}
        No models found for this category.
      </h1>
    );
  return (
    <>
      <main className=" p-10 flex flex-col items-center gap-5">
        <h1 className=" text-2xl md:text-3xl  md:self-baseline md:mx-20  whitespace-nowrap  ">
          {" "}
          Models in &quot;{categoryName}&quot;
        </h1>
        <section className="md:flex md:flex-row flex-col items-center justify-center gap-6 flex-wrap">
          {Models.map((model) => (
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
