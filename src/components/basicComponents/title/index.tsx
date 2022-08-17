interface TileProps {
  heading: "h1" | "h2" | "h3";
  children: any;
  className?: string;
  align?: "center" | "left" | "right";
}
const fontSize = {
  h1: "text-4xl",
  h2: "text-2xl",
  h3: "text-xl",
};

export function Title(props: TileProps) {

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
        className={`font-bold ${fontSize[props?.heading]} ${props?.className}`}
      >
        {props.children}
      </props.heading>
    </div>
  );
}
