import "./App.css";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Searchbar from "./components/searchbar";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
