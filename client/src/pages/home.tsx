import AboutHome from "../components/aboutHome";
import RandomArticle from "../components/randomArticle";
import RandomJob from "../components/randomJob";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center border-4 p-8">
      <RandomJob />
      <RandomArticle />
      <AboutHome />
    </div>
  );
}

export default Home;
