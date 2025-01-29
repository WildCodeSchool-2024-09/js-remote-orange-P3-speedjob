import { Typography, Box, Button } from "@mui/material";

const SignInCa = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenue sur votre compte
      </Typography>
      <Typography variant="body1" gutterBottom>
        Vous êtes connecté en tant que candidat.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("Déconnexion")}
      >
        Se déconnecter
      </Button>
    </Box>
  );
};

export default SignInCa;
