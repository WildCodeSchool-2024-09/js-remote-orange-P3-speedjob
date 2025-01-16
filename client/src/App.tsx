import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/header_footer/footer";
import Header from "./components/header_footer/header";
import AboutHome from "./components/home/aboutHome";

import CheckConnexionProvider from "./context/checkConnexion";

import AboutPage from "./pages/aboutPage";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Jobboard from "./pages/jobboard";
import LegalPage from "./pages/legalPage";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Result from "./pages/resultPage";
import SignIn from "./pages/signIn";
import SignUpEntreprise from "./pages/signUpEntreprise";

function App() {
  return (
    <Router>
      <div className="App">
        <CheckConnexionProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/aboutHome" element={<AboutHome />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobboard" element={<Jobboard />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUpEntreprise" element={<SignUpEntreprise />} />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CheckConnexionProvider>
      </div>
    </Router>
  );
}

export default App;
