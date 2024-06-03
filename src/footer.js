import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './App.css';
import Logo from '../src/logoo.png'

function Footer() {
  return (

    <footer className="baixo">

        <div className='logo2'>
            <img className='logoTcc' src={Logo} width={140}/>
        </div>
        

        <div className='itens'>
        <nav className="menu-baixo">

            <ul className="menu-nav">

            <li><a href="/faleconosco">Fale Conosco</a></li>
		    <li><a href="#">Cadastro</a></li>
	  		<li><a href="#">Guia</a></li>
            <li><a href="#">Chat</a></li>
		    <li><a href="#">Conte e ouça</a></li>

            </ul>
        </nav>
        </div>
            

        </footer>
    
        );
}   
export default Footer;