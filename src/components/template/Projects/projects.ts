import todo from "/public/assets/todo.png";
import base from "/public/assets/base.png";
import emBreve from "/public/assets/em-breve.svg";

export const selectedProjects = [
  {
    name: "Conversor de Bases",
    urlProduction: "https://marlliton.github.io/base-converter/",
    repo: "https://github.com/Marlliton/base-converter",
    description: "Este é um projeto de conversão de bases numéricas.",
    isFinished: true,
    technologies: ["HTML", "CSS3", "JavaScript"],
    img: base,
  },

  {
    name: "To Do",
    repo: "https://github.com/Marlliton/to-do-list",
    description:
      "Aplicativo de tarefas, onde você pode fazer seu login e gerenciar o seu dia.",
    img: todo,
    isFinished: false,
    technologies: ["React", "SASS", "MongoDB", "NextJS", "typescript"],
  },
  {
    name: "Em Breve",
    img: emBreve,
    description:
      "Por enquanto é só, mas não se preocupe, teremos muitas novidades chegando em breve.",
    isFinished: false,
  },
];
