import { Title } from "../../basicComponents/title";
import { TypeWriter } from "../TypeWriter";

export function Welcome() {
  return (
    <div
      className={`
       flex justify-center h-screen
    `}
    >
      <div className="w-full md:max-w-[60%] text-left">
        <Title heading="h1" align="left" className={`animate-fade-in mb-4`}>
          Bem Vindo!
        </Title>
        <div>
          <span
            className={`
            text-pastel-blue-light block text-lg animate-lateral-fade-in
          `}
          >
            Oi, meu nome é
          </span>
          <span className="block h-[100px]">
            <Title heading="h1" align="left">
              <TypeWriter text="Marlliton Souza." hideCursor />
            </Title>
            <Title heading="h1" align="left" className="text-pastel-blue-light">
              <TypeWriter text="Eu construo coisas para a web." delay={2500} />
            </Title>
          </span>
          <div className={`animate-show-off-up transition-all delay-1000`}>
            Sou desenvolvedor frontend, estudante de Análise e Desenvolvimento
            de Sistemas. Gosto muito de animais e curto games nas horas vagas.
            Como todo programador, adoro um bom café para me acompanhar nas
            madrugadas nas madrugadas ☕💻
          </div>
        </div>
      </div>
    </div>
  );
}
