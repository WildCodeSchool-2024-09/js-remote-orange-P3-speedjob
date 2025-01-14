import { Link } from "react-router-dom";
import logoblackwhite from "../../assets/images/logoblackwhite.png";

const AboutHome = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1>À propos de SpeedJob</h1>
      <img src={logoblackwhite} alt="SpeedJob" />
      <p>
        SpeedJob est une plateforme en ligne dédiée à la mise en relation entre
        les entreprises et les candidats à la recherche d'emploi. Notre mission
        est de simplifier et d'accélérer le processus de recrutement en offrant
        aux entreprises la possibilité de publier facilement des offres d'emploi
        et aux candidats de postuler directement en quelques clics. Nous
        proposons une interface conviviale et intuitive qui permet à chaque
        utilisateur de naviguer de manière fluide et efficace.
      </p>
      <Link to="/about">
        <button
          type="button"
          className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          En savoir plus
        </button>
      </Link>
    </div>
  );
};

export default AboutHome;
