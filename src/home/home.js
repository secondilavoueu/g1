import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moça from '../mulher1.png';

function Home() {
  return (
    <nav class="inicio">

        <p>Seja a chefe do seu próprio destino!</p>

        <div class="moça">
            <img src={Moça} alt="moça"></img> 
        </div>
        
        <a href="/lojas">
            <button class="botao" type="button">Procurar lojas</button>
        </a>
    </nav>

        );
}   
export default Home;