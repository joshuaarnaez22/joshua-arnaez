import React from "react";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import { Title } from "./title";

export const Hero = () => {
  return (
    <div className=" flex flex-col-reverse gap-14 lg:flex-row lg:gap-0 items-center justify-between mt-20">
      <div className=" space-y-10 text-center lg:text-start">
        <h1 className="  text-4xl lg:text-7xl font-bold">
          Nice to meet you!🖐 <br />{" "}
          <span className=" underline underline-offset-8 decoration-green-500 ">
            Im Joshua.
          </span>
        </h1>
        <p className="  md:w-96 text-lg text-muted-foreground font-medium">
          As a software engineer based in the Philippines, I showcase my passion
          for creating impactful digital solutions that elevate businesses and
          enhance user experiences, reflecting my commitment to excellence and
          innovation in every project.
        </p>
        <Link
          href={"mailto:joshuaaarnaez22@gmail.com"}
          className=" inline-block group "
        >
          <Title label="Contact me 📬" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500" />
            <div className="w-32 h-32 rounded-full bg-indigo-500" />
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500" />
            <div className="w-32 h-32 rounded-full bg-indigo-500" />
          </div>
          <div className="glow opacity-80 absolute top-[40%] right-1/2 -z-10" />
        </div>
        <div className=" absolute bottom-5 sm:bottom-14">
          <a
            href="https://utfs.io/f/9abfae01-3aa8-4c95-9dc6-a463df8b6715-wm00zk.pdf"
            target="_blank"
          >
            <MovingBorderBtn
              borderRadius="0.5rem"
              className="p-3 font-semibold"
            >
              <p>Available for work 📢 </p>
            </MovingBorderBtn>
          </a>
        </div>
      </div>
    </div>
  );
};
