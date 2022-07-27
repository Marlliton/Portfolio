import { motion } from "framer-motion";
import React from "react";

interface ButtonLinkProps {
  variants?: any;
  duration?: number;
  hover?: string;
  url: string;
  buttonLabel: string;
  className?: string;
  small?: boolean;
}
export function ButtonLink(props: ButtonLinkProps) {
  return (
    <motion.button
      className={`
        text-lg bg-gradient-to-r from-violet-900/40 to-[#100f1d] rounded-md ring-2 ring-violet-900/25 
         transition-all ${props.small ? "" : "shadow-md shadow-violet-900/70"} 
         ${props.small ? "mb-2" : "my-6"} ${props?.className && props.className}
      `}
      variants={props.variants}
      transition={{ duration: props?.duration ?? 0.2 }}
      whileHover={{ scale: 1.025 }}
    >
      <a
        className={`flex items-center justify-center h-full w-full`}
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        {props.buttonLabel}
      </a>
    </motion.button>
  );
}
