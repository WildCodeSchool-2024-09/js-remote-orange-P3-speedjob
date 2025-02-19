import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

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
  role: "candidat" | "societe";
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

const SignInEn = () => {
  const { user } = useAuth();
  const { handleLogin, handleLogout, isAuth, message } = useAuth();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState("password");
  const [firstname, setFirstname] = useState([] as UserProps[]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isAuth && user && user.role !== "societe") {
    return <Navigate to="/signInEntreprise" />;
  }

  return (
    <>
      {isAuth ? (
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
                Bonjour {user?.firstname}, voici les actions possibles:
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={4}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/newAnnonce"
                >
                  Crée une nouvelle annonce
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/myOffer"
                >
                  Gérer mes offres
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/seeCandidate"
                >
                  Voir les candidatures
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/myProfilEn"
                >
                  Modifier mes informations
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: 2 }}
                  onClick={handleLogout}
                >
                  Deconnexion
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
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
                Connexion
              </Typography>
              {message && (
                <Typography color="error" align="center">
                  {message}
                </Typography>
              )}
              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin(login, password);
                }}
                display="flex"
                flexDirection="column"
                gap={2}
                mt={2}
              >
                <TextField
                  fullWidth
                  margin="dense"
                  id="login"
                  label="Login"
                  variant="outlined"
                  value={login}
                  type="text"
                  name="login"
                  onChange={(e) => setLogin(e.target.value)}
                />
                <TextField
                  fullWidth
                  margin="dense"
                  id="password"
                  label="Mot de passe"
                  variant="outlined"
                  type={type}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="button"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    setType(type === "password" ? "text" : "password")
                  }
                >
                  {type === "password" ? "Afficher" : "Cacher"} mon mot de passe
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: 2 }}
                >
                  Se connecter
                </Button>
              </Box>
              <Typography variant="body2" align="center" mt={2}>
                Vous n'avez pas de compte ?{" "}
                <Link
                  to="/signUp"
                  style={{
                    fontWeight: "bold",
                    color: "#1976d2",
                    textDecoration: "none",
                  }}
                >
                  Créer un compte
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default SignInEn;
