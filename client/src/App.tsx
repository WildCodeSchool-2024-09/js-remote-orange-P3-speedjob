import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/header_footer/footer";
import Header from "./components/header_footer/header";
import AboutHome from "./components/home/aboutHome";
import Legal from "./components/legal/legal";
import AboutPage from "./pages/aboutPage";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Jobboard from "./pages/jobboard";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Result from "./pages/resultPage";
import SignIn from "./pages/signIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/aboutHome" element={<AboutHome />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobboard" element={<Jobboard />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
