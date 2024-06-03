import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moça from '../moça home.png';

function Home() {
  return (
    <nav class="inicio">

        <p>Seja a chefe do seu próprio destino!</p>

        <div class="moça">
            <img src={Moça} alt="moça"></img> 
        </div>
        
        <a href="">
            <button class="botao" type="button">Procurar loja</button>
        </a>
    </nav>

        );
}   
export default Home;