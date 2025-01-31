import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type UserProps = {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  email: string;
  creation_date: string;
  modification_date: string;
  name_street: string;
  postcode: string;
  city: string;
  isAdmin: boolean;
  role_id: number;
  admin_id: number;
  token: string;
};

function UserInfoUpdateModule() {
  const { user }: { user: UserProps | null } = useAuth();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  function handleUpdate() {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname }),
    }).then((response) => {
      if (response.status === 204) {
        navigate("/userInfo");
      }
    });
  }

  return (
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
        <h2>Modifier vos informations:</h2>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            label="Prénom"
            type="text"
            name="firstname"
            value={firstname}
            placeholder={user?.firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            label="Nom"
            type="text"
            name="lastname"
            value={lastname}
            placeholder={user?.lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            label="Email"
            type="text"
            name="email"
            value={email}
            placeholder={user?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Adresse"
            type="text"
            name="address"
            value={street_name}
            placeholder={user?.street_name}
            onChange={(e) => setStreet_name(e.target.value)}
          />
          <TextField
            label="Code Postal"
            type="text"
            name="postalCode"
            value={postcode}
            placeholder={user?.postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          <TextField
            label="Ville"
            type="text"
            name="city"
            value={city}
            placeholder={user?.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          type="button"
          onClick={handleUpdate}
        >
          Sauvegarder
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          type="button"
          component={Link}
          to="/userInfo"
        >
          Retour en arrière
        </Button>
      </Box>
    </>
  );
}

export default UserInfoUpdateModule;
