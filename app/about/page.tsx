import HeroImage from "@/Images/MainImages/f8649aecfe8696cdf22db6f7ca522d3310b95d50.png";
import Layer from "@/Images/Icons/icons8-layers-24.png";
import Globe from "@/Images/Icons/icons8-globe-50.png";
import Flag from "@/Images/Icons/icons8-flag-50.png";
import Image from "next/image";
import { JSX } from "react";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <header className="flex flex-col justify-center p-1 mx-5 md:flex-row  md:items-center md:p-10 md:gap-25">
        <Image
          className="md:max-h-[600px] md:max-w-[650px]"
          src={HeroImage}
          alt="3D printing"
        />
        <div className="md:max-w-[400px] ">
          <span className=" text-zinc-500  font-medium text-xs md:text-sm  uppercase tracking-wide md:my-0 my-4">
            About printforge
          </span>
          <h1 className="font-bold text-4xl font-[var(--font-montserrat) md:my-5 ]">
            Empowering <br /> makers worldwide
          </h1>
          <p className="text-lg my-4 md:mr-5">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>

          <p className="text-lg my-4 md:mr-5">
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </header>
      <main className="flex flex-col justify-center p-1 mx-5 items-center ">
        <hr className="my-8 border-t border-gray-300 w-full" />
        <section className="my-5 md:flex md:px-46 md:gap-23  md:max-w-[1600px]">
          <div className="aboutlist">
            <div>
              <Image className="w-6 h-6" src={Layer} alt="layers" />
              <h4>100K+ Models</h4>
            </div>
            <p>
              Access our vast library of community-created 3D models, from
              practical tools to artistic creations.
            </p>
          </div>
          <div className="aboutlist">
            <div>
              <Image className="w-6 h-6" src={Globe} alt="globe--v1" />
              <h4>Active Community</h4>
            </div>
            <p>
              Join thousands of makers who share tips, provide feedback, and
              collaborate on projects.
            </p>
          </div>
          <div className="aboutlist ">
            <div>
              <Image className="w-6 h-6" src={Flag} alt="flag" />
              <h4>Free to Use</h4>
            </div>
            <p>
              Most models are free to download, with optional premium features
              for power users.
            </p>
          </div>
        </section>
        <hr className="my-8 border-t border-gray-300 w-full" />
        <section className="my-5 md:mx-46 md:px-20 md:max-w-[1600px]">
          <h2 className=" font-bold text-3xl  mb-4">Our vision</h2>
          <p className="text-lg ">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what&quot;s
            possible with 3D printing.
          </p>
          <hr className="my-4 w-[50%] mx-auto  text-center" />
          <p className="text-lg">
            Whether you&quot;re a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
        </section>
      </main>
    </>
  );
}
