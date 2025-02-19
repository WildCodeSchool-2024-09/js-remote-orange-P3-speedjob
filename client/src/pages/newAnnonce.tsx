import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <section id="newAnnonce">
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
            maxWidth: isMobile ? 300 : 400,
            width: "100%",
            padding: isMobile ? 2 : 3,
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
              Créez votre annonce
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => e.preventDefault()}
              display="flex"
              flexDirection="column"
              gap={2}
              mt={2}
            >
              <TextField
                label="Poste"
                type="text"
                name="title"
                value={newAnnonces.title}
                onChange={handleChange}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Petite déscription du poste"
                type="text"
                name="light_description"
                value={newAnnonces.light_description}
                onChange={handleChange}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Déscription détailler du poste"
                type="text"
                name="complete_description"
                value={newAnnonces.complete_description}
                onChange={handleChange}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Remunération /an"
                type="text"
                name="remuneration"
                value={newAnnonces.remuneration}
                onChange={handleChange}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Exéprience requise"
                type="text"
                name="experience"
                value={newAnnonces.experience}
                onChange={handleChange}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Temps de travail"
                type="text"
                name="work"
                value={newAnnonces.work}
                onChange={handleChange}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Catégorie"
                type="text"
                name="field"
                value={newAnnonces.field}
                onChange={handleChange}
                margin="normal"
                fullWidth
              />
              {error && (
                <Typography color="error" variant="body2" align="center">
                  {error}
                </Typography>
              )}
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                disabled={loading}
                fullWidth
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Valider"
                )}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}

export default NewAnnonce;
