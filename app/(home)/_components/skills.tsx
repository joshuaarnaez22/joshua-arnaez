"use client";
import React, { useState } from "react";
import { Title } from "./title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiPrisma,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPlanetscale,
  SiMongodb,
  SiAmazonaws,
  SiServerless,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiSocketdotio,
} from "react-icons/si";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import { MovingBorderBtn } from "@/components/ui/moving-border";
const skills = [
  {
    title: "Prisma",
    description:
      "A powerful ORM (Object-Relational Mapping) that simplifies database access for Node.js and TypeScript applications.",
    link: "https://prisma.io",
    Icon: SiPrisma,
  },
  {
    title: "Next.js",
    description:
      "A React framework that enables server-side rendering, static site generation, and more for building modern web applications.",
    link: "https://nextjs.org",
    Icon: SiNextdotjs,
  },
  {
    title: "React",
    description:
      "A JavaScript library for building user interfaces, widely used for creating dynamic and interactive web applications.",
    link: "https://reactjs.org",
    Icon: SiReact,
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for quickly building custom designs with minimal CSS code.",
    link: "https://tailwindcss.com",
    Icon: SiTailwindcss,
  },
  {
    title: "PlanetScale",
    description:
      "A database company providing a serverless database platform built on top of Vitess, empowering developers to build scalable applications effortlessly.",
    link: "https://planetscale.com",
    Icon: SiPlanetscale,
  },
  {
    title: "MongoDB",
    description:
      "A leading NoSQL database program, using JSON-like documents with optional schemas, making data integration easier and faster.",
    link: "https://mongodb.com",
    Icon: SiMongodb,
  },
  {
    title: "AWS",
    description:
      "A comprehensive cloud computing platform provided by Amazon, offering a wide range of services for computing, storage, and more.",
    link: "https://aws.amazon.com",
    Icon: SiAmazonaws,
  },
  {
    title: "Serverless",
    description:
      "A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources.",
    link: "https://serverless.com",
    Icon: SiServerless,
  },
  {
    title: "HTML5",
    description:
      "The latest version of Hypertext Markup Language, used for structuring and presenting content on the World Wide Web.",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    Icon: SiHtml5,
  },
  {
    title: "CSS",
    description:
      "A stylesheet language used for describing the presentation of a document written in HTML, enhancing its visual appearance.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    Icon: SiCss3,
  },
  {
    title: "Socket.io",
    description:
      "A JavaScript library that enables real-time, bidirectional, and event-based communication between web clients and servers.",
    link: "https://socket.io/",
    Icon: SiSocketdotio,
  },

  {
    title: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    link: "https://nodejs.org",
    Icon: SiNodedotjs,
  },
  {
    title: "Express",
    description:
      "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    link: "https://expressjs.com",
    Icon: SiExpress,
  },
  {
    title: "Git",
    description:
      "A distributed version control system for tracking changes in source code during software development.",
    link: "https://git-scm.com/",
    Icon: SiGit,
  },
  {
    title: "GitHub",
    description:
      "A web-based platform for hosting and collaborating on Git repositories, enabling version control and team collaboration.",
    link: "https://github.com/",
    Icon: SiGithub,
  },
];
export const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const viewSkills = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="flex justify-center -rotate-6">
        <Title label="Skills </>" />
      </div>
      <div className=" max-w-5xl mx-auto px-8">
        <HoverEffect items={skills.slice(0, showAll ? skills.length : 6)} />
        <div className="text-center">
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="p-3 font-semibold hover:scale-95 transition-all"
            onClick={viewSkills}
          >
            {showAll ? (
              <div className="flex items-center gap-x-2 ">
                See less <LuArrowUp className=" animate-bounce size-4" />
              </div>
            ) : (
              <div className="flex items-center gap-x-2 ">
                See more
                <LuArrowDown className=" animate-bounce size-4" />
              </div>
            )}
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};
