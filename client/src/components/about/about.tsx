import { Link } from "react-router-dom";
import AboutMap from "./aboutMap";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1>À propos de SpeedJob</h1>
      <div>
        <img src="logo" alt="" />
        <p>
          SpeedJob est une plateforme en ligne dédiée à la mise en relation
          entre les entreprises et les candidats à la recherche d'emploi. Notre
          mission est de simplifier et d'accélérer le processus de recrutement
          en offrant aux entreprises la possibilité de publier facilement des
          offres d'emploi et aux candidats de postuler directement en quelques
          clics. Nous proposons une interface conviviale et intuitive qui permet
          à chaque utilisateur de naviguer de manière fluide et efficace. Que
          vous soyez un employeur à la recherche de nouveaux talents ou un
          candidat cherchant à saisir de nouvelles opportunités
          professionnelles, SpeedJob est la solution idéale pour répondre à vos
          besoins. Avec des fonctionnalités avancées de filtrage et de
          recherche, nous mettons un point d'honneur à vous fournir les
          meilleurs outils pour trouver ce que vous recherchez, qu'il s'agisse
          d'une entreprise innovante ou d'un poste adapté à vos compétences.
          Chez SpeedJob, nous croyons en l'importance de l'efficacité, de la
          transparence et de la simplicité dans le processus de recrutement, et
          nous nous engageons à vous accompagner dans vos projets
          professionnels.
        </p>
      </div>
      <div>
        <AboutMap />
      </div>
      <Link to="/contact">
        <button
          type="button"
          className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          contactez-nous
        </button>
      </Link>
    </div>
  );
};

export default About;
