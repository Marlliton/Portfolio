import { Link } from "../../basicComponents/Link";
import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";
import { TypeWriter } from "../TypeWriter";

export function Introduction() {
  return (
    <div>
      <div>
        <span
          className={`
              text-pastel-blue-light block animate-fade-in-l-x
              pt-4 md:pb-2
            `}
        >
          <p>Oi, meu nome é</p>
        </span>
        <span className="block min-h-[100px] pb-4">
          <Title heading="h1">
            <TypeWriter text="Marlliton Souza." hideCursor />
          </Title>
          <Title heading="h1" className="text-pastel-blue-light">
            <TypeWriter text="Eu construo coisas para a web." delay={2500} />
          </Title>
        </span>
      </div>

      <div className={`animate-show-up transition-all delay-1000 `}>
        <div className="w-full md:max-w-[38rem]">
          <Paragraph>
            Sou desenvolvedor frontend, apaixonado por animais, e como todo
            programador, não posso ficar sem meu café da madrugada ☕💻. Curto
            games nos fins de semana e atualmente estou trabalhando na{" "}
            {
              <Link
                url="#"
                external
                onlyText
                className="text-pastel-blue-light hover:text-blue-dark"
              >
                Cod3r.
              </Link>
            }
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
