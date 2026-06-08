import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const fazerLogin = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(
        localStorage.getItem('usuarios')
    ) || [];

    const usuarioEncontrado = usuarios.find(
        (usuario) =>
            usuario.email === email &&
            usuario.senha === senha
    );

    if (usuarioEncontrado) {
        localStorage.setItem(
            'usuarioLogado',
            JSON.stringify(usuarioEncontrado)
        );

        alert('Login realizado com sucesso!');
        navigate('/perfil');
    } else {
        alert('Email ou senha incorretos!');
    }
};

    return (
        <div className="login">
            <h1>Login</h1>

            <form onSubmit={fazerLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <button type="submit">
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;