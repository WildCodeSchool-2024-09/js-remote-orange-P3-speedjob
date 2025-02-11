import {
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

interface User {
  id: number;
  lastname: string;
  firstname: string;
  role: string;
}

const CheckUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/user`)
      .then((response) => {
        setUsers(response.data as User[]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateur:", error);
      });
  }, []);

  const handleDelete = (id: number) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/user/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'utilisateur:", error);
      });
  };

  const handleClickOpen = (id: number) => {
    setSelectedUserId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUserId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedUserId !== null) {
      handleDelete(selectedUserId);
    }
    handleClose();
  };

  return (
    <Paper>
      <Grid container spacing={2} mt={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardHeader title={`${user.firstname} ${user.lastname}`} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  Rôle: {user.role}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: "red" }}
                  onClick={() => handleClickOpen(user.id)}
                >
                  Supprimer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer cet utilisateur ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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

export default CheckUser;
