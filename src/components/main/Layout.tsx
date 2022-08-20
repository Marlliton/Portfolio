import { ReactNode } from "react";

import { Header } from "../template/Header";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout(props: LayoutProps) {
  return (
    <div
      className={`
      flex flex-1 items-center flex-col w-full px-5 gap-4 bg-dark text-white pt-20 relative ${
        props?.className ?? ""
      }
  `}
    >
      <Header />
      <div className="lg:max-w-6xl w-full h-full text-xl">{props.children}</div>
    </div>
  );
}
