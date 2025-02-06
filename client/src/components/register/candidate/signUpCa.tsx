import { Box, Button, TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpCa = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [cvLink, setCvLink] = useState<File | null>(null);
  const [lmLink, setLmLink] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!cvLink || !lmLink) {
      alert("Veuillez télécharger votre CV et votre lettre de motivation.");
      return;
    }

    // Convertir la date au format YYYY-MM-DD
    const formattedBirthDate = birthDate
      ? birthDate.toISOString().split("T")[0]
      : null;

    if (!formattedBirthDate) {
      alert("Veuillez entrer une date de naissance valide.");
      return;
    }

    const formdata = new FormData();
    formdata.append("birthdate", formattedBirthDate);
    formdata.append("phoneNumber", phoneNumber);
    formdata.append("streetNumber", streetNumber);
    formdata.append("streetName", streetName);
    formdata.append("postCode", postCode);
    formdata.append("city", city);
    if (cvLink) {
      formdata.append("cv", cvLink);
    }
    if (lmLink) {
      formdata.append("lm", lmLink);
    }

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        "http://localhost:3310/api/upload",
        requestOptions,
      );
      await response.text();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          component="form"
          onSubmit={handleSubmit}
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
          <DatePicker
            label="Date de naissance"
            value={birthDate}
            onChange={(newValue) => setBirthDate(newValue)}
            slotProps={{
              textField: { margin: "normal", fullWidth: true, size: "small" },
            }}
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
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            fullWidth
          >
            Submit
          </Button>
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
    </LocalizationProvider>
  );
};

export default SignUpCa;
