import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInModule from "../components/register/signInModule";
import { useAuth } from "../hooks/useAuth";
// import { useParams } from "react-router-dom";

type FavoriteProps = {
  id: number;
  user_id: number;
  annonce_id: number;
  is_apply: boolean;
};

type UserProps = {
  id: number;
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  email: string;
  creation_date: string;
  modification_date: string;
  isAdmin: boolean;
  role: boolean;
  street_number: number;
  street_name: string;
  postcode: number;
  city: string;
  phone_number: number;
  birthdate: string;
  cv_link: string;
  lm_link: string;
  light_description: string;
  complete_description: string;
  siret_number: number;
  cedex_number: string;
  raison_social: string;
};

type AnnonceProps = {
  id: number;
  title: string;
  description: string;
  creation_date: string;
  modification_date: string;
  entreprise_id: number;
  user_id: number;
  is_active: boolean;
  is_apply: boolean;
};

function FavoritesPage() {
  const { isAuth } = useAuth();
  const { user } = useAuth();
  const user_Id = user?.id;
  const [favorites, setFavorites] = useState([] as FavoriteProps[]);
  const navigate = useNavigate();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/favorite/${user_Id}`)
      .then((response) => response.json())
      .then((data: FavoriteProps[]) => {
        setFavorites(data);
      });
  }, [user]);

  const annonce_id = favorites.map((favorites) => favorites.annonce_id);

  const handleDelete = (id: number) => {

    fetch(`${import.meta.env.VITE_API_URL}/api/favorite/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 204) {
        navigate("/favorite");
      }
    });
  };

  const [isApply, setIsApply] = useState(false);

  const handleApply = (id: number) => {
    setIsApply(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/favorite/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_apply: isApply }),
    }).then((response) => {
      if (response.status === 204) {
        navigate("/favorite");
      }
    });
    windows.location.reload();
  };

  return isAuth ? (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={4}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Mes Favoris
      </Typography>
      <div display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="body1" gutterBottom align="center">
          Retrouvez ici toutes les annonces que vous avez ajoutées à vos favoris
        </Typography>
      </div>
      <Box
        display="flex"
        flexDirection="row"
        flexwrap="wrap"
        gap={4}
        width="100%"
        maxWidth="lg"
        justifyContente="center"
        alignItems="center"
      >
      <Grid container spacing={4} justifyContent="center">
        {favorites.map((annonce) => (
          <Grid item xs={12} sm={6} md={4} key={annonce.id}>
            <Card id="Favorite" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="div" align="center"                   sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                  {annonce.title}
                </Typography>
                <Typography variant="body1" component="div" align="center">
                  Date de parution: {annonce.creation_date}
                </Typography>
                <Typography variant="body1" component="div" align="center">
                  {annonce.description}
                </Typography>
                <Typography variant="body1" component="div" align="center">
                  {annonce.company}
                </Typography>
                <Typography variant="h5" component="div" align="center">
                  {annonce?.is_apply ? "Vous n'avez pas encore postulé" : "Vous avez postulé!"}
                </Typography>
                <Box display="flex" justifyContent="center" gap ={1} mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                  >
                    Consulter l'annonce
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleApply(annonce.idFavorites, isApply)}
                  >
                    Postuler à l'annonce
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(annonce.idFavorites)}
                  >
                    Supprimer des favoris
                  </Button>
                </Box>
              </CardContent>
            </Card>
            </Grid>
          ))}
          </Grid>
        </Box>
    </Box>
  ) : (
    <div>
      <div>
        <h1>Vous devez être connecté pour accéder à cette page</h1>
        <h1>Vous allez être redirigé vers la page de connexion</h1>
        <SignInModule />
      </div>
    </div>
  );
}

export default FavoritesPage;
