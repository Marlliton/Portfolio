interface ParagraphProps {
  children: any;
  className?: string
}

export function Paragraph(props: ParagraphProps) {
  return (
    <>
      <p className={`
        text-justify md:max-w-[38rem] mb-3 ${props?.className && props.className}
      `}>
        {props.children}
      </p>
    </>
  )
}