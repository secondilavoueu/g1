import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Lojas() {
  return (
    <div class="lojas">

        <form class="d-flex" role="search">
                <input class="pesquisar" type="search" placeholder="O que deseja hoje?" aria-label="Search"></input>
                <button class="procurar" type="button">Procurar</button>
        </form>

    </div>

        );
}   
export default Lojas;