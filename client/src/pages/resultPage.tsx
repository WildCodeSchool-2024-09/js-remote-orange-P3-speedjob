import { Link } from "react-router-dom";

function Result() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="flex flex-col items-center justify-center ">
        <div className="font-bold">Votre recherche retourne 23 résultats:</div>
        <div className="flex">
          pour les consulter inscrivez-vous ou identifiez vous:.
        </div>
        <Link to="/login">Se connecter</Link>
        ou
        <Link to="/signin">S'inscrire</Link>
      </div>
    </section>
  );
}

export default Result;
