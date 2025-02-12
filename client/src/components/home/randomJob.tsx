import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import MapIcon from "@mui/icons-material/Map";
import { Chip } from "@mui/material";

function RandomJob() {
  const jobs = [
    {
      id: 1,
      titre: "Développeur Frontend React",
      date: "2025-01-10",
      light_description: "Développement d'interfaces utilisateur modernes.",
      complete_description:
        "Nous recherchons un développeur frontend spécialisé en React pour concevoir et maintenir des interfaces utilisateur performantes et ergonomiques.",
      company_id: "Sodexo Services",
      remuneration: "45-55k€/an",
      experience: "2-3 ans",
      work: "Temps plein",
      field: "Informatique et technologie",
    },
    {
      id: 2,
      titre: "Consultant en stratégie",
      date: "2025-01-09",
      light_description:
        "Accompagnement des entreprises dans leur transformation stratégique.",
      complete_description:
        "Le consultant aura pour mission d'identifier les opportunités de croissance, d'optimiser les processus existants et de proposer des solutions innovantes.",
      company_id: "Apple",
      remuneration: "60-80k€/an",
      experience: "5 ans",
      work: "Temps plein",
      field: "Conseil",
    },
    {
      id: 3,
      titre: "Designer UX/UI",
      date: "2025-01-08",
      light_description: "Conception d'expériences utilisateur engageantes.",
      complete_description:
        "Vous collaborerez avec l'équipe produit pour concevoir des interfaces intuitives et visuellement attrayantes, en mettant l'accent sur l'utilisateur final.",
      company_id: "Fnac",
      remuneration: "40-50k€/an",
      experience: "3 ans",
      work: "Temps plein",
      field: "Design",
    },
    {
      id: 4,
      titre: "Chef de projet marketing",
      date: "2025-01-07",
      light_description: "Gestion de campagnes marketing multi-canaux.",
      complete_description:
        "En tant que chef de projet, vous serez responsable de la planification, de l'exécution et de l'analyse des campagnes marketing pour divers clients.",
      company_id: "Orange",
      remuneration: "50-65k€/an",
      experience: "4 ans",
      work: "Temps plein",
      field: "Marketing",
    },
    {
      id: 5,
      titre: "Technicien support informatique",
      date: "2025-01-06",
      light_description: "Assistance technique pour utilisateurs finaux.",
      complete_description:
        "Nous recherchons un technicien pour résoudre les problèmes techniques des utilisateurs et maintenir le parc informatique de l'entreprise.",
      company_id: "France telecom",
      remuneration: "30-35k€/an",
      experience: "1-2 ans",
      work: "Temps plein",
      field: "Informatique et technologie",
    },
    {
      id: 6,
      titre: "Data Analyst",
      date: "2025-01-05",
      light_description: "Analyse de données pour la prise de décision.",
      complete_description:
        "Votre rôle sera de collecter, analyser et interpréter des données pour aider à la prise de décision stratégique de l'entreprise.",
      company_id: "La Poste",
      remuneration: "40-60k€/an",
      experience: "2 ans",
      work: "Temps plein",
      field: "Analyse de données",
    },
    {
      id: 7,
      titre: "Ingénieur DevOps",
      date: "2025-01-04",
      light_description:
        "Automatisation et optimisation des processus de développement.",
      complete_description:
        "Vous serez chargé de créer des pipelines CI/CD, d'améliorer l'infrastructure cloud et d'assurer la stabilité des applications déployées.",
      company_id: "SFR",
      remuneration: "55-70k€/an",
      experience: "3-4 ans",
      work: "Temps plein",
      field: "Informatique et technologie",
    },
    {
      id: 8,
      titre: "Responsable des ressources humaines",
      date: "2025-01-03",
      light_description:
        "Gestion des talents et développement organisationnel.",
      complete_description:
        "Vous serez responsable de la gestion des recrutements, de la formation et du développement des employés.",
      company_id: "Ineltis",
      remuneration: "50-65k€/an",
      experience: "5 ans",
      work: "Temps plein",
      field: "Ressources humaines",
    },
    {
      id: 9,
      titre: "Comptable senior",
      date: "2025-01-02",
      light_description: "Gestion des finances et rapports financiers.",
      complete_description:
        "Le comptable senior sera chargé de superviser les opérations comptables, de préparer les rapports financiers et d'assurer la conformité fiscale.",
      company_id: "Telvenda",
      remuneration: "45-55k€/an",
      experience: "5 ans",
      work: "Temps plein",
      field: "Finance",
    },
    {
      id: 10,
      titre: "Responsable logistique",
      date: "2025-01-01",
      light_description: "Optimisation de la chaîne d'approvisionnement.",
      complete_description:
        "Vous gérerez les opérations logistiques, planifierez les approvisionnements et optimiserez les coûts liés à la chaîne logistique.",
      company_id: "Sifura",
      remuneration: "50-60k€/an",
      experience: "4 ans",
      work: "Temps plein",
      field: "Logistique",
    },
  ];

  const getRandomJob = () => {
    return jobs[Math.floor(Math.random() * jobs.length)];
  };

  const job = getRandomJob();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex flex-col items-center justify-center border-4 p-8">
            <div className="flex flex-col items-center justify-center border-4 p-8">
              <h2 className="text-3xl font-bold mb-8">
                Les dernières offres pour vous:
              </h2>
              <AccessTimeIcon className="font-italic" />
              {job.date}
              <div className="flex wrap items-start justify-between">
                <div className="flex-1 justify-center">
                  <h3 className="text-xl font-semibold mb-2">{job.titre}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2 justify-around">
                    <span className="flex items-center justify-center">
                      <ApartmentIcon className="mr-1" fontSize="small" />
                      {job.company_id}
                    </span>
                    <span className="flex items-center">
                      <MapIcon className="mr-1" fontSize="small" />
                      Paris, France
                    </span>
                    <span className="flex items-center">
                      <AccessTimeIcon className="mr-1" fontSize="small" />
                      {job.date}
                    </span>
                    <span className="flex items-center">
                      <EuroSymbolIcon className="mr-1" fontSize="small" />
                      {job.remuneration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {job.complete_description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[`${job.work}`, `${job.field}`].map((tech) => (
                      <Chip key={tech} label={tech} variant="outlined">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt={job.company_id}
                  className="w-8 h-8 rounded-lg object-fit"
                />
              </div>
              <div className="flex justify-end mt-4">
                <Chip
                  className="font-bold border solid-black border-4 p-8 bg-black"
                  label="Voir toutes les offres"
                  component="a"
                  href="./jobboard"
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
}

export default RandomJob;
