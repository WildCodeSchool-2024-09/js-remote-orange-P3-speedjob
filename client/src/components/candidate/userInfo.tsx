import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
// import axios from "axios";

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
  role: string;
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

function UserInfoModule() {
  const { user } = useAuth();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  function handleDelete() {
    alert("Voulez-vous vraiment supprimer votre compte ?");
    fetch(`${import.meta.env.VITE_API_URL}/api/user/${user.id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.status === 204) {
          navigate("/");
        }
      });    
  }

  return isAuth === false ? (
    <Typography component="h1" variant="h5" gutterBottom>
      Vous devez être connecté pour accéder à cette page
    </Typography>
  ) : (
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
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Prénom"
              type="text"
              value={user?.firstname}
              variant="outlined"
            />
            <TextField
              label="Nom"
              type="text"
              value={user?.lastname || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              value={user?.email || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <Typography variant="h6" component="h2">
              Adresse
            </Typography>

            <TextField
              label="Numéro de rue"
              type="text"
              value={user?.number_street || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Nom de rue"
              type="text"
              value={user?.street_name || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Code postal"
              type="text"
              value={user?.postcode || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Ville"
              type="text"
              value={user?.city || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Téléphone"
              type="text"
              value={user?.phone || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <Typography variant="h6" component="h2">
              Documents de candidature
            </Typography>
            <TextField
              label="CV"
              type="text"
              value={user?.cvlink || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Lettre de motivation"
              type="text"
              value={user?.lmlink || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Photo de profil"
              type="text"
              value={user?.picture || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Box>
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
