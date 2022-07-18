import React, { useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [showModal, setShowModal] = useState(false);

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      transition={{ duration: 0.5 }}
      className={`
       border-b border-violet-900/30 w-full
    `}
    >
      <div className="flex justify-between h-14 w-full px-4 lg:px-28 items-center">
        <div>
          <motion.h1
            animate={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 1 }}
            className={`
              hover:bg-violet-900/20 py-2 px-4 rounded-lg transition-colors hover:scale-75
            `}
          >
            Dev Marlliton
          </motion.h1>
        </div>

        <div>
          <button
            onClick={() => setShowModal(prevValue => !prevValue)}
            className={`
            relative  transition-all h-10 w-10
          `}
          >
            <span
              className={`
              absolute left-0  w-8 h-[3px] bg-violet-800/90 top-[10px] ${
                showModal && "rotate-45 translate-y-3"
              }
            `}
            ></span>
            <span
              className={`
              absolute left-0 top-5 w-8 h-[3px] bg-violet-800/90 ${
                showModal && "hidden"
              }
            `}
            ></span>
            <span
              className={`
              absolute left-0 w-8 h-[3px] bg-violet-800/90 top-[30px] ${
                showModal && "rotate-[-45deg] translate-y-[-.55rem]"
              }
            `}
            ></span>
          </button>
          <ul
            className={`
            hidden md:flex gap-3 items-center px-4
          `}
          >
            <motion.li
              variants={item}
              transition={{ duration: 1 }}
              className={`
                hover:bg-violet-900/20 py-2 px-4 rounded-lg cursor-pointer transition-colors
              `}
            >
              Quem sou eu
            </motion.li>
            <motion.li
              variants={item}
              transition={{ duration: 1 }}
              className={`
                hover:bg-violet-900/20 py-2 px-4 rounded-lg cursor-pointer transition-colors
              `}
            >
              Conhecimentos
            </motion.li>
            <motion.li
              variants={item}
              transition={{ duration: 1 }}
              className={`
                hover:bg-violet-900/20 py-2 px-4 rounded-lg cursor-pointer transition-colors
              `}
            >
              Projetos
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
