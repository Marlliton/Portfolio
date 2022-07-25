import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import fotoPerfil from "../../public/assets/perfil.png";
import { useElementVisible } from "../hooks/useElementVisible";
import { useWindowSize } from "../hooks/useWindowSize";
import {Title} from "./Title"

export function WhoAmI() {
  const inView = useElementVisible({ elementId: "who-am-i", threshold: 0.3 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      console.log("visivel");
      controls.start({
        x: 0,
        transition: { type: "spring", bounce: 0.25, mass: 0.8, delay: 0.2 },
      });
    } else {
      controls.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div
      id="who-am-i"
      className={`
        h-full w-full flex flex-col text-base items-center justify-center relative 
    `}
    >
      
      <Title>
        Quem sou eu
      </Title>
      <motion.div
        animate={controls}
        className={`
          flex flex-col md:flex-row
        `}
      >
        <section className="pb-10 flex justify-center md:justify-start md:items-center md:pb-0 flex-1">
          <div
            className={`rounded-full w-[150px] h-[150px] md:w-[300px] md:h-[300px] overflow-hidden`}
          >
            <Image src={fotoPerfil} />
          </div>
        </section>

        <section
          className={`
            w-full md:text-xl flex flex-col gap-4 justify-center items-center text-justify
          `}
        >
          <span className="ml-2 w-full md:pl-10 lg:w-[80%]">
            <p className="pb-3">
              Oi, me chamo Marlliton, sou estudante de Análise e Desenvolvimento
              de Sistemas, com uma certa aptidão para o desenvolvimento web.
            </p>
            <p>
              Gosto muito de desenvolver interface animadas e responsivas, que
              proporcionam a melhor experiência possível para os usuários.
            </p>
          </span>
        </section>
      </motion.div>
    </div>
  );
}
