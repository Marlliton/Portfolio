import React from "react";

interface TitleProps {
  children: any;
}

export function Title({ children }: TitleProps) {
  return (
    <h1
      className={`
            text-2xl whitespace-nowrap md:text-3xl font-bold text-center absolute 
            top-[5%] md:top-[10%] right-[50%] translate-x-[50%]
          `}
    >
      {children}
    </h1>
  );
}
