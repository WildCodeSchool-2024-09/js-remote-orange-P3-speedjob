import AboutHome from "../components/home/aboutHome";
import RandomArticle from "../components/home/randomArticle";
import RandomJob from "../components/home/randomJob";

import Stack from "@mui/material/Stack";

function Home() {
  return (
    <section>
      <Stack spacing={0} margin={0} gap={0}>
        <RandomJob />
        <RandomArticle />
        <AboutHome />
      </Stack>
    </section>
  );
}

export default Home;
