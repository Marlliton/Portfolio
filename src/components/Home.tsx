import { motion } from "framer-motion";
import { ButtonLink } from "./ButtonLink";
import { TypeWriter } from "./Utils/TypeWriter";
import { LottieDeveloper } from "./LottieDeveloper";
import { useWindowSize } from "../hooks/useWindowSize";

export function Home() {
  const { width, height } = useWindowSize();

  const rootAnimation = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonAnimation = {
    hover: { scale: 1.025 },
  };
  return (
    <div className="h-full w-full flex items-center justify-between md:justify-between">
      <div className="flex w-full items-center md:items-start flex-col">
        <div>
          <h1 className="text-3xl lg:text-4xl whitespace-nowrap">
            <TypeWriter text="Olá, eu sou" hideCursor delay={1200} /> <br />{" "}
            <span className="text-4xl md:text-5xl">
              <TypeWriter text="Marlliton Souza" delay={2500} hideCursor />
            </span>{" "}
            <br />
            <TypeWriter text="Front-end developer" delay={4300} />
          </h1>
        </div>

        <motion.div
          className={`
          flex gap-5
        `}
          initial="hidden"
          animate="visible"
          variants={rootAnimation}
          transition={{ duration: 1 }}
        >
          <ButtonLink
            variants={buttonAnimation}
            hover="hover"
            buttonLabel="LinkedIn"
            url="https://www.linkedin.com/in/marlliton/"
          />
          <ButtonLink
            variants={buttonAnimation}
            hover="hover"
            buttonLabel="GitHub"
            url="https://www.github.com/Marlliton/"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          x: [300, 0],
        }}
        className={`
        hidden md:flex justify-end max-w-[calc(100%/2)]
      `}
      >
        <div
          className={`${
            width! >= 1200
              ? "translate-x-48"
              : width! > 1000
              ? "translate-x-36"
              : "translate-x-28"
          } pointer-events-none`}
        >
          <LottieDeveloper
            size={width! <= 1000 ? 500 : width! <= 1200 ? 600 : 800}
          />
        </div>
      </motion.div>
    </div>
  );
}
