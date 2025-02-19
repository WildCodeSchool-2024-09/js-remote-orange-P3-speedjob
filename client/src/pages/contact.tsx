import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";

const Contact = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre message a bien été envoyé");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" gutterBottom>
          Contactez-nous
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Vous n'avez pas trouvé les réponses à vos questions sur notre site ou
          vous souhaitez nous contacter pour collaborer avec nous ? Écrivez-nous
          :
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Votre prénom"
              variant="outlined"
              fullWidth
              value={fName}
              onChange={(e) => setfName(e.target.value)}
              required
            />
            <TextField
              label="Votre nom"
              variant="outlined"
              fullWidth
              value={lName}
              onChange={(e) => setlName(e.target.value)}
              required
            />
            <TextField
              label="Votre email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Votre message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Envoyer le message
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;

