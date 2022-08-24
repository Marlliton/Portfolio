import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";
import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";
import baseConverter from "/public/assets/to-do.png";

export function Projects() {
  const renderProjects = () => {
    return (
      <li
        className={`
        flex justify-between relative
      `}
      >
        <ProjectImage src={baseConverter} className={`w-[60%]`} />
        <ProjectContent />
      </li>
    );
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
        <ul className="flex justify-center">{renderProjects()}</ul>
      </div>
    </div>
  );
}
