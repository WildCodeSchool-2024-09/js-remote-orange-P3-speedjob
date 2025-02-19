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
import { Link, useNavigate } from "react-router-dom";
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
  role: string;
  street_number: number;
  street_name: string;
  postcode: string;
  city: string;
  phone_number: number;
  light_description: string;
  complete_description: string;
  siret_number: number;
  cedex_number: string;
  raison_social: string;
  token: string;
};

function UserInfoUpdateModule() {
  const { user }: { user: UserProps | null } = useAuth();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [street_number, setStreet_number] = useState(0);
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone_number, setPhone_number] = useState(0);
  const [light_description, setLight_description] = useState("");
  const [complete_description, setComplete_description] = useState("");
  const [siret_number, setSiret_number] = useState(0);
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

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("street_number", street_number);
    formData.append("street_name", street_name);
    formData.append("postcode", postcode);
    formData.append("city", city);
    formData.append("phone_number", user.phone_number.toString());
    formData.append("light_description", user.light_description);
    formData.append("complete_description", user.complete_description);
    formData.append("siret_number", user.siret_number.toString());
    formData.append("cedex_number", user.cedex_number);
    formData.append("raison_social", user.raison_social);


    console.log("User in Front=", user);

    fetch(`${import.meta.env.VITE_API_URL}/api/user/${user.id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => {
        if (response.status === 204) {
          navigate("/userInfo");
        } else {
          console.error("Erreur lors de la mise à jour de l'utilisateur");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
      });

    console.log("User after Fecth=", user);
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
            Vos informations personnelles
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
              label="Numéro de rue"
              type="number"
              name="street_number"
              value={street_number}
              placeholder={user?.street_number}
              onChange={(e) => setStreet_number(e.target.value)}
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
              to="/userInfo"
            >
              Retour en arrière
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserInfoUpdateModule;
