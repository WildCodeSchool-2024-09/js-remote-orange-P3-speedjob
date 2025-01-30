import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/header_footer/footer";
import Header from "./components/header_footer/header";
import AboutHome from "./components/home/aboutHome";

import CheckConnexionProvider from "./context/checkConnexion";
import SearchQueryProvider from "./context/searchQueryContext";

import AboutPage from "./pages/aboutPage";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Jobboard from "./pages/jobboard";
import LegalPage from "./pages/legalPage";
import MyOffer from "./pages/myOffer";
import MyProfilEn from "./pages/myProfilEn";
import NewAnnonce from "./pages/newAnnonce";
import NotFound from "./pages/notFound";
import Result from "./pages/resultPage";
import SeeCandidate from "./pages/seeCandidate";
import SignIn from "./pages/signIn";
import SignInCandidat from "./pages/signInCandidat";
import SignInEntreprise from "./pages/signInEntreprise";
import SignUp from "./pages/signUp";
import SignUpCandidat from "./pages/signUpCandidat";
import SignUpEntreprise from "./pages/signUpEntreprise";
import UserInfoPage from "./pages/userInfo";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SearchQueryProvider>
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
              <Route path="/myOffer" element={<MyOffer />} />
              <Route path="/myProfilEn" element={<MyProfilEn />} />
              <Route path="/newAnnonce" element={<NewAnnonce />} />
              <Route path="/seeCandidate" element={<SeeCandidate />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signInCandidat" element={<SignInCandidat />} />
              <Route path="/signInEntreprise" element={<SignInEntreprise />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signUpEntreprise" element={<SignUpEntreprise />} />
              <Route path="/signUpCandidat" element={<SignUpCandidat />} />
              <Route path="/userInfo" element={<UserInfoPage />} />
              <Route path="/result" element={<Result />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </CheckConnexionProvider>
        </SearchQueryProvider>
      </div>
    </Router>
  );
}

export default App;
