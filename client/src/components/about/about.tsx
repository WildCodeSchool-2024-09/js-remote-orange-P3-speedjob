import { Link } from "react-router-dom";
import AboutMap from "./aboutMap";
import { Container, Typography, Box, Button, Paper } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        my={4}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          À propos de SpeedJob
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img
              src="./src/assets/images/logoblackwhite.png"
              alt="logo speedJob"
              style={{ width: "10rem", height: "8rem", padding: "1rem" }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "1.2rem",
                color: "#333",
                lineHeight: 1.6,
                mb: 2,
                display: "inline",
              }}
            >
              SpeedJob est une plateforme en ligne dédiée à la mise en relation
              entre les entreprises et les candidats à la recherche d'emploi.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "1.2rem",
                color: "#333",
                lineHeight: 1.6,
                mb: 2,
                display: "inline",
              }}
            >
              Notre mission est de simplifier et d'accélérer le processus de
              recrutement en offrant aux entreprises la possibilité de publier
              facilement des offres d'emploi et aux candidats de postuler
              directement en quelques clics.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "1.2rem",
                color: "#333",
                lineHeight: 1.6,
                mb: 2,
                display: "inline",
              }}
            >
              Nous proposons une interface conviviale et intuitive qui permet à
              chaque utilisateur de naviguer de manière fluide et efficace.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "1.2rem",
                color: "#333",
                lineHeight: 1.6,
                mb: 2,
                display: "inline",
              }}
            >
              Que vous soyez un employeur à la recherche de nouveaux talents ou
              un candidat cherchant à saisir de nouvelles opportunités
              professionnelles, SpeedJob est la solution idéale pour répondre à
              vos besoins.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "1.2rem",
                color: "#333",
                lineHeight: 1.6,
                mb: 2,
                display: "inline",
              }}
            >
              Avec des fonctionnalités avancées de filtrage et de recherche,
              nous mettons un point d'honneur à vous fournir les meilleurs
              outils pour trouver ce que vous recherchez, qu'il s'agisse d'une
              entreprise innovante ou d'un poste adapté à vos compétences.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "1.2rem",
                color: "#333",
                lineHeight: 1.6,
                mb: 2,
                display: "inline",
              }}
            >
              Chez SpeedJob, nous croyons en l'importance de l'efficacité, de la
              transparence et de la simplicité dans le processus de recrutement,
              et nous nous engageons à vous accompagner dans vos projets
              professionnels.
            </Typography>
          </Box>
        </Paper>
        <Box mb={4}>
          <AboutMap />
        </Box>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Contactez-nous
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default About;
