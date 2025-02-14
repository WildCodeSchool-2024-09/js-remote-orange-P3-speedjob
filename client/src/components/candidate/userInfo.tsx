import { Box, Button, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

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
  postcode: string;
  city: string;
  phone_number: number;
  cv_link: string;
  lm_link: string;
  picture: string;
};

function UserInfoModule() {
  const { user } = useAuth();
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/${user.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 204) {
        navigate("/");
      }
    });
    setOpen(false);
  };

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
            <Typography variant="body1">CV:</Typography>
              <a
                href={user?.cv_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user?.cv_link ? "Voir le CV" : "Aucun CV disponible"}
              </a>
            </Box>
            <Box>
              <Typography variant="body1">Lettre de motivation:</Typography>
              <a
                href={user?.lm_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user?.lm_link
                  ? "Voir la lettre de motivation"
                  : "Aucune lettre de motivation disponible"}
              </a>
            </Box>
            <Box>
              <Typography variant="body1">Photo de profil:</Typography>
              <a
                href={user?.picture || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user?.picture
                  ? "Voir la photo de profil"
                  : "Aucune photo de profil disponible"}
              </a>
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
            variant="outlined"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            type="button"
            component={Link}
            to="/signIn"
          >
            Retour en arrière
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 3, mb: 2 }}
            type="button"
            onClick={handleClickOpen}
          >
            Supprimer
          </Button>
        </form>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Voulez-vous vraiment supprimer votre compte ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UserInfoModule;