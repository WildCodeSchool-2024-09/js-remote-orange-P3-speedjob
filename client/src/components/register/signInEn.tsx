import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
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

const SignInEn = () => {
  const { user } = useAuth();
  const { handleLogin, handleLogout, isAuth, message } = useAuth();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState("password");
  const [firstname, setFirstname] = useState([] as UserProps[]);

  return (
    <Container
      maxWidth="sm"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {isAuth ? (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bienvenue sur votre compte
          </Typography>
          <Typography variant="body1" gutterBottom>
            Vous êtes connecté en tant qu'entreprise.
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Link
              to="/newAnnonce"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Crée une nouvelle annonce
              </Button>
            </Link>
            <Link
              to="/myOffer"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Gérer mes offres
              </Button>
            </Link>
            <Link
              to="/seeCandidate"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Voir les candidatures
              </Button>
            </Link>
            <Link
              to="/myProfilEn"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Modifier mes informations
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              fullWidth
              sx={{ mt: 2 }}
            >
              Deconnexion
            </Button>
          </Box>
        </Box>
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          {message && <div style={{ color: "red" }}>{message}</div>}
          <form
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(login, password);
            }}
            style={{ width: "100%" }}
          >
            <TextField
              fullWidth
              margin="normal"
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
              margin="normal"
              id="password"
              label="Password"
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
              onClick={() => setType(type === "password" ? "text" : "password")}
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
          </form>
          <Link to="/signUp" style={{ textDecoration: "none", width: "100%" }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Je crée mon compte
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
};

export default SignInEn;
