import React, { useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import Logo from '../../assets/logo.svg'
import HeroesImg from '../../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi'

export default function Logon(){

    const history = useHistory();

    const [id, setId] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile');
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={Logo} alt="Logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={(e)=> setId(e.target.value)}></input>
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register" className="back-link"><FiLogIn size={16} color="#e02041"/>Não tenho cadastro</Link>
                </form>
            </section>
            <img src={HeroesImg} alt="Heroes"/>
        </div>
    )
}