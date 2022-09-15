import { ArrowSquareIn, GithubLogo } from "phosphor-react";
import { Link } from "../../basicComponents/Link";
import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";
import { ProjectImage } from "./ProjectImage";

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
      <Paragraph key={tec} className="italic text-xs">
        {tec}
      </Paragraph>
    ));
  }

  return (
    <div className="flex flex-col items-center pb-5">
      <ProjectImage alt={props.name!} src={props.img} className={`${props.name === "Em Breve" && "w-[250px]"}`} />
      <div
        className={`
        flex flex-col w-[min(500px,100%)] px-5
      `}
      >
        <header>
          <Paragraph className="text-white/70 mb-0 text-base">
            Projeto em Destaque
          </Paragraph>
          <Title heading="h3" textStyle="text-base">{props.name}</Title>
        </header>
        <main className="flex flex-col">{props.children}</main>
        <footer className="flex justify-end">
          <span className="flex gap-5 flex-1">
            {props?.technologies && renderTechnologies()}
          </span>
          <div className="flex gap-3">
            <Link
              external
              className="scale-125 hover:scale-150 text-pastel-blue"
              url={props.githubProjectLink!}
            >
              <GithubLogo />
            </Link>
            <Link
              external
              className="scale-125 hover:scale-150 text-pastel-blue"
              url={props.productionLink!}
            >
              <ArrowSquareIn />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
