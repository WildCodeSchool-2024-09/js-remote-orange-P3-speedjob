import { useState } from "react";
import { Link } from "react-router-dom";
import logoblackwhite from "../../assets/images/logoblackwhite.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="flex flex-col items-between justify-center border-4 p-8">
      <div className="flex items-center justify-center size-16">
        <div className="w-16 h-16 scale-20">
          <img src={logoblackwhite} alt="logo" />
        </div>
        <div>
          <div className="flex flex-row items-center justify-center">
            <button
              type="button"
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link to="/">Page d'Acceuil</Link>
            </button>
            <button
              type="button"
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link to="/signUp">S'inscrire</Link>
            </button>
            <button
              type="button"
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link to="/signin">Se connecter</Link>
            </button>
            <button
              type="button"
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link to="/jobboard">Accéder aux offres</Link>
            </button>
            <button
              type="button"
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link to="/blog">Accéder aux articles</Link>
            </button>
            <button
              type="button"
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link to="/contact">Contactez-nous</Link>
            </button>
            <button
              type="button"
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link to="/legal">Mentions légales</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Rechercher par métier, entreprise, secteur d'activité,..."
          value={searchQuery}
          onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
          className="mt-1 block w-full rounded-md border-gray-100 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
        />
        <Link
          to="/result"
          className="border-solid-black rounded-lg border-4 p-8"
        >
          Rechercher
        </Link>
      </div>
    </section>
  );
}

export default Header;
