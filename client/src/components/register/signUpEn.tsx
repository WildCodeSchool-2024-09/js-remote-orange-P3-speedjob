import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpEn = () => {
  const [lightDescription, setLightDescription] = useState("");
  const [completeDescription, setCompleteDescription] = useState("");
  const [siretNumber, setSiretNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [cedexNumber, setCedexNumber] = useState("");
  const [raisonSocial, setRaisonSocial] = useState("");
  const [logo, setLogo] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("lightDescription", lightDescription);
    formData.append("completeDescription", completeDescription);
    formData.append("siretNumber", siretNumber);
    formData.append("phoneNumber", phoneNumber);
    formData.append("streetNumber", streetNumber);
    formData.append("streetName", streetName);
    formData.append("postCode", postCode);
    formData.append("city", city);
    formData.append("cedexNumber", cedexNumber);
    formData.append("raisonSocial", raisonSocial);
    if (logo) {
      formData.append("logo", logo);
    }

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        "http://localhost:3310/api/company",
        requestOptions,
      );
      if (response.ok) {
        alert("Inscription réussie !");
      } else {
        alert("Erreur lors de l'inscription.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'inscription.");
    }
  };

  return (
    <section id="signUpEn">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="16px"
          bgcolor="transparent"
          boxShadow="none"
          color="text.primary"
          maxWidth="600px"
          p={2}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight="fontWeightBold"
            gutterBottom
          >
            Sign Up Entreprise
          </Typography>
          <TextField
            label="Light Description"
            value={lightDescription}
            onChange={(e) => setLightDescription(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            label="Complete Description"
            value={completeDescription}
            onChange={(e) => setCompleteDescription(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
            multiline
            rows={4}
          />
          <TextField
            label="SIRET Number"
            value={siretNumber}
            onChange={(e) => setSiretNumber(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            label="Street Number"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            label="Street Name"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            label="Post Code"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            label="Cedex Number"
            value={cedexNumber}
            onChange={(e) => setCedexNumber(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            label="Raison Social"
            value={raisonSocial}
            onChange={(e) => setRaisonSocial(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <Box mt={2}>
            <Typography
              variant="body1"
              component="label"
              display="block"
              gutterBottom
            >
              Logo
            </Typography>
            <input
              type="file"
              onChange={(e) =>
                setLogo((e.target as HTMLInputElement).files?.[0] || null)
              }
            />
          </Box>
          <Link to="/signIn" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 2 }}
              fullWidth
            >
              Submit
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  );
};

export default SignUpEn;
