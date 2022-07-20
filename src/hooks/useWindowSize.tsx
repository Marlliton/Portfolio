import { useEffect } from "react";
import { useState } from "react";

interface useWindowSizeProps {
  width: number | undefined;
  height: number | undefined;
}

export function useWindowSize(): useWindowSizeProps {
  const [size, setSize] = useState<useWindowSizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
