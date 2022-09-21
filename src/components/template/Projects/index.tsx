import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";
import { ProjectContent } from "./ProjectContent";
import { selectedProjects } from "./projects";

import { ProductionTag } from "./ProductionTag";
import { useElementVisible } from "../../../hooks/useElementVisible";
import { Link } from "../../basicComponents/Link";

export function Projects() {
  const isVisible = useElementVisible({
    elementId: "projects",
    threshold: 0.3,
  });

  const renderProjects = () => {
    return selectedProjects.map(project => {
      return (
        <li
          className={`flex-1 bg-dark-light min-w-[340px] rounded-lg relative overflow-hidden opacity-0 ${
            isVisible
              ? "animate-fade-in-l-x opacity-100"
              : "animate-fade-in-l-x-reverse"
          }`}
          key={project.name}
        >
          {!project.isFinished && <ProductionTag />}
          <ProjectContent
            technologies={project.technologies}
            githubProjectLink={project.repo ?? undefined}
            productionLink={
              project.isFinished ? project.urlProduction : undefined
            }
            name={project.name}
            img={project.img}
          >
            <Paragraph className="text-base">{project.description}</Paragraph>
          </ProjectContent>
        </li>
      );
    });
  };

  return (
    <div id="projects" className="flex flex-col py-6">
      <Title
        heading="h3"
        reverse
        insetLine
        textStyle="whitespace-nowrap"
        className="md:px-[4rem] lg:px-[10rem]"
      >
        Coisas que construí
      </Title>
      <div className="w-full pt-14">
        <ul className="flex justify-center gap-2 flex-wrap">
          {renderProjects()}
        </ul>
      </div>
      <span className="flex justify-center py-5">
        <Link onlyText external className="text-pastel-blue-light" url="https://github.com/Marlliton">
          Visite meu GitHub para ver mais projetos
        </Link>
      </span>
    </div>
  );
}
