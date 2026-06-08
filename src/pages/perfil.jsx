import { useNavigate } from 'react-router-dom';

function Perfil() {
    const navigate = useNavigate();

    const usuario = JSON.parse(
        localStorage.getItem('usuarioLogado')
    );

    if (!usuario) {
        return <h2>Nenhum usuário cadastrado.</h2>;
    }

    return (
        <div className="perfil">
            <h1>Meu Perfil</h1>

            <p>
                <strong>Nome:</strong> {usuario.nome}
            </p>

            <p>
                <strong>Email:</strong> {usuario.email}
            </p>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Perfil"
                className="foto-perfil" />

            <button onClick={() => {
                navigate('/login');
            }}>
                Sair
            </button>
           
        </div>
        
    );
}
<button onClick={() => {
    localStorage.removeItem('usuario');
}}>
    Sair
</button>

export default Perfil;