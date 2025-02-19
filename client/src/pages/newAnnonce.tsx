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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Assurez-vous d'importer votre hook useAuth

type NewAnnonces = {
  title: string;
  light_description: string;
  complete_description: string;
  remuneration: string;
  experience: string;
  work: string;
  field: string;
  user_id: number;
  is_apply?: boolean;
};

function NewAnnonce() {
  const { user } = useAuth(); // Utilisez le hook useAuth pour obtenir les informations de l'utilisateur
  const [newAnnonces, setNewAnnonces] = useState<NewAnnonces>({
    title: "",
    light_description: "",
    complete_description: "",
    remuneration: "",
    experience: "",
    work: "",
    field: "",
    user_id: user?.id ?? 0, // Utilisez l'ID de l'utilisateur récupéré par le hook useAuth, ou 0 si user est null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {}, [user]);

  const handleSubmit = async () => {
    if (!user) {
      setError("Utilisateur non authentifié.");
      return;
    }

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
      const annonceToSubmit = {
        ...newAnnonces,
        user_id: user.id, // Utilisez explicitement user.id ici
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/annonces`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(annonceToSubmit),
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
            maxWidth: isMobile ? 400 : 550,
            width: "100%",
            padding: isMobile ? 4 : 5,
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
