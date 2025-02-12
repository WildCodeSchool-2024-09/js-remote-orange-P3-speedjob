import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapIcon from "@mui/icons-material/Map";
import { Box, Button, Chip, Modal, Typography } from "@mui/material";
import { set } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type AnnoncesProps = {
  id: number;
  name: string;
  title: string;
  light_description: string;
  complete_description: string;
  remuneration: string;
  experience: string;
  company: number;
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

  const [favorites, setFavorites] = useState([] as FavoritesProps[]);
  const [isApply, setIsApply] = useState(false);
  const annonceId = selectedAnnonce?.id;

  const favoriteData = {
    user_id: user?.id,
    annonceId: annonceId,
    is_apply: isApply,
  };

  const handleAddFavorite = (favorites: FavoritesProps) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/favorite/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favoriteData }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data);
      });
  };

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
              <div className="flex wrap items-start justify-between">
                <div className="flex-1 justify-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {annonce.title}
                  </h3>{" "}
                  <p>{annonce.light_description}</p>
                  <p>Date de parution: {annonce.creation_date}</p>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2 justify-around">
                    <Typography className="flex items-center justify-center">
                      <ApartmentIcon variant="body2" color="text.secondary" />
                      {annonce.compagny}
                    </Typography>
                    <Typography className="flex items-center">
                      <MapIcon variant="body2" color="text.secondary" />
                      Paris, France
                    </Typography>
                    <Typography className="flex items-center">
                      <AccessTimeIcon variant="body2" color="text.secondary" />
                      {annonce.date}
                    </Typography>
                    <Typography className="flex items-center">
                      <EuroSymbolIcon variant="body2" color="text.secondary" />
                      {annonce.remuneration}
                    </Typography>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {annonce.complete_description}
                  </p>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    gap={1}
                    mt={2}
                    justifyContent="left"
                  >
                    {[`${annonce.work}`, `${annonce.field}`].map((tech) => (
                      <Chip key={tech} label={tech} variant="outlined" />
                    ))}
                  </Box>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt={annonce.compagny}
                  style={{
                    width: "10rem",
                    height: "10rem",
                    // position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    borderRadius: "10%",
                  }}
                />
              </div>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpen(annonce)}
                >
                  CONSULTER L'ANNONCE
                </Button>
              </Box>
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
            width: "70%",
            p: 4,
          }}
        >
          {selectedAnnonce && (
            <div className="flex felx-col gap-8 align-center">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClose}
                >
                  x
                </Button>
                <h3 className="text-xl font-semibold mb-2">
                  {selectedAnnonce.title}
                </h3>
                <p>{selectedAnnonce.light_description}</p>
                <p>{selectedAnnonce.creation_date}</p>
                <div className="flex wrap items-start justify-between">
                  <div className="flex-1 justify-center">
                    <div className="flex items-center space-x-4 text-gray-600 mb-2 justify-between">
                      <Typography className="flex items-center justify-center">
                        <ApartmentIcon className="mr-1" fontSize="small" />
                        {selectedAnnonce.compagny}
                      </Typography>
                      <Typography className="flex items-center">
                        <MapIcon className="mr-1" fontSize="small" />
                        Paris, France
                      </Typography>
                      <Typography className="flex items-center">
                        <AccessTimeIcon className="mr-1" fontSize="small" />
                        {selectedAnnonce.date}
                      </Typography>
                      <Typography className="flex items-center">
                        <EuroSymbolIcon className="mr-1" fontSize="small" />
                        {selectedAnnonce.remuneration}
                      </Typography>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {selectedAnnonce.complete_description}
                    </p>

                    <Box
                      display="flex"
                      flexWrap="wrap"
                      gap={1}
                      mt={2}
                      justifyContent="left"
                    >
                      {[
                        `${selectedAnnonce.work}`,
                        `${selectedAnnonce.field}`,
                      ].map((tech) => (
                        <Chip key={tech} label={tech} variant="outlined" />
                      ))}
                    </Box>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt={selectedAnnonce.compagny}
                    style={{
                      width: "6rem",
                      height: "6rem",
                      position: "absolute",
                      top: "3rem",
                      right: "3rem",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                  >
                    POSTULER
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleAddFavorite}
                  >
                    <FavoriteBorderIcon />
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
