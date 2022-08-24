import { Image } from "../../basicComponents/Image";
import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";

interface ProjectImageProps {
  className?: string;
  src: string | any;
}

export function ProjectImage(props: ProjectImageProps) {
  return (
    <Image
      alt="conversor de bases"
      src={props.src}
      className={`
        rounded-md backdrop-opacity-60 ${props.className}
      `}
      objectFit="fill"
    />
  );
}
