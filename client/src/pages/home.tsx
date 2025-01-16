import AboutHome from "../components/home/aboutHome";
import RandomArticle from "../components/home/randomArticle";
import RandomJob from "../components/home/randomJob";

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
