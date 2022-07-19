import { motion } from "framer-motion";
import { ButtonLink } from "./ButtonLink";
import { TypeWriter } from "./Utils/TypeWriter";

export function Home() {
  const rootAnimation = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonAnimation = {
    hover: { scale: 1.025 },
  };
  return (
    <div className="h-full w-full flex items-center md:justify-between">
      <div className="flex items-center flex-1 flex-col">
        <h1 className="text-2xl px-6 md:text-left md:w-full ">
          <TypeWriter text="Olá, eu sou" hideCursor delay={1200} /> <br />{" "}
          <span className="text-4xl">
            <TypeWriter text="Marlliton Souza" delay={2500} hideCursor />
          </span>{" "}
          <br />
          <TypeWriter text="Front-end developer" delay={4300} />
        </h1>

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

      <div
        className={`
        hidden md:flex flex-1
      `}
      >
        alguma coisa aqui
      </div>
    </div>
  );
}
