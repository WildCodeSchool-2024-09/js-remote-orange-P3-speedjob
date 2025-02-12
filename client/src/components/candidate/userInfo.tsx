import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function UserInfoModule() {
  const { user, isAuth } = useAuth() as {
    user: UserProps | null;
    isAuth: boolean;
  };
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
              value={user.firstname}
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
            <TextField
              label="CV"
              type="text"
              value={user?.cv_link || ""}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Lettre de motivation"
              type="text"
              value={user?.lm_link || ""}
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
            onClick={handleDelete}
          >
            Supprimer
          </Button>
        </form>
      </Box>
    </>
  );
}

export default UserInfoModule;
