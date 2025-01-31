import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
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

type favoritesProps = {
  id: number;
  annonce_id: number;
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

  const favorites = [];
  const handleAddToFavorites = (
    favorites: favoritesProps,
    annonce: AnnonceProps,
  ) => {
    if (favorites.includes(annonce.id)) {
      favorites.delete(annonce.id);
    } else {
      favorites.push(annonce.id);
    }
  };

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
              id="Annonce"
              key={annonce.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <p className="bold">{annonce.titre}</p>
              <p>Date de parution: {annonce.date}</p>
              <p>{annonce.light_description}</p>
              <FavoriteBorderIcon
                type="button"
                onClick={handleAddToFavorites}
              />
              <p>Nom de l'entreprise: {annonce.company_id}</p>
              <p>{annonce.remuneration}</p>
              <p>{annonce.experience} d'expérience minium dans le secteur</p>
              <p>#{annonce.work}</p>
              <p>#{annonce.field}</p>
              <Button
                type="button"
                id="Postuler"
                className="font-bold border solid-black border-4 p-8 bg-black"
                onClick={() => handleOpen(annonce.id)}
              >
                Voir l'annonce complète
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
            borderRadius: 16,
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedAnnonce && (
            <>
              <Typography variant="h6" component="h2">
                {selectedAnnonce.titre}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                {selectedAnnonce.complete_description}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Remuneration: {selectedAnnonce.remuneration}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Experience: {selectedAnnonce.experience}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Company ID: {selectedAnnonce.company_id}
              </Typography>
              <Button
                type="button"
                id="Postuler"
                className="font-bold border solid-black border-4 p-8 bg-black"
              >
                Postuler
              </Button>
              <Button
                type="button"
                id="Postuler"
                className="font-bold border solid-black border-4 p-8 bg-black"
              >
                Ajouter à mes favoris
              </Button>
              <Button
                type="button"
                id="Postuler"
                className="font-bold border solid-black border-4 p-8 bg-black"
                onClick={handleClose}
              >
                Fermer la fenetre
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </section>
  );
}

export default Jobboard;
