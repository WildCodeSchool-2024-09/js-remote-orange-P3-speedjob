import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
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
        console.error("Erreur lors de la suppression de l'articles:", error);
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

  return (
    <Paper>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="primary" onClick={handleCreate}>
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Titre</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell>{article.id}</TableCell>
              <TableCell>{article.title}</TableCell>
              <TableCell>{article.light_description}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(article.id)}
                >
                  Supprimer
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEdit(article)}
                >
                  Modifier
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CheckArticles;
