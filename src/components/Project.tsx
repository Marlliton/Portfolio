import { ButtonLink } from "./ButtonLink";

interface ProductProps {
  name: string;
  url: string | undefined;
  img?: string;
  description: string;
  isFinished: boolean;
}

export function Project(props: ProductProps) {
  return (
    <div className={`flex flex-col max-w-sm bg-violet-900/10 p-4 rounded-md`}>
      <div className="flex flex-col justify-between">
        <div className="mb-1">
          <h1 className="text-2xl mb-4 font-bold">{props.name}</h1>
          <p className="">{props.description}</p>
        </div>

        <span className="relative max-w-max">
          <a
            className={`
            text-lg after:content-[""] after:inline-block after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-[#6710f217] after:scale-x-0 hover:after:scale-x-100 after:to-[#6610f2] after:transition-all duration-1000
          `}
            href={props.url}
          >
            Ver Projeto
          </a>
        </span>

        {/* <footer className="flex flex-col sm:gap-4 sm:flex-row justify-around">
          <ButtonLink
            className="w-full h-10"
            buttonLabel="Testar o projeto"
            url={props?.url!}
            small
          />

          <ButtonLink
            className="w-full h-10"
            buttonLabel="Repositório"
            url={props?.repo!}
            small
          />
        </footer> */}
      </div>
    </div>
  );
}
