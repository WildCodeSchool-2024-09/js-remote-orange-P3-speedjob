import "./App.css";
import Footer from "./components/footer";
import Latestnews from "./components/latestnews";
import Menu from "./components/menu";
import Searchbar from "./components/searchbar";
import Legal from "./components/legal";


function App() {
  return (
    <div className="App">
      <Searchbar />
      <Latestnews />
      <Menu />
      <Footer />
      <Legal />
    </div>
  );
}

export default App;
