import React, { useState } from 'react';
import api from '../../services/api'
import './style.css'

import Logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'

import { Link , useHistory } from 'react-router-dom';

export default function Register() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleCreateOng(e){
    e.preventDefault();

    const data = {
      name, 
      email, 
      whatsapp, 
      city, 
      uf
    }

    try{
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    }catch(error){
      alert(error);
    }


  }

 return (
   <div className="register-container">
       <div className="content">
          <section>
            <img src={Logo} alt="Be the Hero"/>
            <h1>Faça seu cadastro</h1>
            <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua Ong.</p>
            <Link to="/" className="back-link"><FiArrowLeft size={16} color="#e02041"/>Não tenho cadastro</Link>
          </section>
          <form onSubmit={handleCreateOng}>
            <input placeholder="Nome da ONG" value={name} onChange={(e)=> setName(e.target.value)}/>
            <input placeholder="E-mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input placeholder="Whatsapp" value={whatsapp} onChange={(e)=> setWhatsapp(e.target.value)}/>
            <div className="input-group">
              <input placeholder="Cidade" value={city} onChange={(e)=> setCity(e.target.value)}/>
              <input placeholder="UF" style={{width: 80}} value={uf} onChange={(e)=> setUf(e.target.value)}/>
            </div>
            <button className="button" type="submit">Cadastrar</button>
          </form>
       </div>
   </div>
 );
}