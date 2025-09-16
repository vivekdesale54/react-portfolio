import React from "react";
import Aboutus from "./pages/aboutus";
import GlobalStyle from "./components/globalstyle";
import Nav from "./components/nav";
import Contactus from "./pages/contactus";
import OurWork from "./pages/ourwork";
import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/moviedetail";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/scrolltop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Aboutus />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
