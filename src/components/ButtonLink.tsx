import { motion } from "framer-motion";
import React from "react";

interface ButtonLinkProps {
  variants?: any;
  duration?: number;
  hover?: string;
  url: string;
  buttonLabel: string;
  color?: string; // classe da cor
}
export function ButtonLink(props: ButtonLinkProps) {
  return (
    <motion.button
      className={`
        text-lg h-12 w-32 sm:text-xl md:h-14 md:text-2xl md:w-48 lg:w-52
        bg-gradient-to-r from-violet-900/40 to-[#100f1d] rounded-md ring-2
        ring-violet-900/70 hover:transform hover:scale-110
        my-4 transition-all ${props?.color && props.color}
      `}
      variants={props.variants}
      transition={{ duration: props?.duration ?? 0.2 }}
      whileHover={props?.hover}
    >
      <a className="h-full w-full" href={props.url} target="_blank">
        {props.buttonLabel}
      </a>
    </motion.button>
  );
}
