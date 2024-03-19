import React from "react";
import {
  SiPrisma,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiGit,
  SiGithub,
  SiSocketdotio,
} from "react-icons/si";
import { Title } from "./title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const projects = [
  {
    title: "Learning Management System (Lms)",
    tech: [
      SiPrisma,
      SiNextdotjs,
      SiReact,
      SiTailwindcss,
      SiMongodb,
      SiGit,
      SiGithub,
    ],
    link: "https://lms-project-five.vercel.app",
    cover: "/lms.png",
    background: "bg-indigo-500",
    text: " text-white",
    description:
      "A website enabling users to upload their own courses, chapters, videos, and attachments, purchase courses from others via Stripe, and seamlessly track progress for each course.",
  },
  {
    title: "Stream-hub (Streaming website)",
    tech: [
      SiPrisma,
      SiNextdotjs,
      SiReact,
      SiTailwindcss,
      SiMongodb,
      SiGit,
      SiGithub,
    ],
    link: "https://stream-hub-mu.vercel.app/",
    cover: "/stream-hub.png",
    text: " text-white",
    background: "bg-green-500",
    description:
      "  A website facilitating real-time streaming via RTMP, establishing connections with OBS Studio for seamless integration, and providing live viewer count and live chat updates.",
  },
  {
    title: "Portfolio",
    tech: [SiNextdotjs, SiReact, SiTailwindcss, SiFramer],
    link: "https://lms-project-five.vercel.app",
    cover: "/portfolio.png",
    background: "bg-gray-500",
    text: " text-white",
    description:
      "Fast and responsive portfolio using framer motion and tailwindcss",
  },
  {
    title: "Guild-chat: Audio, Video, Servers, Channels & Invitations",
    tech: [
      SiPrisma,
      SiNextdotjs,
      SiReact,
      SiTailwindcss,
      SiMongodb,
      SiGit,
      SiGithub,
      SiSocketdotio,
    ],
    link: "https://lms-project-five.vercel.app",
    cover: "/guild-chat.png",
    text: " text-white",
    background: "bg-sky-500",
    description:
      "  Develop a real-time chat, audio, and video website with server creation capabilities, including the option to add channels and invite users",
  },
];
export const Projects = () => {
  return (
    <div className="mt-20 md:mt-24 lg:mt-40">
      <div className="flex justify-center -rotate-6">
        <Title label="Projects 💡" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 pt-20 gap-5">
        {projects.map((project) => (
          <Link key={project.title} href={project.link}>
            <div className={cn("p-2.5 rounded-md", project.background)}>
              <DirectionAwareHover imageUrl={project.cover}>
                <p className={cn("font-bold text-2xl", project.text)}>
                  {project.title}
                </p>
                <p className={cn("font-normal text-sm", project.text)}>
                  {project.description}
                </p>
                <div className="flex gap-x-2 mt-4">
                  {project.tech.map((Icon, index) => (
                    <Icon key={index} className=" size-8" />
                  ))}
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
