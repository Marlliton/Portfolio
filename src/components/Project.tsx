import { Link } from "./Link";
interface ProductProps {
  name: string;
  url: string | undefined;
  repo?: string;
  img?: string;
  description: string;
  isFinished: boolean;
}

export function Project(props: ProductProps) {
  const hasLink = props.url ?? props.repo ?? undefined;
  return (
    <div className={`flex flex-col  bg-violet-900/10 p-6 rounded-md`}>
      <div className="flex flex-col justify-between">
        <div className="mb-4">
          <h1 className="text-2xl mb-4 font-bold">{props.name}</h1>
          <p className="">{props.description}</p>
        </div>

        {hasLink && (
          <Link className="text-violet-700" url={props.url! ?? props.repo!}>
            Ver Projeto
          </Link>
        )}

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
