import { useElementVisible } from "../../../hooks/useElementVisible";
import { Link } from "../../basicComponents/Link";
import { Title } from "../../basicComponents/Title";
import { ArrowDown } from "../../icons/ArrowDown";
import { Introduction } from "./Introduction";

export function Welcome() {
   const isVisible =  useElementVisible({
    elementId: "welcome",
    threshold: .9,
  });

  return (
    <div
      id="welcome"
      className={`
       flex flex-col justify-center h-[calc(100vh-80px)] items-center 
    `}
    >
      <div className="w-full text-left">
        <Title heading="h1" textStyle={`animate-fade-in-y  md:mb-4`}>
          Bem Vindo!
        </Title>
        <Introduction />

        <div
          className={`
          flex flex-col items-center relative text-pastel-blue-light pt-7 animate-show-up
        `}
        >
          <Link url="https://github.com/Marlliton" external onlyText>
            Visite meu GitHub
          </Link>

          <span
            className={`absolute top-[130px] hidden sm:block animate-show-up transition-all  ${
              isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link url="#about">
              <div className={`flex`}>
                <p className="text-2xl">Scroll Down</p>{" "}
                <ArrowDown
                  className="animate-bounce rounded-full bg-pastel-blue mt-[3px] ml-3 p-2 translate-y-[-50px]"
                  size={40}
                />
              </div>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
