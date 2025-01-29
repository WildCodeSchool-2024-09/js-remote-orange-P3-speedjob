import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";

const SignInEn = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenue sur votre compte
      </Typography>
      <Typography variant="body1" gutterBottom>
        Vous êtes connecté en tant qu'entreprise.
      </Typography>
      <Link to="/newAnnonce" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Crée une nouvelle annonce
        </Button>
      </Link>
      <Link to="/myOffer" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Gérer mes offres
        </Button>
      </Link>
      <Link to="/seeCandidate" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Voir les candidatures
        </Button>
      </Link>
      <Link to="/myProfilEn" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Modifier mes informations
        </Button>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Deconnexion
        </Button>
      </Link>
    </Box>
  );
};
export default SignInEn;
