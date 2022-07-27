import { useWindowSize } from "../hooks/useWindowSize";
import { Link } from "./Link";
import { Project } from "./Project";
import { Title } from "./Title";
export function Projects() {
  const { width } = useWindowSize();
  const selectedProjects = [
    {
      name: "Conversor de Bases",
      url: "https://marlliton.github.io/base-converter/",
      repo: "https://github.com/Marlliton/base-converter",
      img: "https://user-images.githubusercontent.com/67978032/134541701-3b6d3a48-fcee-47ab-a1e2-e5348c431cd6.gif",
      description: "Este é um projeto de conversão de bases numéricas.",
      isFinished: true,
    },

    {
      name: "To Do",
      url: undefined,
      repo: "https://github.com/Marlliton/to-do-list",
      img: "https://user-images.githubusercontent.com/67978032/160186369-140059ed-5dcb-4197-a374-095321c2e81e.png",
      description:
        "Aplicativo de tarefas, onde você pode fazer seu login e gerenciar o seu dia.",
      isFinished: false,
    },
    {
      name: "Em Breve",
      description:
        "Por enquanto é só, mas não se preocupe, teremos muitas novidades chegando em breve.",
      isFinished: false,
    },
  ];

  function renderProject() {
    return selectedProjects.map(project => {
      return (
        <li
          className={`${width! <= 855 ? "w-full" : "w-[400px]"}`}
          key={project.name}
        >
          <Project
            repo={project.repo}
            description={project.description}
            isFinished={project.isFinished}
            name={project.name}
            url={project.url}
          />
        </li>
      );
    });
  }

  return (
    <div
      className={`
      w-full h-full relative flex flex-col justify-around items-center
    `}
    >
      <h1 className="text-2xl whitespace-nowrap md:text-3xl font-bold ">
        Projetos
      </h1>
      <ul
        className={`
           flex gap-4 flex-wrap justify-center items-center content-start
        `}
      >
        {renderProject()}
      </ul>
      <Link url="https://github.com/Marlliton" className="text-violet-700 ">
        Confira também o meu GitHub
      </Link>
    </div>
  );
}
