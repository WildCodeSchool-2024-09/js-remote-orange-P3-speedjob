import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type AnnoncesProps = {
  id: number;
  name: string;
  titre: string;
  light_description: string;
  complete_description: string;
  remuneration: string;
  experience: string;
  company_id: number;
  work: string;
  is_apply: boolean;
  field: string;
  date: string;
};

function Jobboard() {
  const [annonces, setAnnonces] = useState([] as AnnoncesProps[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/annonces/`)
      .then((response) => response.json())
      .then((data: AnnoncesProps[]) => {
        setAnnonces(data);
      });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Notre Jobboard</h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez nos dernières offres d'emploi
          </p>
        </div>
        <div className="flex flex-col gap-8 align-center">
          {annonces.map((annonce) => (
            <div
              key={annonce.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <p className="bold">{annonce.titre}</p>
              <p>Date de parution: {annonce.date}</p>
              <p>{annonce.light_description}</p>
              <FavoriteBorderIcon type="submit" />
              <p>Nom de l'entreprise: {annonce.company_id}</p>
              <p>{annonce.remuneration}</p>
              <p>{annonce.experience} d'expérience minium dans le secteur</p>
              <p>#{annonce.work}</p>
              <p>#{annonce.field}</p>
              <div className="font-bold border solid-black border-4 p-8 bg-black">
                <Link to="/login">Postuler immédiatement</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jobboard;
