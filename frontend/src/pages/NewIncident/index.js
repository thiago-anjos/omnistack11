import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';


import Logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'

import { Link } from 'react-router-dom';

export default function NewIncident() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue]  = useState('');

  const ongId = localStorage.getItem('ongId');

  const data = {
    title, 
    description,
    value
  }

  async function newIncidentRegister(e){
    e.preventDefault();

    try{
      const response = await api.post('incidents' , data,{
        headers: {
          authorization: ongId
        }
      })
      history.push('/profile');
    }catch(error){
      console.log(error);
    }

  }


 return (
   <div className="incident-container">
       <div className="content">
          <section>
            <img src={Logo} alt="Be the Hero"/>
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso</p>
            <Link to="/" className="back-link"><FiArrowLeft size={16} color="#e02041"/>Voltar para home</Link>
          </section>
          <form onSubmit={newIncidentRegister}>
            <input placeholder="Título do caso" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input placeholder="Valor em reais" value={value} onChange={(e) => setValue(e.target.value)} />
            <button className="button" type="submit">Cadastrar</button>
          </form>
       </div>
   </div>
 );
}