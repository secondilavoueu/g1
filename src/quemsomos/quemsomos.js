import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import '../App.css';
import Banner from '../banner.jpg'
import Navbar from '../Navbar';
import Footer from '../footer';


function QuemSomos() {
  return (
    <nav class="quemsomos">
    <Navbar />
        <section class="historia">
        <div class="container">
            <div class="coluna">
            <h2>Quem somos</h2>

            <p>No vasto e dinâmico mundo da internet, nasceu uma plataforma pioneira destinada a nutrir e capacitar mulheres empreendedoras em sua jornada rumo ao sucesso nos negócios. Uma das características mais distintas do Império Feminino é a sua forte ênfase na construção de uma comunidade unida de mulheres empreendedoras.</p>
            
            <p>Por meio de fóruns de discussão, grupos de networking e oportunidades de colaboração, o site proporciona um ambiente de apoio onde as mulheres podem compartilhar experiências, fazer conexões significativas e receber orientação personalizada de mentoras experientes. Além disso, o Império Feminino é um defensor apaixonado da diversidade e inclusão no mundo dos negócios.</p>
            
            <p>A plataforma celebra a multiplicidade de experiências, perspectivas e identidades das mulheres empreendedoras e se esforça para criar um espaço onde todas se sintam representadas e valorizadas. À medida que avança para o futuro, o Império Feminino está comprometido em expandir ainda mais sua influência e alcance, capacitando um número cada vez maior de mulheres a realizarem seus sonhos empreendedores e deixarem sua marca no mundo dos negócios. Com uma comunidade vibrante e apaixonada ao seu lado, o Império Feminino está moldando o futuro do empreendedorismo feminino, um passo de cada vez!</p>
            
            </div>
        

            <div class="coluna">
            <img src={Banner} class=" " alt="..."></img> 
            </div>
        </div>
    </section>
    <Footer />
        
    </nav>

        );
}   
export default QuemSomos;
