import React, { useState } from 'react';
import './App.css';

function FormularioCadastro() {
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>

      <h3 className='texto'>Império</h3>
      <h3 className='texto'>Feminino</h3>

      <label className='form-item-cad'>
        <input
          className='form-input' type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder='Nome de usário'/>
      </label>
      <label className='form-item-cad'>
        <input
          className='form-input' type="password" name="password" value={formData.password} onChange={handleChange} required placeholder='Senha'/>
      </label>

      <a class="form-button" href="/home"><button type="submit" class="entrar-button">Entrar</button></a> <br></br>

      <a className='link-item1' href='#'>Entrar com o Google</a> <br></br>
      <a className='link-item2' href='#'>Esqueceu sua senha?</a>
    </form>
  );
}

export default FormularioCadastro;