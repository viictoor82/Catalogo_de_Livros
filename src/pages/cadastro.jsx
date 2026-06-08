import { useState } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const cadastrar = (e) => {
    e.preventDefault();

    const usuario = { nome, email, senha };

    const usuarios = JSON.parse(
        localStorage.getItem('usuarios')
    ) || [];

    const existe = usuarios.some(
        usuario => usuario.email === email
    );

    if (existe) {
        alert('Este email já está cadastrado!');
        return;
    }

    usuarios.push(usuario);

    localStorage.setItem(
        'usuarios',
        JSON.stringify(usuarios)
    );

    alert(`Usuário ${nome} cadastrado com sucesso!`);

    setNome('');
    setEmail('');
    setSenha('');
    navigate('/login');
};

    return (
        <div className="cadastro">
            <h1>Cadastro</h1>

            <form onSubmit={cadastrar}>
                <div>
                    <label>Nome:</label>
                    <br />
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Senha:</label>
                    <br />
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>

                <br />

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default Cadastro;