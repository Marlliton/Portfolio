import { Link } from "../../basicComponents/Link";
import { Title } from "../../basicComponents/Title";
import { ArrowDown } from "../../icons/ArrowDown";
import { TypeWriter } from "../TypeWriter";
import { Introduction } from "./Introduction";

export function Welcome() {
  return (
    <div
      className={`
       flex flex-col justify-center h-[calc(100vh-80px)] items-center relative
    `}
    >
      <div className="w-full md:max-w-[80%]  text-left">
        <Title heading="h1" align="left" className={`animate-fade-in  md:mb-4`}>
          Bem Vindo!
        </Title>
        <Introduction />
        <div
          className={`
          flex justify-center text-pastel-blue-light pt-7 animate-show-off-up
        `}
        >
          <Link url="https://github.com/Marlliton" external onlyText>
            Visite meu GitHub
          </Link>
        </div>
      </div>

      <div className="absolute top-[88%] animate-show-off-up">
        <Link url="#about">
          <div className="flex">
            <p className="text-2xl">Scroll Down</p>{" "}
            <ArrowDown
              className="animate-bounce rounded-full bg-pastel-blue mt-[3px] ml-3 p-2 translate-y-[-50px]"
              size={40}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
