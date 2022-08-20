import React from "react";
import NextImage from "next/image";

interface ImageProps {
  src: string | any;
  alt: string;
  size?: number;
  objectFit?: "contain" | "cover" | "fill";
  className?: string;
}

export function Image(props: ImageProps) {
  const size = `h-[${props?.size}px] w-[${props?.size}px]`;
  return (
    <div
      className={`
      overflow-hidden  
      ${props?.className} ${props?.size && size} 
    `}
    >
      <NextImage
        src={props.src}
        alt={props.alt}
        objectFit={props.objectFit ?? "none"}
      />
    </div>
  );
}
