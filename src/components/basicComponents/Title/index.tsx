import { useWindowSize } from "../../../hooks/useWindowSize";

interface TileProps {
  heading: "h1" | "h2" | "h3";
  children: any;
  className?: string;
  align?: "center" | "left" | "right";
  insetLine?: boolean;
}

export function Title(props: TileProps) {
  const { width } = useWindowSize();

  const fontSize = {
    h1: width! <= 640 ? "text-3xl" : width! <= 768 ? "text-4xl" : "text-5xl",
    h2: width! <= 640 ? "text-2xl" : width! <= 768 ? "text-3xl" : "text-3xl",
    h3: width! <= 640 ? "text-2xl" : width! <= 768 ? "text-2xl" : "text-3xl",
  };

  const renderLine = () => {
    return (
      <span
        className={`
        h-[1px] w-[60%] mr-5 bg-pastel-blue-light/20
      `}
      />
    );
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
       items-center
    `}
    >
      {props?.insetLine && renderLine()}
      <props.heading
        className={`relative font-bold  ${fontSize[props?.heading]} ${
          props?.className
        }`}
      >
        {props.children}
      </props.heading>
    </div>
  );
}
