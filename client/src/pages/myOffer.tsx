import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

interface AnnoncesProps {
  id: number;
  user_id: number;
  title: string;
  light_description: string;
}

const CheckJob = () => {
  const { user } = useAuth();
  const [annonces, setAnnonces] = useState<AnnoncesProps[]>([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  useEffect(() => {
    if (user) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/annonces/by-user`, {
          params: { user_id: user.id },
        })
        .then((response) => {
          setAnnonces(response.data as AnnoncesProps[]);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des annonces:", error);
        });
    }
  }, [user]);

  const handleDelete = (id: number) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/annonces/${id}`)
      .then(() => {
        setAnnonces(annonces.filter((annonce) => annonce.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'annonce:", error);
      });
  };

  const handleClickOpenConfirm = (id: number) => {
    setSelectedJobId(id);
    setConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    setConfirmOpen(false);
    setSelectedJobId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedJobId !== null) {
      handleDelete(selectedJobId);
    }
    handleCloseConfirm();
  };

  return (
    <Paper>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
      </Box>
      <Grid container spacing={2} mt={2}>
        {annonces.map((annonce) => (
          <Grid item xs={12} sm={6} md={4} key={annonce.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardHeader title={annonce.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  {annonce.light_description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: "red" }}
                  onClick={() => handleClickOpenConfirm(annonce.id)}
                >
                  Supprimer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={confirmOpen} onClose={handleCloseConfirm}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer cette annonce ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">
            Annuler
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="secondary"
            sx={{ color: "red" }}
          >
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default CheckJob;