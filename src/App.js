import './App.css';
import React from 'react';
import Navbar from './Navbar.js';
import Home from './home/home';
import QuemSomos from './quemsomos/quemsomos';
import FaleConosco from './faleconosco/faleconosco';
import Lojas from './lojas/lojas';
import Chat from './chat/chat';
import Footer from './footer.js';
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
        <Route path='/chat' element={<Chat />} />
        <Route path='/lojas' element={<Lojas />} />

      </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;