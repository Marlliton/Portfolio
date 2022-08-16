import React, { ReactNode } from "react";

import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout(props: LayoutProps) {
  return (
    <div
      className={`
      flex items-center flex-col w-full px-5 gap-4 bg-dark text-white pt-20 scrollbar ${
        props?.className ?? ""
      }
  `}
    >
      <div className="lg:max-w-7xl w-full h-full">{props.children}</div>
    </div>
  );
}
