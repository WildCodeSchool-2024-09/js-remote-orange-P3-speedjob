import "../src/assets/style/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Legal from "./pages/legal";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
