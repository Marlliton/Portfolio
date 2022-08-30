interface ButtonProps {
  className?: string;
  children?: any;
  text?: string;
  disable?: boolean;
}

export function Button(props: ButtonProps) {
  console.log(props.disable);
  return (
    <button
      className={`rounded-lg p-1 flex justify-center items-center focus:ring-blue focus:ring-2 group ${
        props?.className && props.className
      }`}
      disabled={props.disable}
    >
      {props?.children ?? null}
      {props?.text ?? null}
    </button>
  );
}
