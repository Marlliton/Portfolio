import React from "react";
import { Card } from "./Card";

export function Skills() {
  return (
    <div className="flex items-center justify-center flex-wrap h-full">
      <div
        className={`
          w-full h-[200px] sm:w-[350px] md:h-[220px] bg-[#080713] 
          rounded-3xl overflow-hidden
        `}
      >
        <Card
          title="React"
          description="O react é uma das tecnologias mais usadas atualmente, e eu estou buscando aprimorar."
        />
      </div>
    </div>
  );
}
