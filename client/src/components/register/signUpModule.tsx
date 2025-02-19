import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpModule = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const login = `${firstname}.${lastname}`.toLowerCase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [role, setRole] = useState({ societe: false, candidat: false });
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole({
      ...role,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "firstname") {
      setFirstname(value);
      if (value.length < 3) {
        setError("Le prénom doit contenir au moins 3 caractères");
      } else {
        setError("");
      }
    }
  };

  const handleCreateAccount = () => {
    const selectedRole = role.societe ? "societe" : "candidat";
    const userData = {
      firstname: firstname,
      lastname: lastname,
      login: login,
      email: email,
      password: password,
      checkedPassword: checkedPassword,
      role: selectedRole,
      checked: checked,
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/signIn");
      });
  };

  const handleSubmit = () => {
    handleCreateAccount();
  };

  return (
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
            Inscription
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            display="flex"
            flexDirection="column"
            gap={2}
            mt={2}
          >
            <TextField
              label="Prénom"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              label="Nom"
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
                handleChange(e);
              }}
              margin="normal"
              required
            />
            {error && <Typography color="error">{error}</Typography>}
            <TextField
              label="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              margin="normal"
              disabled
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              label="Confirmer le mot de passe"
              type="password"
              value={checkedPassword}
              onChange={(e) => setCheckedPassword(e.target.value)}
              margin="normal"
            />
            <Box display="flex" flexDirection="row">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={role.societe}
                    onChange={handleRoleChange}
                    name="societe"
                    disabled={role.candidat}
                  />
                }
                label="Société"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={role.candidat}
                    onChange={handleRoleChange}
                    name="candidat"
                    disabled={role.societe}
                  />
                }
                label="Candidat"
              />
            </Box>
            <FormControlLabel
              control={
                <Checkbox checked={checked} onChange={handleCheckboxChange} />
              }
              label="J'accepte les termes et conditions"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
              onClick={handleSubmit}
            >
              Soumettre
            </Button>
            <Typography variant="body2" align="center" mt={2}>
              Vous avez déjà un compte ?{" "}
              <Link
                to="/SignIn"
                style={{
                  fontWeight: "bold",
                  color: "#1976d2",
                  textDecoration: "none",
                }}
              >
                Connexion
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUpModule;
