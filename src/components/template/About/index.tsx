import { useState } from "react";
import { useElementVisible } from "../../../hooks/useElementVisible";
import { Image } from "../../basicComponents/Image";
import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";
import img from "/public/assets/perfil-blue-light.png";

export function About() {
  const [hasAnimate, setHasAnimate] = useState<boolean>(false);
  const isVisible = useElementVisible({ elementId: "about", threshold: 0.4 });

  return (
    <div id="about" className={`py-6 gap-4 min-h-[35rem]`}>
      <div
        className={`opacity-0 ${
          isVisible ? "animate-fade-in-l-x" : "animate-fade-in-l-x-reverse"
        }`}
      >
        <Title textStyle="whitespace-nowrap" heading="h3" insetLine className="md:px-[4rem] lg:px-[10rem]">
          Quem sou eu
        </Title>
        <div
          className={`
          flex flex-col-reverse items-center gap-9 md:flex-row md:justify-center pt-4 md:pt-10
          `}
        >
          
          <div className="flex-1">
            <Paragraph>
              Olá, me chamo Marlliton e meu interesse por programação começou em
              2019, quando eu fui apresentado a um pequeno script em python 🐍,
              este somente imprimia um &#34;hello world&#34; no console. E desse pequeno
              script nasceu uma paixão. Comecei a estudar programação, entrei em
              uma faculdade e estou me formando em Análise e Desenvolvimento de
              Sistemas.
            </Paragraph>

            <Paragraph>
              Mas minha história não acaba aqui, tenho muito a vivenciar,
              aprender e ensinar. Estou ansioso para ver o que o futuro reservou
              para mim.
            </Paragraph>
          </div>
          <div className="flex justify-start h-full md:self-start">
            <Image
              className={`
                w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full
            `}
              objectFit="contain"
              src={img}
              alt="Foto de apresentação"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
