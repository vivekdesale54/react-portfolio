import React from 'react';
import Aboutus from './pages/aboutus';
import GlobalStyle from './components/globalstyle';
import Nav from './components/nav';
import Contactus from './pages/contactus';
import OurWork from './pages/ourwork';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from "./pages/moviedetail"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Aboutus />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail/>} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
