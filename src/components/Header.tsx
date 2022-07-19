import React, { useState } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  setBlur: boolean;
}

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

  const showItems = (mobile = false) => {
    return (
      <>
        <motion.li
          variants={item}
          transition={{ duration: 1 }}
          className={`
                hover:bg-violet-900/20 py-2 px-4 rounded-lg cursor-pointer transition-colors ${mobile && 'text-2xl mb-4'}
              `}
        >
          Quem sou eu
        </motion.li>
        <motion.li
          variants={item}
          transition={{ duration: 1 }}
          className={`
                hover:bg-violet-900/20 py-2 px-4 rounded-lg cursor-pointer transition-colors ${mobile && 'text-2xl mb-4'}
              `}
        >
          Conhecimentos
        </motion.li>
        <motion.li
          variants={item}
          transition={{ duration: 1 }}
          className={`
                hover:bg-violet-900/20 py-2 px-4 rounded-lg cursor-pointer transition-colors ${mobile && 'text-2xl mb-4'}
              `}
        >
          Projetos
        </motion.li>
      </>
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      // transition={{ duration: 0.5 }}
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
            relative transition-all h-10 w-10 md:hidden z-10
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
          {showModal && (
            <ul
              className={`
              md:hidden absolute top-0 left-0 w-screen h-screen flex flex-col 
              justify-center items-center z-[8] bg-[#080713]/95
            `}
            >
              {showItems(true)}
            </ul>
          )}
          <ul
            className={`
            hidden md:flex gap-3 items-center px-4
          `}
          >
            {showItems()}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
