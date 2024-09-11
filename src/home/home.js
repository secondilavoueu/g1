import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moça from '../mulher1.png';
import Navbar from '../Navbar';
import Footer from '../footer';

function Home() {
  return (
    
    <div class="inicio">
        <Navbar /> 
        <p>Seja a chefe do seu próprio destino!</p>

        <div class="moça">
            <img src={Moça} alt="moça"></img> 
        </div>
        
        <a href="/lojas">
            <button class="botao" type="button">Procurar lojas</button>
        </a>
        <Footer />
    </div>

        );
}   
export default Home;