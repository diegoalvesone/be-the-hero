import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';
import logoImg from '../../assets/logo.svg'



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();

    async function handleRegister (e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            whatsapp,
            city,
            uf,
        };

        try {
            await api.post('ongs', data);

            alert(`ONG cadastrada com sucesso, e-mail de acesso: ${data.email}`);
            history.push('/');

        }
        catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="black-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho Cadastro
                    </Link>
                
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <input placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" width="80" style={{ width: 80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
