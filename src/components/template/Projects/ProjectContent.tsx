import { GithubLogo, ArrowSquareIn } from "phosphor-react";
import { Button } from "../../basicComponents/Button";
import { Link } from "../../basicComponents/Link";
import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";
import { ProjectImage } from "./ProjectImage";
import todo from "/public/assets/to-do.png";

interface ProjectContentProps {
  technologies?: string[];
  githubProjectLink?: string;
  productionLink?: string;
  children: any;
  name?: string;
  img?: any;
}

export function ProjectContent(props: ProjectContentProps) {
  function renderTechnologies() {
    return props.technologies?.map(tec => (
      <Paragraph key={tec} className="italic text-xs">{tec}</Paragraph>
    ));
  }

  return (
    <div className="max-w-sm bg-dark-light rounded-lg shadow-md">
      <ProjectImage src={props.img} />

      <div className="m-2 flex flex-1">
        <div className="flex flex-col flex-1">
          <Paragraph className="mb-3 text-base">Projeto em destaque</Paragraph>
          <Title heading="h3" textStyle="text-base" className="mb-3">
            {props.name}
          </Title>
          {props.children ?? false}
          <div className="flex gap-4">
            {props.technologies && renderTechnologies()}
          </div>
        </div>

        <div className="flex flex-col justify-end gap-3 pl-3 rounded-lg">
          <Link
            url={props.githubProjectLink ?? "#"}
            external
            className={`${
              !props.githubProjectLink
                ? "text-pastel-blue/30 hover:scale-100 pointer-events-none"
                : "text-pastel-blue hover:scale-110"
            }`}
          >
            <GithubLogo weight="regular" size={30} />
          </Link>

          <Link
            className={`${
              !props.productionLink
                ? "text-pastel-blue/30 hover:scale-100 pointer-events-none"
                : "text-pastel-blue hover:scale-110"
            }`}
            url={props.productionLink ?? "#"}
            external
          >
            <ArrowSquareIn weight="regular" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
