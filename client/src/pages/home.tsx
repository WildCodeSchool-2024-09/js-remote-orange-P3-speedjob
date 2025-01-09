import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Links to:</h2>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/legal">Legal</Link>
    </div>
  );
}

export default Home;
