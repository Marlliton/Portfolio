import React from "react";

interface LinkProps {
  url: string;
  children: any;
  className?: string;
  onlyText?: boolean;
  external?: boolean;
}

export function Link(props: LinkProps) {
  return (
    <span className={`transition relative max-w-max ${props?.className}`}>
      {props.onlyText ? (
        <a
          rel={props.external ? "noreferrer" : ""}
          className={`
            text-lg hover:text-pastel-blue-light after:content-[""] after:inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-blue-dark  after:to-pastel-blue after:transition-all after:duration-300
          `}
          href={props.url}
          target={props.external ? "_blank" : "_self"}
        >
          {props.children}
        </a>
      ) : (
        <a
          rel={props.external ? "noreferrer" : ""}
          className={`
            
          `}
          href={props.url}
          target={props.external ? "_blank" : "_self"}
        >
          {props.children}
        </a>
      )}
    </span>
  );
}
