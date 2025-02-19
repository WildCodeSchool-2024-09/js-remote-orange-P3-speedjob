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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

function CompanyInfoUpdateModule() {
  const { user } = useAuth();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [light_description, setLight_description] = useState("");
  const [complete_description, setComplete_description] = useState("");
  const [siret_number, setSiret_number] = useState("");
  const [cedex_number, setCedex_number] = useState("");
  const [raison_social, setRaison_social] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function handleUpdate() {
    if (!user) {
      console.error("User is not defined");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/api/user/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        street_name,
        postcode,
        city,
        phone_number,
        light_description,
        complete_description,
        siret_number,
        cedex_number,
        raison_social,
      }),
    }).then((response) => {
      if (response.status === 204) {
        navigate("/companyInfo");
      }
    });
  }

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
            Vos informations d'entreprise
          </Typography>
          <Typography variant="h6" component="h2" align="center" sx={{ mt: 2 }}>
            Modifier vos informations:
          </Typography>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            mt={2}
          >
            <TextField
              label="Prénom"
              type="text"
              name="firstname"
              value={firstname}
              placeholder={user?.firstname}
              onChange={(e) => setFirstname(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Nom"
              type="text"
              name="lastname"
              value={lastname}
              placeholder={user?.lastname}
              onChange={(e) => setLastname(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Email"
              type="text"
              name="email"
              value={email}
              placeholder={user?.email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Nom de rue"
              type="text"
              name="address"
              value={street_name}
              placeholder={user?.street_name}
              onChange={(e) => setStreet_name(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Code Postal"
              type="text"
              name="postalCode"
              value={postcode}
              placeholder={user?.postcode}
              onChange={(e) => setPostcode(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Ville"
              type="text"
              name="city"
              value={city}
              placeholder={user?.city}
              onChange={(e) => setCity(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Numéro de téléphone"
              type="text"
              name="phone_number"
              value={phone_number}
              placeholder={user?.phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Description courte"
              type="text"
              name="light_description"
              value={light_description}
              placeholder={user?.light_description}
              onChange={(e) => setLight_description(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Description complète"
              type="text"
              name="complete_description"
              value={complete_description}
              placeholder={user?.complete_description}
              onChange={(e) => setComplete_description(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Numéro SIRET"
              type="text"
              name="siret_number"
              value={siret_number}
              placeholder={user?.siret_number}
              onChange={(e) => setSiret_number(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Numéro CEDEX"
              type="text"
              name="cedex_number"
              value={cedex_number}
              placeholder={user?.cedex_number}
              onChange={(e) => setCedex_number(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Raison sociale"
              type="text"
              name="raison_social"
              value={raison_social}
              placeholder={user?.raison_social}
              onChange={(e) => setRaison_social(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 1 }}
              type="button"
              onClick={handleUpdate}
            >
              Sauvegarder
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 1, mb: 2 }}
              type="button"
              component={Link}
              to="/myProfilEn"
            >
              Retour en arrière
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CompanyInfoUpdateModule;
