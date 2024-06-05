import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import '../App.css';

function FaleConosco() {
  return (
    <nav class="forms">
        <form class="faleconosco">
        <h2>Entre em contato</h2>

        <div class="nome">
          <label for="inputName" class="form-label">Nome Completo</label>
          <input type="name" class="form-control" id="inputName"></input>
        </div>

        <div class="email">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4"></input>
        </div>

        <div class="endep">
          <label for="inputAddress" class="form-label">Endereço Pessoal</label>
          <input type="text" class="form-control" id="inputAddress" placeholder=" "></input>
        </div>

        <div class="endee">
          <label for="inputAddress2" class="form-label">Endereço Empresarial</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder=" "></input>
        </div>
        
        <div class="estado">
          <label for="inputState" class="form-label">Estado</label>
          <select id="inputState" class="form-select">
            <option selected>Escolha...</option>
            <option>Acre</option>
            <option>Alagoas</option>
            <option>Amapá</option>
            <option>Amazonas</option>
            <option>Bahia</option>
            <option>Ceará</option>
            <option>Distrito Federal</option>
            <option>Espírito Santo</option>
            <option>Goiás</option>
            <option>Maranhão</option>
            <option>Mato Grosso</option>
            <option>Mato Grosso do Sul</option>
            <option>Minas Gerais</option>
            <option>Pará</option>
            <option>Paraíba</option>
            <option>Paraná</option>
            <option>Pernambuco</option>
            <option>Piauí</option>
            <option>Rio de Janeiro</option>
            <option>Rio Grande do Norte</option>
            <option>Rio Grande do Sul</option>
            <option>Rondônia</option>
            <option>Roraima</option>
            <option>Santa Catarina</option>
            <option>São Paulo</option>
            <option>Sergipe</option>
            <option>Tocantins</option>
          </select>
        </div>

        <div class="cidade">
          <label for="inputCity" class="form-label">Cidade</label>
          <input type="text" class="form-control" id="inputCity"></input>
        </div>


        <label>Digite seu comentário:</label>
        <fieldset>
            <textarea rows="7" cols="80"></textarea>
        </fieldset>
        
        <a href=" ">
            <button class="enviar" type="button">Enviar</button>
        </a>

        </form>
    </nav>

        );
}   
export default FaleConosco;

