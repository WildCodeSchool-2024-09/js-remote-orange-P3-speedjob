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

interface Articles {
  id: number;
  title: string;
  light_description: string;
  compl_description: string;
}

const CheckArticles = () => {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [open, setOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Articles | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const fetchArticles = () => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/articles`)
        .then((response) => {
          setArticles(response.data as Articles[]);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des articles:", error);
        });
    };

    fetchArticles();
  }, []);

  const handleDelete = (id: number) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/articles/${id}`)
      .then(() => {
        setArticles(articles.filter((article) => article.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'article:", error);
      });
  };

  const handleEdit = (article: Articles) => {
    setCurrentArticle(article);
    setOpen(true);
  };

  const handleCreate = () => {
    setCurrentArticle({
      id: 0,
      title: "",
      light_description: "",
      compl_description: "",
    });
    setOpen(true);
  };

  const handleSave = () => {
    if (currentArticle) {
      if (currentArticle.id === 0) {
        // Create new article
        axios
          .post(`${import.meta.env.VITE_API_URL}/api/articles`, currentArticle)
          .then((response) => {
            setArticles([...articles, response.data as Articles]);
            setOpen(false);
          })
          .catch((error) => {
            console.error("Erreur lors de la création de l'article:", error);
          });
      } else {
        // Update existing article
        axios
          .put(
            `${import.meta.env.VITE_API_URL}/api/articles/${currentArticle.id}`,
            currentArticle,
          )
          .then(() => {
            setArticles(
              articles.map((article) =>
                article.id === currentArticle.id ? currentArticle : article,
              ),
            );
            setOpen(false);
          })
          .catch((error) => {
            console.error(
              "Erreur lors de la modification de l'article:",
              error,
            );
          });
      }
    }
  };

  const handleClickOpenConfirm = (id: number) => {
    setSelectedArticleId(id);
    setConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    setConfirmOpen(false);
    setSelectedArticleId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedArticleId !== null) {
      handleDelete(selectedArticleId);
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
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="searchQuery" className="flex flex-col items-center justify-center">
              <TextField
                type="text"
                placeholder="Saisir l'ID, le titre ou la description de l'article"
                id="query"
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  mt: 1,
                  mb: 2,
                  width: "200%",
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
      <Box display="flex" justifyContent="start-end" mt={2}>
        <Button variant="contained" color="outlined" onClick={handleCreate}>
          Créer un article
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {currentArticle?.id === 0 ? "Créer un article" : "Modifier l'article"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Titre"
            value={currentArticle?.title || ""}
            onChange={(e) =>
              setCurrentArticle({
                ...currentArticle,
                title: e.target.value,
              } as Articles)
            }
            fullWidth
            margin="dense"
          />
          <TextField
            label="Description courte"
            value={currentArticle?.light_description || ""}
            onChange={(e) =>
              setCurrentArticle({
                ...currentArticle,
                light_description: e.target.value,
              } as Articles)
            }
            fullWidth
            margin="dense"
            multiline
            rows={4}
          />
          <TextField
            label="Description complète"
            value={currentArticle?.compl_description || ""}
            onChange={(e) =>
              setCurrentArticle({
                ...currentArticle,
                compl_description: e.target.value,
              } as Articles)
            }
            fullWidth
            margin="dense"
            multiline
            rows={6}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Annuler
          </Button>
          <Button onClick={handleSave} color="primary">
            Sauvegarder
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={confirmOpen} onClose={handleCloseConfirm}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer cet article ?
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
      <Grid container spacing={2} mt={2}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardHeader title={article.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  {article.light_description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 2,
                }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEdit(article)}
                  sx={{ marginRight: 1 }}
                >
                  Modifier
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: "red" }}
                  onClick={() => handleClickOpenConfirm(article.id)}
                >
                  Supprimer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CheckArticles;
