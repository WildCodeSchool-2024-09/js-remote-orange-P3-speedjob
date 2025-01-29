import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type NewAnnonces = {
  title: string;
  light_description: string;
  complete_description: string;
  remuneration: string;
  experience: string;
  work: string;
  field: string;
};

function NewAnnonce() {
  const [newAnnonces, setNewAnnonces] = useState<NewAnnonces>({
    title: "",
    light_description: "",
    complete_description: "",
    remuneration: "",
    experience: "",
    work: "",
    field: "",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(import.meta.env.VITE_API_URL);
    fetch(`${import.meta.env.VITE_API_URL}/api/annonces`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnnonces),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/annonces");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAnnonces((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="16px"
        bgcolor="transparent"
        boxShadow="none"
        color="text.primary"
      >
        <Typography
          variant="h4"
          component="h4"
          fontWeight="fontWeightBold"
          gutterBottom
        >
          Créez votre annonce
        </Typography>
        <TextField
          label="Poste"
          type="text"
          name="title"
          value={newAnnonces.title}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Petite déscription du poste"
          type="text"
          name="light_description"
          value={newAnnonces.light_description}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Déscription détailler du poste"
          type="text"
          name="complete_description"
          value={newAnnonces.complete_description}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Remunération /an"
          type="text"
          name="remuneration"
          value={newAnnonces.remuneration}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Exéprience requise"
          type="text"
          name="experience"
          value={newAnnonces.experience}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Temps de travail"
          type="text"
          name="work"
          value={newAnnonces.work}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Catégorie"
          type="text"
          name="field"
          value={newAnnonces.field}
          onChange={handleChange}
          margin="normal"
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Valider
        </Button>
      </Box>
    </Box>
  );
}

export default NewAnnonce;
