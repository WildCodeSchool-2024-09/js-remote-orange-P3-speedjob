import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type UserProps = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  street_name: string;
  postcode: string;
  city: string;
  cv_link: string;
  lm_link: string;
};

function UserInfoUpdateModule() {
  const { user }: { user: UserProps | null } = useAuth();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [cvLink, setCvLink] = useState<File | null>(null);
  const [lmLink, setLmLink] = useState<File | null>(null);
  const navigate = useNavigate();

  function handleUpdate() {
    if (!user) {
      console.error("User is not defined");
      return;
    }

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("street_name", street_name);
    formData.append("postcode", postcode);
    formData.append("city", city);


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
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          width="100%"
          maxWidth="sm"
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
          <Box mt={2}>
            <Typography
              variant="body1"
              component="label"
              display="block"
              gutterBottom
            >
              CV
            </Typography>
            <input
              type="file"
              onChange={(e) =>
                setCvLink((e.target as HTMLInputElement).files?.[0] || null)
              }
            />
          </Box>
          <Box mt={2}>
            <Typography
              variant="body1"
              component="label"
              display="block"
              gutterBottom
            >
              Lettre de motivation
            </Typography>
            <input
              type="file"
              onChange={(e) =>
                setLmLink((e.target as HTMLInputElement).files?.[0] || null)
              }
            />
          </Box>
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
      </Box>
    </>
  );
}

export default UserInfoUpdateModule;
