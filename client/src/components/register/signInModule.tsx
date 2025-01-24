import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

function SignInModule() {
  const { handleLogin, handleRegister, handleLogout, isAuth, message } =
    useAuth();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState("password");

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
              Salut {login}
            </Typography>

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
              onClick={() => handleRegister(login, password)}
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
