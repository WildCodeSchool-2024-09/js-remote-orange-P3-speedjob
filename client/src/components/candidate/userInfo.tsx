import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function UserInfoModule() {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleDelete() {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/${user.id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.status === 204) {
          navigate("/");
        }
      });    
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Vos informations personnelles
        </Typography>
        <form>
          <ul>
            <p>Prénom:{user?.firstname}</p>
            <p>Nom:{user?.lastname}</p>
            <p>email:{user?.email}</p>
            <p>date de création:{user?.creation_date}</p>
          </ul>
          <p>Adresse:</p>
          <p>Numero de rue:{user?.number_street}</p>
          <p>Nom de rue:{user?.street_name}</p>
          <p>Code postal:{user?.postcode}</p>
          <p>Ville:{user?.city}</p>
          <p>Téléphone:{user?.phone}</p>
          <p>CV: {user?.cvlink}</p>
          <p>Lettre de motivation:{user?.lmlink}</p>
          <p>Photo de profil:{user?.picture}</p>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            component={Link}
            to="/userInfoUpdate"
          >
            Modifier
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            type="button"
            onClick={handleDelete}
          >
            Supprimer
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            type="button"
            component={Link}
            to="/signIn"
          >
            Retour en arrière
          </Button>
        </form>
      </Box>
    </>
  );
}

export default UserInfoModule;
