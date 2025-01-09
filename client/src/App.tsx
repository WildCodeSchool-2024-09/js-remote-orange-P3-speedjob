import "../src/assets/style/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Legal from "./pages/legal";
import Login from "./pages/login";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
