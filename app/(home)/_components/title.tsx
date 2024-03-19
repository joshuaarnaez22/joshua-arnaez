import React from "react";

interface TitleProps {
  label: string;
}
export const Title = ({ label }: TitleProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold group-hover:text-green-500 ">
        {label}
      </h1>
      <div className=" h-2 w-40 bg-green-500 rounded-lg" />
      <div className=" h-2 w-40 bg-indigo-500 rounded-lg translate-x-2" />
    </div>
  );
};
