// Import access to data
import annoncesRepository from "./annoncesRepository";

const annonces = [
  {
    id: 1,
    titre: "Développeur Frontend React",
    date: "2025-01-10",
    light_description: "Développement d'interfaces utilisateur modernes.",
    complete_description:
      "Nous recherchons un développeur frontend spécialisé en React pour concevoir et maintenir des interfaces utilisateur performantes et ergonomiques.",
    company_id: "123",
    remuneration: "45000-55000€/an",
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
    company_id: "124",
    remuneration: "60000-80000€/an",
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
    company_id: "125",
    remuneration: "40000-50000€/an",
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
    company_id: "126",
    remuneration: "50000-65000€/an",
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
    company_id: "127",
    remuneration: "30000-35000€/an",
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
    company_id: "128",
    remuneration: "40000-60000€/an",
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
    company_id: "129",
    remuneration: "55000-70000€/an",
    experience: "3-4 ans",
    work: "Temps plein",
    field: "Informatique et technologie",
  },
  {
    id: 8,
    titre: "Responsable des ressources humaines",
    date: "2025-01-03",
    light_description: "Gestion des talents et développement organisationnel.",
    complete_description:
      "Vous serez responsable de la gestion des recrutements, de la formation et du développement des employés.",
    company_id: "130",
    remuneration: "50000-65000€/an",
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
    company_id: "131",
    remuneration: "45000-55000€/an",
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
    company_id: "132",
    remuneration: "50000-60000€/an",
    experience: "4 ans",
    work: "Temps plein",
    field: "Logistique",
  },
];

import type { RequestHandler } from "express";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const annonces = await annoncesRepository.readAll();

    // Respond with the items in JSON format
    res.json(annonces);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const annoncesId = Number(req.params.id);
    const annonces = await annoncesRepository.read(annoncesId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (annonces == null) {
      res.sendStatus(404);
    } else {
      res.json(annonces);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the item data from the request body
    const newAnnonces = {
      creation_date: req.body.title,
      modification_date: req.body.modification_date,
      light_description: req.body.light_description,
      complete_description: req.body.complete_description,
      remuneration: req.body.remuneration,
      experience: req.body.experience,
      work: req.body.work,
      field: req.body.field,
      company_id: req.body.company_id,
      is_apply: req.body.is_apply,
      title: req.body.title,
    };

    // Create the item
    const insertId = await annoncesRepository.create(newAnnonces);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit: RequestHandler = async (req, res, next) => {
  try {
    // Update a specific category based on the provided ID
    const annonces = {
      id: Number(req.body.id),
      creation_date: String(req.body.creation_date),
      modification_date: Number(req.body.modification_date),
      light_description: String(req.body.light_description),
      complete_description: String(req.body.complete_description),
      remuneration: String(req.body.remuneration),
      experience: String(req.body.experience),
      work: String(req.body.work),
      field: String(req.body.field),
      company_id: Number(req.body.company_id),
      is_apply: Boolean(req.body.is_apply),
      title: String(req.body.title),
    };

    const affectedRows = await annoncesRepository.update(annonces);

    // If the category is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the category in JSON format
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Delete a specific category based on the provided ID
    const annoncesId = Number(req.params.id);

    await annoncesRepository.delete(annoncesId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
