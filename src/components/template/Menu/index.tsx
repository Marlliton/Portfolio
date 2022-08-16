interface MenuProps {
  onClick?(): void;
  showModal: boolean;
}

export function Menu(props: MenuProps) {
  return (
    <div
      className={`
        flex md:hidden gap-4 items-center
      `}
    >
      <button
        className={`
          h-10 w-10 relative flex justify-end items-center ${
            props.showModal ? "rotate-90" : ""
          } transition-all duration-700
        `}
        onClick={() => props?.onClick?.()}
      >
        <span
          className={`
            absolute top-[7px] right-[0px] h-[3px] w-9 bg-white
            transition-all duration-700
            ${props.showModal ? "menu-before" : ""}

          `}
        />
        <span
          className={`
            h-[3px] w-7  bg-white block transition-all duration-700   
            ${props.showModal ? "menu" : ""}
          `}
        />
        <span
          className={`
            absolute bottom-[7px] right-0 h-[3px] w-5 bg-white
            transition-all duration-700
            ${props.showModal ? "menu-after" : ""}
          `}
        />
      </button>
    </div>
  );
}
