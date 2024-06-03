import './App.css';
import React from 'react';
import Navbar from './Navbar.js'; // Importe o componente Navbar
import Home from './home/home';
import QuemSomos from './quemsomos/quemsomos';
import FaleConosco from './faleconosco/faleconosco';
import Footer from './footer.js'; // Importe o componente footer
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />

      <br />

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/faleconosco' element={<FaleConosco />} />
        <Route path='/quemsomos' element={<QuemSomos />} />

      </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;