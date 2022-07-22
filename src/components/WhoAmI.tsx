import { useAnimationControls } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useElementVisible } from "../hooks/useElementVisible";

interface WhoAmIProps {
  scroll: (ref: any) => void;
}

export function WhoAmI(props: WhoAmIProps) {
  const inView = useElementVisible({ elementId: "who-am-i" });
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView) {
      console.log("visivel");
      controls.start({
        x: 0,
        transition: {},
      });
    } else {
      controls.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      id="who-am-i"
      className={`
        h-full w-full 
    `}
    >
      <p>Quem sou eu</p>
    </div>
  );
}
