import React, { ReactNode } from "react";

import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <div
      className={`
      flex items-center h-full flex-col w-full px-5 md:px-28 gap-4
  `}
    >
      
      {props.children}
    </div>
  );
}
