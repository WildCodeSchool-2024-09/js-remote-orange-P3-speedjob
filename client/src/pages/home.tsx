import RandomArticle from "../components/randomArticle";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Home</h1>
      <h2>Random Job</h2>
      <RandomArticle />
      <h2>About Us</h2>
    </div>
  );
}

export default Home;
