import React, { useState } from "react";
import { Link } from "../../basicComponents/Link";
import { Logo } from "../Logo";
import { Menu } from "../Menu";

export function Header() {
  const [showModal, setShowModal] = useState<true | false>(false);
  const navLinks = [
    {
      label: "Quem sou eu",
      url: "#who-am-i",
    },
    {
      label: "Projetos",
      url: "#projects",
    },
    {
      label: "Conhecimentos",
      url: "#knowledge",
    },
  ];

  const renderNavLinks = () => {
    return navLinks.map((link, i) => {
      return (
        <Link key={i} url={link.url} onlyText>
          {link.label}
        </Link>
      );
    });
  };

  const handleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div
      className={`
      flex w-full h-20 fixed top-0 justify-center items-center px-5
      text-white
  `}
    >
      <div className="flex justify-between w-full lg:max-w-7xl">
        <Link url="#home">
          <Logo />
        </Link>

        <div className="flex items-center">
          <div
            className={`
            hidden md:flex gap-4 items-center
          `}
          >
            {renderNavLinks()}
          </div>

          <Menu onClick={handleModal} showModal={showModal} />
        </div>
      </div>
    </div>
  );
}
