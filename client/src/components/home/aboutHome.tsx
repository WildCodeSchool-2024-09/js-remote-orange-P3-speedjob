import { Chip } from "@mui/material";
import logoblackwhite from "../../assets/images/logoblackwhite.png";

const AboutHome = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex flex-col items-center justify-center border-4 p-8">
            <div className="flex flex-col items-center justify-center border-4 p-8">
              <h2 className="text-3xl font-bold mb-8">À propos de SpeedJob</h2>
              <img
                src={logoblackwhite}
                alt="SpeedJob"
                className="w-50 h-48 object-cover"
              />

              <p>
                SpeedJob est une plateforme en ligne dédiée à la mise en
                relation entre les entreprises et les candidats à la recherche
                d'emploi. Notre mission est de simplifier et d'accélérer le
                processus de recrutement en offrant aux entreprises la
                possibilité de publier facilement des offres d'emploi et aux
                candidats de postuler directement en quelques clics. Nous
                proposons une interface conviviale et intuitive qui permet à
                chaque utilisateur de naviguer de manière fluide et efficace.
              </p>

              <div className="flex justify-end mt-4">
                <Chip
                  className="font-bold border solid-black border-4 p-8 bg-black"
                  label="Voir toutes les offres"
                  component="a"
                  href="./about"
                  variant="outlined"
                  clickable
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
