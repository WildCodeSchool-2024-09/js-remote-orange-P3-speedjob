import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
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
  company_id?: number;
  is_apply?: boolean;
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (
      !newAnnonces.title ||
      !newAnnonces.light_description ||
      !newAnnonces.complete_description
    ) {
      setError("Tous les champs doivent être remplis.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/annonces`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAnnonces),
        },
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'annonce");
      }

      //const data = await response.json();
      navigate("/jobboard");
    } catch (error) {
      setError("Erreur lors de la création de l'annonce");
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
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
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Valider"}
        </Button>
      </Box>
    </Box>
  );
}

export default NewAnnonce;
