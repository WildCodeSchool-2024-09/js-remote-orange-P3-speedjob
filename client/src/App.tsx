import "./App.css";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Searchbar from "./components/searchbar";
import Legal from "./components/legal";


function App() {
  return (
    <div className="App">
      <Searchbar />
      <Menu />
      <Footer />
      <Legal />
    </div>
  );
}

export default App;
