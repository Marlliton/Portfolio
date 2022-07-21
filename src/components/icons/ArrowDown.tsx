import React from "react";
import { Model } from "./IconModel";
import { IconProps } from "./IconProps";

export function ArrowDown(props: IconProps) {
  return (
    <Model {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1-1.414 0l-6.586-6.586A1 1 0 0 1 5.414 12H9V9h6v3zm0-9H9m6 3H9"
      ></path>
    </Model>
  );
}
