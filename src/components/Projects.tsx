import { Product } from "./Product";
import { Title } from "./Title";
export function Projects() {
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
  ];

  function renderProject() {
    return selectedProjects.map(project => {
      return (
        <Product
          description={project.description}
          img={project.img}
          isFinished={project.isFinished}
          name={project.name}
          url={project.url}
          repo={project.repo}
        />
      );
    });
  }

  return (
    <div
      className={`
      w-full h-full flex justify-center  relative
    `}
    >
      <Title>Projetos</Title>
      <ul className="">
        <li className="flex gap-4 flex-col md:flex-row lg:w-[90%]">{renderProject()}</li>
      </ul>
    </div>
  );
}
