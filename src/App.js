import './App.css';
import React from 'react';
import Navbar from './Navbar.js'; // Importe o componente Navbar
import QuemSomos from './quemsomos/quemsomos';
import FaleConosco from './faleconosco/faleconosco';
import Login from './cadastro/login';
import Footer from './footer.js'; // Importe o componente footer
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />

      <br />

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/quemsomos' element={<QuemSomos />} />

        <Route path='/' element={<Navbar />} />
        <Route path='/faleconosco' element={<FaleConosco />} />

      </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;