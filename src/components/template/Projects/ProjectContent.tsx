import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";

export function ProjectContent() {
  return (
      <div className="flex flex-col items-end justify-between">
        <div className="flex flex-col items-end">
          <Paragraph className="max-w-max">Projeto em Destaque</Paragraph>
          <Title heading="h3">To-do</Title>
        </div>
        <div className={`absolute w-[50%] top-[50%] translate-y-[-50%] bg-dark-light rounded-md p-3`}>
          <Paragraph className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            autem. Molestiae laboriosam nostrum vitae quaerat magni a deserunt,
            harum rerum eaque in,
          </Paragraph>
        </div>
        <div>tecnologias</div>
      </div>
  );
}
