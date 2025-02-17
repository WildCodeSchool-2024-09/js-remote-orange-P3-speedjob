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

interface Job {
  id: number;
  title: string;
  light_description: string;
}

const CheckJob = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/annonces`)
      .then((response) => {
        setJobs(response.data as Job[]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des annonces:", error);
      });
  }, []);

  const handleDelete = (id: number) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/annonces/${id}`)
      .then(() => {
        setJobs(jobs.filter((job) => job.id !== id));
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

  const [query, setQuery] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Handle search
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    // Handle change
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // Handle click
  };

  return (
    <Paper>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="searchQuery">
              <TextField
                type="text"
                placeholder="Saisir l'ID, le titre ou la description de l'annonce"
                id="query"
                value={handleChange}
                onChange={handleChange}
                required
                variant="outlined"
                fullWidth
                sx={{
                  mt: 1,
                  mb: 2,
                  backgroundColor: "white",
                  fontSize: "1.25rem",
                }}
              />
            </label>
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleClick}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 }, p: 1.8 }}
              className="w-full md:w-auto"
            >
              Rechercher
            </Button>
          </div>
        </form>
      </Box>
      <Grid container spacing={2} mt={2}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardHeader title={job.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  {job.light_description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: "red" }}
                  onClick={() => handleClickOpenConfirm(job.id)}
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
