import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";

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
  const [formData, setFormData] = useState({
    lightDescription: "",
    completeDescription: "",
    siretNumber: "",
    phoneNumber: "",
    streetNumber: "",
    streetName: "",
    postCode: "",
    city: "",
    cedexNumber: "",
    raisonSocial: "",
    checked: false,
  });

  const handleSubmit = () => {
    setFormData({
      lightDescription: lightDescription,
      completeDescription: completeDescription,
      siretNumber: siretNumber,
      phoneNumber: phoneNumber,
      streetNumber: streetNumber,
      streetName: streetName,
      postCode: postCode,
      city: city,
      cedexNumber: cedexNumber,
      raisonSocial: raisonSocial,
      checked: formData.checked,
    });
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
          <Typography variant="body2" align="center" mt={4}>
            Already have an account?{" "}
            <Link
              to="/SignIn"
              style={{
                fontWeight: "bold",
                color: "#1976d2",
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default SignUpEn;
