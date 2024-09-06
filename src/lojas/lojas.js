import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Vestuario from '../roupas.jpg'
import Beleza from '../beleza.jpeg'
import Doces from '../docinho.jpg'
import Calçado from '../calçado.jpeg'
import Joia from '../acessorio.jpg'
import Restaurantes from '../comida.jpg'

function Lojas() {
  return (
    <div class="lojas">

      <div className='button'>
        <form class="d-flex" role="search">
                <input class="pesquisar" type="search" placeholder="O que deseja hoje?" aria-label="Search"></input>
                <button class="procurar" type="button">Procurar</button>
        </form>
      </div>
        

    <section class="gallery">
      <div class="gallery-row">

        <div>
            <img src={Vestuario} alt="roupa"></img>
            <p>Vestuário</p>
        </div>

        <div>
        <img src={Beleza} alt="maquiagem"></img> 
            <p>Beleza</p>
        </div>

        <div>
        <img src={Doces} alt="doce"></img> 
            <p>Doces</p>
        </div>

        <div>
        <img src={Calçado} alt="sapato"></img> 
            <p>Calçado</p>
        </div>

        <div>
        <img src={Joia} alt="joia"></img> 
            <p>Jóias</p>
        </div>

        <div>
        <img src={Restaurantes} alt="comida"></img> 
            <p>Restaurantes</p>
        </div>
    </div>
    </section>

    </div>

        );
}   
export default Lojas;