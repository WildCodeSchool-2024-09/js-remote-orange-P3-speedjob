import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapIcon from "@mui/icons-material/Map";
import {
  Box,
  Button,
  Chip,
  Modal,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
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
  creation_date: string;
  modification_date: string;
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
    <Container id="projects" sx={{ py: 5, bgcolor: "grey.100" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Ajustez la taille du texte en fonction de la taille de l'écran
          }}
        >
          Notre Jobboard
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="textSecondary"
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // Ajustez la taille du texte en fonction de la taille de l'écran
          }}
        >
          Découvrez nos dernières offres d'emploi
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {annonces.map((annonce) => (
          <Grid item xs={12} key={annonce.id}>
            <Paper elevation={3} sx={{ p: 4, position: "relative" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" component="h3" gutterBottom>
                    {annonce.title}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {annonce.light_description}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    Date de parution: {annonce.creation_date}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ display: "flex", alignItems: "center", mr: 2 }}
                    >
                      <ApartmentIcon fontSize="small" sx={{ mr: 1 }} />
                      {annonce.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ display: "flex", alignItems: "center", mr: 2 }}
                    >
                      <MapIcon fontSize="small" sx={{ mr: 1 }} />
                      Paris, France
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ display: "flex", alignItems: "center", mr: 2 }}
                    >
                      <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
                      {annonce.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <EuroSymbolIcon fontSize="small" sx={{ mr: 1 }} />
                      {annonce.remuneration}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    component="p"
                    color="textSecondary"
                    sx={{ mt: 2 }}
                  >
                    {annonce.complete_description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                  >
                    {[`${annonce.work}`, `${annonce.field}`].map((tech) => (
                      <Chip key={tech} label={tech} variant="outlined" />
                    ))}
                  </Box>
                </Box>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt={annonce.compagny}
                  sx={{
                    position: "absolute",
                    width: { xs: "4rem", sm: "6rem", md: "8rem" }, // Ajustez la largeur en fonction de la taille de l'écran
                    height: { xs: "4rem", sm: "6rem", md: "8rem" }, // Ajustez la hauteur en fonction de la taille de l'écran
                    maxWidth: "100%", // Empêche l'image de dépasser la largeur du conteneur
                    maxHeight: "100%", // Empêche l'image de dépasser la hauteur du conteneur
                    borderRadius: "50%", // Ajoutez un borderRadius
                    ml: 2,
                    right: "20px",
                  }}
                />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpen(annonce)}
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" }, // Ajustez la taille du texte en fonction de la taille de l'écran
                    padding: {
                      xs: "0.5rem 1rem",
                      sm: "0.75rem 1.5rem",
                      md: "1rem 2rem",
                    }, // Ajustez le padding en fonction de la taille de l'écran
                  }}
                >
                  CONSULTER L'ANNONCE
                </Button>
                <Button
                  variant="contained"
                  color="outlined"
                  component={Link}
                  to="/contact"
                  sx={{
                    fontSize: { xs: "0.60rem", sm: "1rem", md: "1.25rem" }, // Ajustez la taille du texte en fonction de la taille de l'écran
                    padding: {
                      xs: "0.5rem 1rem",
                      sm: "0.75rem 1.5rem",
                      md: "1rem 2rem",
                    }, // Ajustez le padding en fonction de la taille de l'écran
                  }}
                >
                  Signaler l'annonce
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "50%", md: "50%" }, // Ajustez la largeur en fonction de la taille de l'écran
            p: 4,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 1,
          }}
        >
          {selectedAnnonce && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 32,
                  minWidth: "auto",
                  padding: "8px",
                  fontSize: "1rem",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                x
              </Button>
              <Typography variant="h4" component="h3" gutterBottom>
                {selectedAnnonce.title}
              </Typography>
              <Typography variant="body1" component="p">
                {selectedAnnonce.light_description}
              </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                {selectedAnnonce.creation_date}
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ display: "flex", alignItems: "center", mr: 2 }}
                    >
                      <ApartmentIcon fontSize="small" sx={{ mr: 1 }} />
                      {selectedAnnonce.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ display: "flex", alignItems: "center", mr: 2 }}
                    >
                      <MapIcon fontSize="small" sx={{ mr: 1 }} />
                      Paris, France
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ display: "flex", alignItems: "center", mr: 2 }}
                    >
                      <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
                      {selectedAnnonce.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <EuroSymbolIcon fontSize="small" sx={{ mr: 1 }} />
                      {selectedAnnonce.remuneration}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    component="p"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    {selectedAnnonce.complete_description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {[
                      `${selectedAnnonce.work}`,
                      `${selectedAnnonce.field}`,
                    ].map((tech) => (
                      <Chip key={tech} label={tech} variant="outlined" />
                    ))}
                  </Box>
                </Box>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt={selectedAnnonce.compagny}
                  sx={{
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50%",
                    ml: 2,
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                  sx={{ mr: 2 }}
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
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

export default Jobboard;
