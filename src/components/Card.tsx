import React from "react";
import { Title } from "./Title";

interface CardProps {
  title: string;
  description: string;
}

export function Card({ description, title }: CardProps) {
  return (
    <div
      className={`cursor-pointer 
      bg-[url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg")] 
      bg-no-repeat bg-center w-full h-full`}
    >
      <div
        className={`
          backdrop-blur-sm bg-black/70  w-full h-full p-4 group
          md:backdrop-blur-none md:bg-black/25 md:hover:backdrop-blur-[6px] md:hover:bg-black/70 transition-all  
      `}
      >
        <div
          className={`
            md:opacity-0 group-hover:opacity-100 transition-all duration-500
            flex flex-col justify-between items-center h-full
          `}
        >
          <h1 className="text-2xl font-bold whitespace-nowrap md:text-3xl">
            Projetos
          </h1>
          <div className="flex items-center flex-1">
            <p className="text-lg text-justify">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
