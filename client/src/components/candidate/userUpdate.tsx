import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

function UserInfoUpdateModule() {
  const { user } = useAuth();
  const [userData, setUserData] = ("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  console.log(firstname);


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
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
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
               
              />
              <TextField
              label="Ville"
              type="text"
              name="city"
              placeholder={user?.city}
              />
            </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{mt:3, mb:2}}
            type="button"
            >
            Sauvegarder
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{mt:3, mb:2}}
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
