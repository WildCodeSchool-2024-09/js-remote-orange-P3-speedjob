import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";

const SignUpCa = () => {
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [cvLink, setCvLink] = useState<File | null>(null);
  const [lmLink, setLmLink] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    birthDate: "",
    phoneNumber: "",
    streetNumber: "",
    streetName: "",
    postCode: "",
    city: "",
    cvLink: "",
    lmLink: "",
    checked: false,
  });

  const handleSubmit = () => {
    setFormData({
      birthDate: birthDate,
      phoneNumber: phoneNumber,
      streetNumber: streetNumber,
      streetName: streetName,
      postCode: postCode,
      city: city,
      cvLink: cvLink ? cvLink.name : "",
      lmLink: lmLink ? lmLink.name : "",
      checked: formData.checked,
    });
  };

  return (
    <section id="signUpCa">
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
            Sign Up Candidat
          </Typography>
          <TextField
            label="Birth Date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
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
          <Box mt={2}>
            <Typography
              variant="body1"
              component="label"
              display="block"
              gutterBottom
            >
              Lien du CV
            </Typography>
            <input
              type="file"
              onChange={(e) =>
                setCvLink((e.target as HTMLInputElement).files?.[0] || null)
              }
              required
            />
          </Box>
          <Box mt={2}>
            <Typography
              variant="body1"
              component="label"
              display="block"
              gutterBottom
            >
              Lien de la lettre de motivation
            </Typography>
            <input
              type="file"
              onChange={(e) =>
                setLmLink((e.target as HTMLInputElement).files?.[0] || null)
              }
              required
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

export default SignUpCa;
