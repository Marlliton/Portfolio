import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Link } from "../../basicComponents/Link";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Modal } from "../Modal";

export function Header() {
  const [showModal, setShowModal] = useState<true | false>(false);
  const [showHeader, setShowHeader] = useState<true | false>(true);
  const { width } = useWindowSize();

  const navLinks = [
    {
      label: "Quem sou eu",
      url: "#about",
    },
    {
      label: "Projetos",
      url: "#projects",
    },
    {
      label: "Conecte-se",
      url: "#connect",
    },
  ];

  useEffect(() => {
    if (width! >= 768) setShowModal(false);
  }, [width]);

  useEffect(() => {
    let prevScroll = window.pageYOffset;
    window.onscroll = function () {
      let currentScroll = window.pageYOffset;
      if (prevScroll < currentScroll) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      prevScroll = currentScroll;
    };
  }, []);

  const handleModal = () => {
    setShowModal(prev => !prev);
  };

  const renderNavLinks = (mobile: boolean = false) => {
    const delay = {
      0: "animation-delay-75",
      1: "animation-delay-150",
      2: "animation-delay-300",
    };
    return navLinks.map((link, i) => {
      return (
        <Link
          onClick={handleModal}
          className={`${(delay as any)[i]} animate-show-down`}
          textStyle={`${mobile && "text-4xl"}`}
          key={i}
          url={link.url}
          onlyText
        >
          {link.label}
        </Link>
      );
    });
  };

  return (
    <div
      className={`
      flex w-full h-20 fixed top-0 justify-center items-center px-5
      text-white transition-all duration-300 shadow-xl z-40 
      backdrop-blur-3xl md:backdrop-blur-[5px]
      ${showHeader ? "top-0" : "top-[-80px]"}
  `}
    >
      <div className="flex justify-between w-full lg:max-w-7xl">
        <Link url="#welcome">
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
          <Modal showModal={showModal}>{renderNavLinks(true)}</Modal>
          <Menu onClick={handleModal} showModal={showModal} />
        </div>
      </div>
    </div>
  );
}
