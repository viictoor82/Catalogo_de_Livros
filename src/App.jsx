import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Catalogo from './pages/catalogo';
import Detalhes from './pages/detalhes';
import Estante from './pages/estante';
import Perfil from './pages/perfil';
import Header from './componentes/header';
import Footer from './componentes/Footer';
import { useState } from 'react';

function App() {
  const [estante, setEstante] = useState(
    JSON.parse(localStorage.getItem('estante')) || []
);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo estante={estante}
            setEstante={setEstante}/> } />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/estante" element={<Estante estante={estante} setEstante={setEstante} />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;