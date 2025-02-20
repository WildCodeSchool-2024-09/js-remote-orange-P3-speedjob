import { Box, Button, Container, TextField, Typography } from "@mui/material";
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
  role: 'candidat' | 'societe';
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

function SignInModule() {
  const { user } = useAuth();
  const { handleLogin, handleLogout, isAuth, message } = useAuth();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState("password");
  const [firstname, setFirstname] = useState([] as UserProps[]);

  if (isAuth && user && user.role !== 'candidat') {
    return <Navigate to="/signInEntreprise" />;
  }

  return (
    <>
      {isAuth ? (
        <Container
          id="signInModule"
          maxWidth="sm"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={4}
          >
            <Typography variant="h4" component="h1" gutterBottom>
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
                to="/jobboard"
              >
                Consulter les offres d'emplois
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
                component={Link}
                to="/blog"
              >
                Consulter les articles
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
                component={Link}
                to="/favorite"
              >
                Consulter mes annonces favorites
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
                component={Link}
                to="/blog"
              >
                Consulter mes articles favorites
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
                component={Link}
                to="/userInfo"
              >
                Consulter / Modifier mes informations personnelles
              </Button>
            </Box>

            <div>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
                onClick={handleLogout}
              >
                Je me déconnecte
              </Button>
            </div>
          </Box>
        </Container>
      ) : (
        <Container
          id="signInModule"
          maxWidth="sm"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          {message && <div style={{ color: "red" }}>{message}</div>}
          <form
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
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
          </form>
          <div>
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
          </div>
          <div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
              onClick={() => setType(type === "password" ? "text" : "password")}
            >
              {type === "password" ? "Afficher" : "Cacher"} mon mot de passe
            </Button>
          </div>
          <div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
              onClick={() => handleLogin(login, password)}
            >
              Je me connecte
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
              component={Link}
              to="/signUp"
            >
              Je crée mon compte
            </Button>
          </div>
        </Container>
      )}
    </>
  );
}

export default SignInModule;
