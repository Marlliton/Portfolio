import React from "react";
import NextImage from "next/image";

interface ImageProps {
  src: string | any;
  alt: string;

  objectFit?: "contain" | "cover" | "fill";
  className?: string;
}

export function Image(props: ImageProps) {
  return (
    <div
      className={`
      overflow-hidden relative
      ${props?.className}  
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
