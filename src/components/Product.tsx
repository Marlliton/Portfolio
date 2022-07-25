import { ButtonLink } from "./ButtonLink";

interface ProductProps {
  name: string;
  url: string | undefined;
  img: string;
  description: string;
  repo: string;
  isFinished: boolean;
}

export function Product(props: ProductProps) {
  return (
    <div
      className={`flex flex-col w-full bg-violet-900/10 p-4 rounded-md`}
    >
      <div className={``}>
        <img
          className="rounded-md mb-3"
          src={props.img}
          alt="Imagem do projeto"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="mb-4">
          <h1 className="text-xl">{props.name}</h1>
          <p className="">{props.description}</p>
        </div>
        <footer className="flex flex-col md:flex-row justify-around">
          <ButtonLink
            buttonLabel="Testar o projeto"
            url={props?.url!}
            small
          />
        
          <ButtonLink
            buttonLabel="Repositório"
            url={props?.repo!}
            small
          />
        </footer>
      </div>
    </div>
  );
}
