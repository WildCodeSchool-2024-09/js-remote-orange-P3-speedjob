import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

function UserInfoModule() {
  const { user } = useAuth();

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
            type="button"
          >
            Modifier
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            type="button"
          >
            Supprimer
          </Button>
        </form>
      </Box>
    </>
  );
}

export default UserInfoModule;
