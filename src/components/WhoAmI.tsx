import { useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";
import { useElementVisible } from "../hooks/useElementVisible";

export function WhoAmI() {
  const inView = useElementVisible({ elementId: "who-am-i" });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
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
      id="who-am-i"
      className={`
        h-full w-full 
    `}
    >
      Quem sou eu
    </div>
  );
}
