import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';




import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {email, password});

            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');
        }
        catch (err) {
            alert('E-mail ou senha incorreta, tente novamente!');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="black-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho Cadastro
                    </Link>
                    
                </form>
            </section>
            <img src={heroesImg} alt="Heores"/>
        </div>
    );
}