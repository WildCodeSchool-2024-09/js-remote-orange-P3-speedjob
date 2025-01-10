import RandomArticle from "../components/randomArticle";
import RandomJob from "../components/randomJob";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <RandomJob />
      <RandomArticle />
      <h2>About Us</h2>
    </div>
  );
}

export default Home;
