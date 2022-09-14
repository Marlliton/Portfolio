interface ModalProps {
  children: any;
  showModal: boolean
}

export function Modal(props: ModalProps) {
  return (
    <div className="bg-dark md:hidden">
      <div
        className={`absolute w-[20rem]  top-20 h-screen z-10 backdrop-blur-3xl ${
          props.showModal ? "animate-fade-in-r-x right-0" : "animate-fade-in-r-x-reverse"
        }`}
      >
        <div className={`flex flex-col h-full items-center justify-center gap-7`}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
