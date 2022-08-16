import React from "react";
import { Image } from "../../basicComponents/Image";
import logo from "../../../../public/assets/logo-bold.png";
export function Logo() {
  return (
    <div
      className={`
        w-[100px]  
    `}
    >
      <Image alt="logo" src={logo} objectFit="contain"  />
    </div>
  );
}
