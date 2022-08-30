import React from "react";

interface LinkProps {
  url: string;
  children: any;
  className?: string;
  onlyText?: boolean;
  external?: boolean;
  textStyle?: string;
  onClick?(): void;
}

export function Link(props: LinkProps) {
  return (
    <span
      onClick={() => props.onClick?.()}
      className={`transition relative block max-w-max ${
        props?.className && props.className
      }`}
    >
      {props.onlyText ? (
        <a
          rel={"noopener noreferrer"}
          className={`
            text-lg hover:text-pastel-blue-light after:content-[""] after:inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-blue-dark  after:to-pastel-blue after:transition-all after:duration-300 flex ${
              props?.textStyle
            }
          `}
          href={props.url}
          target={props.external ? "_blank" : "_self"}
        >
          {props.children}
        </a>
      ) : (
        <a
          rel={"noopener noreferrer"}
          href={props.url}
          target={props.external ? "_blank" : "_self"}
          className={`
            ${props?.textStyle && props.textStyle}
          `}
        >
          {props.children}
        </a>
      )}
    </span>
  );
}
