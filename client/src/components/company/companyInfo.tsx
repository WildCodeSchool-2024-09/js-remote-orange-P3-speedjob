import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type CompanyProps = {
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
  light_description: string;
  complete_description: string;
  siret_number: number;
  cedex_number: string;
  raison_social: string;
};

function CompanyInfoModule() {
  const { user } = useAuth();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  function handleDelete() {
    alert("Voulez-vous vraiment supprimer votre compte ?");
    fetch(`${import.meta.env.VITE_API_URL}/api/company/${user.id}`, {
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
          Informations de l'entreprise
        </Typography>
        <form>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Prénom"
              type="text"
              value={user?.firstname || ""}
              InputProps={{
                readOnly: true,
              }}
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
              label="Login"
              type="text"
              value={user?.login || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Mot de passe"
              type="password"
              value={user?.password || ""}
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
            <TextField
              label="Date de création"
              type="text"
              value={user?.creation_date || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Date de modification"
              type="text"
              value={user?.modification_date || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Admin"
              type="text"
              value={user?.isAdmin ? "Oui" : "Non"}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Rôle"
              type="text"
              value={user?.role || ""}
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
              value={user?.street_number || ""}
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
              label="Numéro de téléphone"
              type="text"
              value={user?.phone_number || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Numéro CEDEX"
              type="text"
              value={user?.cedex_number || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <Typography variant="h6" component="h2">
              Description
            </Typography>
            <TextField
              label="Description légère"
              type="text"
              value={user?.light_description || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Description complète"
              type="text"
              value={user?.complete_description || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Numéro SIRET"
              type="text"
              value={user?.siret_number || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Raison sociale"
              type="text"
              value={user?.raison_social || ""}
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
            to="/myProfilEnUpdate"
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

export default CompanyInfoModule;
