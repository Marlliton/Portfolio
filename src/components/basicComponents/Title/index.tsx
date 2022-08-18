import { useWindowSize } from "../../../hooks/useWindowSize";

interface TileProps {
  heading: "h1" | "h2" | "h3";
  children: any;
  className?: string;
  align?: "center" | "left" | "right";
}

export function Title(props: TileProps) {
  const { width } = useWindowSize();

  //   sm	640px	@media (min-width: 640px) { ... }
  // md	768px	@media (min-width: 768px) { ... }
  // lg	1024px	@media (min-width: 1024px) { ... }
  // xl	1280px	@media (min-width: 1280px) { ... }
  // 2xl	1536px

  const fontSize = {
    h1: width! <= 640 ? "text-3xl" : width! <= 768 ? "text-4xl" : "text-5xl",
    h2: width! <= 640 ? "text-2xl" : width! <= 768 ? "text-3xl" : "text-3xl",
    h3: width! <= 640 ? "text-2xl" : width! <= 768 ? "text-2xl" : "text-3xl",
  };
  return (
    <div
      className={`
       flex ${
         props.align === "right"
           ? "justify-end"
           : props.align === "left"
           ? "justify-start"
           : "justify-center"
       }
    `}
    >
      <props.heading
        className={`relative font-bold ${fontSize[props?.heading]} ${props?.className}`}
      >
        {props.children}
      </props.heading>
    </div>
  );
}
