import {
  Box,
  Container,
  Typography,
  Button,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import logoblackwhite from "../../assets/images/logoblackwhite.png";

const AboutHome = () => {
  return (
    <Box py={8} bgcolor="grey.100">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="100%"
              image={logoblackwhite}
              alt="SpeedJob"
              style={{ borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                align="center"
              >
                À propos de SpeedJob
              </Typography>
              <Typography variant="body1" paragraph align="center">
                SpeedJob est une plateforme en ligne dédiée à la mise en
                relation entre les entreprises et les candidats à la recherche
                d'emploi. Notre mission est de simplifier et d'accélérer le
                processus de recrutement en offrant aux entreprises la
                possibilité de publier facilement des offres d'emploi et aux
                candidats de postuler directement en quelques clics. Nous
                proposons une interface conviviale et intuitive qui permet à
                chaque utilisateur de naviguer de manière fluide et efficace.
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" color="primary" href="./about">
                  En savoir plus
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHome;

