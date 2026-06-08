import { Link } from "react-router-dom";

function Header() {

  return (

    <nav>

      <Link to="/">Home</Link> |{" "}

      <Link to="/catalogo">Catálogo</Link> |{" "}

      <Link to="/estante">Estante</Link> |{" "}

      <Link to="/perfil">Perfil</Link> |{" "}

      <Link to="/login">Login</Link> |{" "}

      <Link to="/cadastro">Cadastro</Link> |{" "}

    </nav>

  );

}

export default Header;