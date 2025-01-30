import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";

const SeeCandidate = () => {
  interface Candidate {
    id: number;
    name: string;
    info: string;
  }

  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const fetchCandidates = async () => {
    try {
      const response = await fetch("http://localhost:3310/api/upload");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setCandidates(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des candidatures:", error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Button variant="contained" onClick={fetchCandidates}>
        Voir les candidatures
      </Button>
      {candidates.length === 0 ? (
        <Typography>Aucune candidature trouvée.</Typography>
      ) : (
        candidates.map((candidate) => (
          <Box key={candidate.id} mt={2} p={2} border={1} width="50%">
            <Typography variant="h6">{candidate.name}</Typography>
            <Typography>{candidate.info}</Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default SeeCandidate;
