import './App.css';
import FormCadastro from './FormCadastro';

function PgCadastro(){
    return (
        <div className='container'>
            <div className='left'>
                <p className='texto1'>Seja a chefe do seu próprio destino!</p>
                <img className='logo1' src={require('./logoLogin.jpeg')} width={270}/>
                <h2 className='texto2'>Aqui VOCÊ é quem comanda o seu império!</h2>
                <h2 className='texto3'>Império Feminino</h2>

            </div>
            <div className='right'>
                <FormCadastro />
            </div>
        </div>
    )
}
export default PgCadastro;