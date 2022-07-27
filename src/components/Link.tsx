import React from "react";

interface LinkProps {
  url: string;
  children: any;
  className?: string;
}

export function Link(props: LinkProps) {
  return (
    <span className={`relative max-w-max ${props?.className}`}>
      <a
        rel="noreferrer"
        className={`
            text-lg after:content-[""] after:inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-[#6710f217]  after:to-[#6610f2] after:transition-all duration-1000
          `}
        href={props.url}
        target="_blank"
      >
        {props.children}
      </a>
    </span>
  );
}
