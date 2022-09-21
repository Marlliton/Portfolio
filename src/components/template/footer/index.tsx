import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Link } from "../../basicComponents/Link";

export function Footer() {
  return (
    <footer className="flex gap-4 p-12 border-t border-pastel-blue-light/20 bg-dark text-white justify-center items-center text-lg"> 
      <p>Criado por <span className="text-pastel-blue-light">Marlliton Souza</span></p>
      <div className="flex gap-3">
        <Link className="hover:text-pastel-blue" external url="https://www.linkedin.com/in/marlliton/">
          <LinkedinLogo size={35} />
        </Link>
        <Link className="hover:text-pastel-blue" external url="https://github.com/Marlliton">
          <GithubLogo size={35} />
        </Link>
        <Link className="hover:text-pastel-blue" external url="https://www.instagram.com/marlliton/">
          <InstagramLogo size={35} />
        </Link>
      </div>
    </footer>
  );
}
