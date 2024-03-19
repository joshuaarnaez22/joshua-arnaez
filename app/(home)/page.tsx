import React from "react";
import Navbar from "./_components/navbar";
import { Hero } from "./_components/hero";
import { Skills } from "./_components/skills";
import { Projects } from "./_components/projects";
import { Footer } from "./_components/footer";

export default function RootPage() {
  return (
    <div className="overflow-hidden dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] relative">
      <div className=" max-w-7xl mx-auto p-10 ">
        <Navbar />
        <Hero />
      </div>
      <div>
        <div className="max-w-7xl mx-auto p-10 mt-20">
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
