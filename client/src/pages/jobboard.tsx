import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Modal,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import MapIcon from "@mui/icons-material/Map";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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

type FavoriteProps = {
  user_id: number;
  annonce_id: number;
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

  const handleAddFavorite = () => {
    if (selectedAnnonce && user) {
      const favorite: FavoriteProps = {
        user_id: user.id,
        annonce_id: selectedAnnonce.id,
      };

      fetch(`${import.meta.env.VITE_API_URL}/api/favorite/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_id, annonce_id),
      })
        .then((response) => response.json())
        .then((data) => { });
    } else {
      console.error("No selected annonce or user is not authenticated");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={4}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Notre Jobboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Découvrez nos dernières offres d'emploi
      </Typography>
      <Box display="flex" flexDirection="column" gap={4} width="100%" maxWidth="lg">
        {annonces.map((annonce) => (
          <div
            id="Annonce"
            key={annonce.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8"
          >

            <div className="flex wrap items-start justify-between">
              <div className="flex-1 justify-center">
                <h3 className="text-xl font-semibold mb-2">{annonce.title}</h3>
                <p>{annonce.light_description}</p><div className="flex items-center space-x-4 text-gray-600 mb-2 justify-around">

                  <span className="flex items-center justify-center"> <p>Date de parution: {annonce.creation_date}</p>
                    <ApartmentIcon className="mr-1" fontSize="small" />
                    {annonce.company_id}
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
              CONSULTER CETTE ANNONCE
            </Button>
          </div>
        ))}
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          p={4}
        >
          {selectedAnnonce && (
            <Box
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8">
              <Box display="flex" justifyContent="center" mt={2} gap={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClose}
                >
                  X
                </Button>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt={selectedAnnonce.company_id}
                  className="w-8 h-8 rounded-lg object-fit"
                />
              </Box>
              <Typography variant="h6" component="h2" align="center">
                {selectedAnnonce.title}
              </Typography>
              <Typography sx={{ mt: 2, textAlign: "left", fontWeight: "bold" }}>
                {selectedAnnonce.complete_description}
              </Typography>
              <Typography sx={{ mt: 2, textAlign: "left", fontWeight: "bold" }}>
                Remuneration: {selectedAnnonce.remuneration}
              </Typography>
              <Typography sx={{ mt: 2, textAlign: "left", fontWeight: "bold" }}>
                Experience: {selectedAnnonce.experience}
              </Typography>
              <Typography sx={{ mt: 2, textAlign: "left", fontWeight: "bold" }}>
                Company ID: {selectedAnnonce.company_id}
              </Typography>
              <Box display="flex" justifyContent="center" mt={2} gap={2}>
                <Button
                  variant="contained"
                  color="primary"
                >
                  Postuler à cette annonce
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleAddFavorite}
                >
                  <FavoriteBorderIcon />
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default Jobboard;
