import { useEffect, useState } from "react";
import { useElementVisible } from "../../../hooks/useElementVisible";
import { Image } from "../../basicComponents/Image";
import { Title } from "../../basicComponents/Title";
import img from "/public/assets/perfil-blue-light.png";

export function About() {
  const [hasAnimate, setHasAnimate] = useState<boolean>(false);
  const isVisible = useElementVisible({ elementId: "about", threshold: 0.4 });


  return (
    <div
      id="about"
      className={`py-6 gap-4 min-h-[35rem]`}
    >
      <div className={`opacity-0 ${isVisible ? 'animate-fade-in-l-x' : "animate-fade-in-l-x-reverse"}`}>
        <Title className="whitespace-nowrap" heading="h3" insetLine>
          Quem sou eu
        </Title>
        <div
          className={`
          flex flex-col-reverse items-center gap-9 md:flex-row md:justify-center pt-4 md:pt-10
        `}
        >
          <div className="flex-1">
            <p className="text-justify md:max-w-[38rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque qui
              ut magni perferendis! Officia rerum maiores quidem autem quis
              ratione quibusdam accusamus. Ab ipsum reiciendis corporis voluptas
              tempore deleniti atque.
            </p>
          </div>
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
  );
}
