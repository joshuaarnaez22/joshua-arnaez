import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}
export default function Navbar({ className }: NavbarProps) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/joshua-arnaez-764b60143/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/joshuaarnaez22",
      label: "Github",
      icon: SiGithub,
    },
  ];
  return (
    <nav className={cn("flex justify-between items-center", className)}>
      <h1 className="text-2xl font-black underline underline-offset-8 decoration-green-500 -rotate-2">
        Joshua 👨‍💻
      </h1>
      <div className="flex items-center gap-x-3">
        {socials.map(({ link, label, icon: Icon }, index) => {
          return (
            <Link key={index} href={link} aria-label={label}>
              <Icon className="h-5 w-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
        <a href="mailto:joshuaaarnaez22@gmail.com">
          <SiGmail className="h-5 w-5 hover:scale-125 transition-all" />
        </a>
      </div>
    </nav>
  );
}
