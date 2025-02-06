import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapIcon from "@mui/icons-material/Map";
import { Box, Button, Chip, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

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

type UserProps = {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  email: string;
  creation_date: string;
  modification_date: string;
  name_street: string;
  postcode: string;
  city: string;
  isAdmin: boolean;
  role_id: number;
  admin_id: number;
  token: string;
};

type FavoritesProps = {
  user_id: number;
  annonce_id: number;
  is_apply: boolean;
};

function Jobboard() {
  const { user } = useAuth();
  const [annonces, setAnnonces] = useState([] as AnnoncesProps[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/annonces/`)
      .then((response) => response.json())
      .then((data: AnnoncesProps[]) => {
        setAnnonces(data);
      });
  }, []);

  console.log("Annonces in jobboard=", annonces);

  const [open, setOpen] = useState(false);
  const [selectedAnnonce, setSelectedAnnonce] = useState<AnnoncesProps | null>(
    null,
  );

  const handleOpen = (annonce: AnnoncesProps) => {
    setSelectedAnnonce(annonce);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAnnonce(null);
  };

  const handleAddFavorite = () => {};

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Notre Jobboard</h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez nos dernières offres d'emploi
          </p>
        </div>
        <div className="flex flex-col gap-8 align-center">
          {annonces.map((annonce) => (
            <div
              id="Annonce"
              key={annonce.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <p className="bold">{annonce.titre}</p>
              <p>Date de parution: {annonce.date}</p>
              <p>{annonce.light_description}</p>
              <div className="flex wrap items-start justify-between">
                <div className="flex-1 justify-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {annonce.titre}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2 justify-around">
                    <span className="flex items-center justify-center">
                      <ApartmentIcon className="mr-1" fontSize="small" />
                      {annonce.company}
                    </span>
                    <span className="flex items-center">
                      <MapIcon className="mr-1" fontSize="small" />
                      Paris, France
                    </span>
                    <span className="flex items-center">
                      <AccessTimeIcon className="mr-1" fontSize="small" />
                      {annonce.date}
                    </span>
                    <span className="flex items-center">
                      <EuroSymbolIcon className="mr-1" fontSize="small" />
                      {annonce.remuneration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {annonce.complete_description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[`${annonce.work}`, `${annonce.field}`].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt={annonce.company_id}
                  className="w-8 h-8 rounded-lg object-fit"
                />
              </div>
              <Button
                type="button"
                id="Postuler"
                className="font-bold border solid-black border-4 p-8 bg-black"
                onClick={() => handleOpen(annonce)}
              >
                Postuler immédiatement
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedAnnonce && (
            <div className="flex felx-col gap-8 align-center">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8">
                <p className="bold">{selectedAnnonce.titre}</p>
                <p>Date de parution: {selectedAnnonce.date}</p>
                <p>{selectedAnnonce.light_description}</p>
                <div className="flex wrap items-start justify-between">
                  <div className="flex-1 justify-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {selectedAnnonce.titre}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-2 justify-around">
                      <span className="flex items-center justify-center">
                        <ApartmentIcon className="mr-1" fontSize="small" />
                        {selectedAnnonce.company_id}
                      </span>
                      <span className="flex items-center">
                        <MapIcon className="mr-1" fontSize="small" />
                        Paris, France
                      </span>
                      <span className="flex items-center">
                        <AccessTimeIcon className="mr-1" fontSize="small" />
                        {selectedAnnonce.date}
                      </span>
                      <span className="flex items-center">
                        <EuroSymbolIcon className="mr-1" fontSize="small" />
                        {selectedAnnonce.remuneration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {selectedAnnonce.complete_description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        `${selectedAnnonce.work}`,
                        `${selectedAnnonce.field}`,
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt={selectedAnnonce.company_id}
                    className="w-8 h-8 rounded-lg object-fit"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <Button
                    type="button"
                    id="Close"
                    className="font-bold border solid-black border-4 p-8 bg-black"
                    onClick={handleClose}
                  >
                    Fermer la fenêtre
                  </Button>
                  <Button
                    type="button"
                    id="Postuler"
                    className="font-bold border solid-black border-4 p-8 bg-black"
                    onClick={handleAddFavorite}
                  >
                    Ajouter à mes favoris
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </section>
  );
}

export default Jobboard;
