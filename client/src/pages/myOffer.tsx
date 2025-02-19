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
  TextField,
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
  complete_description: string;
  remuneration: string;
  experience: string;
  work: string;
  field: string;
}

const CheckJob = () => {
  const { user } = useAuth();
  const [annonces, setAnnonces] = useState<AnnoncesProps[]>([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<AnnoncesProps>>({});

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

  const handleClickOpenEdit = (annonce: AnnoncesProps) => {
    setSelectedJobId(annonce.id);
    setEditData(annonce);
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
    setSelectedJobId(null);
    setEditData({});
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirmEdit = () => {
    if (selectedJobId !== null) {
      axios
          .put(
            `${import.meta.env.VITE_API_URL}/api/annonces/${selectedJobId}`,
            editData,
          )
          .then(() => {
            setAnnonces((prevAnnonces) =>
              prevAnnonces.map((annonce) =>
                annonce.id === selectedJobId ? { ...annonce, ...editData } : annonce
              )
            );
            setEditOpen(false);
          })
          .catch((error) => {
            console.error("Erreur lors de la modification de l'annonce:", error);
          });
      }
    handleCloseEdit();
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClickOpenEdit(annonce)}
                >
                  Modifier
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
      <Dialog open={editOpen} onClose={handleCloseEdit}>
        <DialogTitle>Modifier l'annonce</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Titre"
            type="text"
            fullWidth
            name="title"
            value={editData.title || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            name="light_description"
            value={editData.light_description || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            multiline
            rows={6}
            label="Description complète"
            type="text"
            fullWidth
            name="complete_description"
            value={editData.complete_description || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="remuneration"
            type="text"
            fullWidth
            name="remuneration"
            value={editData.remuneration || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="Exéprience requise"
            type="text"
            fullWidth
            name="Exéprience requise"
            value={editData.experience || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="Temps de travail"
            type="text"
            fullWidth
            name="Temps de travail"
            value={editData.work || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="Catégorie"
            type="text"
            fullWidth
            name="Catégorie"
            value={editData.field || ""}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="primary">
            Annuler
          </Button>
          <Button
            onClick={handleConfirmEdit}
            color="primary"
          >
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default CheckJob;