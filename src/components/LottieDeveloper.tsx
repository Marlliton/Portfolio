import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/litties/developer.json";

interface LottieDeveloperProps {
  size: number;
}

export function LottieDeveloper(props: LottieDeveloperProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={props.size} width={props.size} />
    </div>
  );
}
