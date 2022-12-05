import React from "react";
import {
	Route,
   Routes
  } from "react-router-dom";
import Home from './Home'
import About from './About'
import Logement from './FicheLogement'
import Error from './ErrorPage'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Routing() {
    return (
       <div className="App">
          <Header />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/fichelogement" element={<Logement />} />
             {/* <Route path="/FicheLogement/:id" element={<Logement />} /> */}
             <Route path="/about" element={<About />} />
             <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
       </div>
    );
 }
 
 export default Routing;