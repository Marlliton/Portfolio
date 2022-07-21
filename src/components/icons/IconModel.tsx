import React from "react";
import { IconProps } from "./IconProps";
interface ModelProps extends IconProps {
  path?: any;
  children: any;
}

export function Model(props: ModelProps) {
  const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: `${props?.size ?? 24}px`,
    height: `${props?.size ?? 24}px`,
    className: props.className,
    viewBox: "0 0 24 24",
  };

  const pathProps = {
    strokeWidth: props.strokeWidth ?? 2,
  };

  return (
    <svg {...svgProps}>
      {React.Children.map(props.children, child => {
        return React.cloneElement(props.children, {
          ...child.props,
          ...pathProps,
        });
      })}
    </svg>
  );
}

