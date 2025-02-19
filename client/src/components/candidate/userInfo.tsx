import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
  const { user, isAuth } = useAuth() as {
    user: UserProps | null;
    isAuth: boolean;
  };

  const [cvLink, setCvLink] = useState<File | null>(null);
  const [lmLink, setLmLink] = useState<File | null>(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding={2}
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Card
        sx={{
          maxWidth: isMobile ? 400 : 550,
          width: "100%",
          padding: isMobile ? 4 : 5,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#ffffff",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h5"
            fontWeight="bold"
            gutterBottom
            align="center"
            sx={{ color: "#1976d2" }}
          >
            Vos informations personnelles
          </Typography>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            gap={2}
            mt={2}
          >
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
              label="Téléphone"
              type="text"
              value={user?.phone_number || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <Typography variant="h6" component="h2">
              Documents de candidature
            </Typography>
            <Typography
              variant="body1"
              component="p"
              display="block"
              gutterBottom
            >
              CV
            </Typography>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setCvLink(e.target.files?.[0] || null)}
            />
            <Typography
              variant="body1"
              component="p"
              display="block"
              gutterBottom
            >
              Lettre de motivation
            </Typography>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setLmLink(e.target.files?.[0] || null)}
            />
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
          </Box>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
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
    </Box>
  );
}

export default UserInfoModule;