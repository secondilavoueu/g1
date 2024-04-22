import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './App.css';
import Logo from '../src/logoo.png'

function Footer() {
  return (
    <nav class="fim">

        <div className='footer'>
            <img src={Logo} class=" " alt="..."></img> 
            <p>Salvador | 🇧🇷</p> 
        </div>
        
    </nav>

        );
}   
export default Footer;




{/* <footer>&copy; 2024 - Suporte: imperiofeminino@gmail.com </footer> */}