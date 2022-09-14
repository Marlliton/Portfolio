import { Image } from "../../basicComponents/Image";
import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";

interface ProjectImageProps {
  className?: string;
  src: string | any;
  alt: string
}

export function ProjectImage(props: ProjectImageProps) {
  return (
    <Image
      alt={props.alt}
      src={props.src}
      className={`
      flex rounded-md justify-center items-center max-w-[min(28rem,100%)] m-2 ${props.className}
      `}
      objectFit="fill"
    />
  );
}
