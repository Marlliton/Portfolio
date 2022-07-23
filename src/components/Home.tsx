import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useElementVisible } from "../hooks/useElementVisible";
import { useWindowSize } from "../hooks/useWindowSize";
import { ButtonLink } from "./ButtonLink";
import { ArrowDown } from "./icons/ArrowDown";
import { LottieDeveloper } from "./LottieDeveloper";
import { TypeWriter } from "./TypeWriter";

export function Home() {
  const { width } = useWindowSize();
  const isVisible = useElementVisible({ elementId: "home", threshold: 0.9 });
  const rootAnimation = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonAnimation = {
    hover: { scale: 1.025 },
  };

  return (
    <div
      id="home"
      className="h-full w-full flex items-center justify-between md:justify-between relative"
    >
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

      <motion.a
        href="#who-am-i"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{duration: 1, type: "spring"}}
        className={`
          absolute top-[88%] left-[50%] text-2xl translate-x-[-50%] 
          flex whitespace-nowrap ${!isVisible && 'pointer-events-none'} 
        `}
      >
        <p>Scroll Down</p>{" "}
        <ArrowDown
          className="animate-bounce rounded-full bg-violet-900/30 mt-[3px] ml-3 p-2"
          size={40}
        />
      </motion.a>
    </div>
  );
}
