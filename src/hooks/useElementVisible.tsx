import { useEffect, useState } from "react";

interface useElementVisibleProps {
  elementId: string;
  threshold?: number; // 0 ou 1 -> exemplo [0.3, 0, 1, 0.8, ...]
}

export function useElementVisible({
  elementId,
  threshold,
}: useElementVisibleProps) {
  const [inView, setInView] = useState<boolean>(false);
  useEffect(() => {
    const element = document.getElementById(elementId);

    const callback = (entries: any, observer: any) => {
      if (entries.some((entry: any) => entry.isIntersecting)) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    const intersectionObserver = new IntersectionObserver(callback, {
      threshold: threshold ?? 0.2,
    });
    intersectionObserver.observe(element!);

    return () => intersectionObserver.disconnect();
  }, []);

  return inView;
}
