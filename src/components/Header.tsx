import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../links";

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

  const renderLinks = (mobile = false) => {
    return (
      <>
        {links.map((link, i) => {
          return (
            <motion.li
              key={i}
              variants={item}
              transition={{ duration: 1 }}
              onClick={() => setShowModal(false)}
              className={`
                hover:bg-violet-900/20  rounded-lg cursor-pointer transition-colors ${
                  mobile && "text-2xl mb-4"
                }
              `}
            >
              <a href={link.url} className="block w-full h-full py-2 px-4">
                {link.label}
              </a>
            </motion.li>
          );
        })}
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
       border-b border-violet-900/30 w-full flex justify-center
    `}
    >
      <nav className="flex justify-between h-14 w-full px-4 lg:max-w-7xl items-center">
        <div>
          <motion.h1
            animate={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 1 }}
            className={`
              hover:bg-violet-900/20 rounded-lg transition-colors hover:scale-75
            `}
          >
            <a href="#home" className="block w-full h-full py-2 px-4">
              &lt;Marlliton Souza&bull;/&gt;
            </a>
          </motion.h1>
        </div>

        <div>
          {/* TODO refatorar esse menu para um componente */}
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
              {renderLinks(true)}
            </ul>
          )}
          <ul
            className={`
            hidden md:flex gap-3 items-center px-4
          `}
          >
            {renderLinks()}
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}
