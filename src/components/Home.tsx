import { motion } from "framer-motion";
import { ButtonLink } from "./ButtonLink";
import { TypeWriter } from "./Utils/TypeWriter";
import { LottieDeveloper } from "./LottieDeveloper";

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
        <h1 className="text-2xl md:text-4xl md:">
          <TypeWriter text="Olá, eu sou" hideCursor delay={1200} /> <br />{" "}
          <span className="text-5xl">
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
        hidden md:flex justify-center flex-1 pl-16
      `}
      >
        <LottieDeveloper size={600} />
      </div>
    </div>
  );
}
