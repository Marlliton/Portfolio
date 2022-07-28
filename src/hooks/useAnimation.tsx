import React from "react";
import { createContext, useEffect } from "react";
import { AnimationControls, useAnimationControls } from "framer-motion";
import { useElementVisible } from "./useElementVisible";

interface UseAnimationProps {
  elementId: string;
  threshold?: number;
}

export function useAnimation(props: UseAnimationProps) {
  const controls = useAnimationControls();
  const controlsReverse = useAnimationControls();

  const inView = useElementVisible({
    elementId: props.elementId,
    threshold: props?.threshold ?? undefined,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.25, mass: 0.8, delay: 0.2 },
      });
      controlsReverse.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.25, mass: 0.8, delay: 0.2 },
      });
    } else {
      controls.start({
        x: "-100vw",
      });
      controlsReverse.start({
        x: "100vw",
      });
    }
  }, [inView]);

  return { controls, controlsReverse };
}
