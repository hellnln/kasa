import React from "react";
import {
	Route,
   Routes
  } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/FicheLogement'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'

function Routing() {
    return (
       <div className="App">
          <Header />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/ficheLogement/:id" element={<Logement />} />
             <Route path="/about" element={<About />} />
             <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
       </div>
    );
 }
 
 export default Routing;