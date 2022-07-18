import React, { useEffect, useRef } from "react";
import { TypeWriter } from "./Utils/TypeWriter";
export function Home() {
  return (
    <div className="h-full w-full flex items-center">
      <div className="flex justify-center flex-1">
        <h1 className="text-2xl">
          <TypeWriter text="Olá, eu sou" hideCursor delay={1200} /> <br />{" "}
          <span className="text-4xl">
            <TypeWriter text="Marlliton Souza" delay={2500} hideCursor />
          </span>{" "}
          <br />
          <TypeWriter text="Front-end developer" delay={4300} />
        </h1>
      </div>

      <div className="flex-1 hidden">alguma coisa aqui</div>
    </div>
  );
}
