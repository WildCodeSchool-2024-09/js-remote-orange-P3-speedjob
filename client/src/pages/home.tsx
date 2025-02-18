import AboutHome from "../components/home/aboutHome";
import RandomArticle from "../components/home/randomArticle";
import RandomJob from "../components/home/randomJob";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

function Home() {
  return (
    <section >
      <Stack spacing={0} margin={0} gap={1} padding={0} bgcolor="grey.100" >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: "50 rem",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "top",
            padding: "0 rem",
            margin: "0 rem",
            spacing: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: { xs: "100%", md: "50%" },
              padding: "1rem",
            }}
          >
            <RandomJob />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: { xs: "100%", md: "50%" },
              padding: "1rem",
            }}
          >
            <RandomArticle />
          </Box>
        </Box>
        <AboutHome />
      </Stack>
    </section>
  );
}

export default Home;
