import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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

  return (
    <Paper>
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
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.id}</TableCell>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.light_description}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(job.id)}
                >
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CheckJob;
