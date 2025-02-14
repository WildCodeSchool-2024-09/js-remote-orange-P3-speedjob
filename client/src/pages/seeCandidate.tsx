import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

const SeeCandidate = () => {
  interface Candidate {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone_number: string;
    cv_link: string;
    lm_link: string;
  }

  const { user }: { user: string | null } = useAuth();
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    if (user) {
      fetchCandidates(Number.parseInt(user));
    }
  }, [user]);

  const fetchCandidates = (companyId: number) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/user?companyId=${companyId}`)
      .then((response) => {
        setCandidates(response.data as Candidate[]);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error,
        );
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Button
        variant="contained"
        onClick={() => user && fetchCandidates(Number.parseInt(user))}
      >
        Voir les candidatures
      </Button>
      {candidates.length === 0 ? (
        <Typography>Aucune candidature trouvée.</Typography>
      ) : (
        candidates.map((candidate) => (
          <Box key={candidate.id} mt={2} p={2} border={1} width="50%">
            <Typography variant="h6">
              {candidate.firstname} {candidate.lastname}
            </Typography>
            <Typography>Email: {candidate.email}</Typography>
            <Typography>Téléphone: {candidate.phone_number}</Typography>
            <Typography>
              CV: <a href={candidate.cv_link}>Télécharger</a>
            </Typography>
            <Typography>
              Lettre de motivation: <a href={candidate.lm_link}>Télécharger</a>
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default SeeCandidate;
