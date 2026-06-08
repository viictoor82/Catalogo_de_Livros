import Livro from '../componentes/livros';
import '../app.css';
import { useState } from 'react';

import domcasmurro from '../assets/capas-livros/dom-casmudo.jpeg';
import opequenoprincipe from '../assets/capas-livros/o-pequeno-principe.jpeg';
import senhordosaneis from '../assets/capas-livros/o-senhor-dos-aneis.jpeg';
import titulo1984 from '../assets/capas-livros/1984.jpeg';
import ameninaqueroubavalivros from '../assets/capas-livros/a-menina-que-roubava-livros.jpeg';
import pedrafilosofal from '../assets/capas-livros/pedra-filosofal.jpeg';
import oalquimista from '../assets/capas-livros/o-alquimista.jpeg';
import Footer from '../componentes/footer';

function Catalogo(props) {
const { estante = [], setEstante } = props;

const [pesquisa, setPesquisa] = useState('');

const livros = [
    {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        ano: '1954',
        imagem: senhordosaneis,
        descricao:
            'Uma jornada épica para destruir um anel mágico e salvar a Terra Média.'
    },
    {
        titulo: '1984',
        autor: 'George Orwell',
        ano: '1948',
        imagem: titulo1984,
        descricao:
            'Um romance distópico sobre uma sociedade totalitária.'
    },
    {
        titulo: 'Dom Casmurro',
        autor: 'Machado de Assis',
        ano: '1899',
        imagem: domcasmurro,
        descricao:
            'A história de amor e ciúme entre Bentinho e Capitu.'
    },
    {
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry',
        ano: '1943',
        imagem: opequenoprincipe,
        descricao:
            'Um conto poético sobre um jovem príncipe que viaja por diferentes planetas.'
    },
    {
        titulo: 'A Menina que Roubava Livros',
        autor: 'Markus Zusak',
        ano: '2005',
        imagem: ameninaqueroubavalivros,
        descricao:
            'A história de uma jovem garota que encontra consolo nos livros durante a Segunda Guerra Mundial.'
    },
    {
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'J.K. Rowling',
        ano: '1997',
        imagem: pedrafilosofal,
        descricao:
            'A história de um jovem bruxo que descobre seu destino e enfrenta muitos desafios.'
    },
    {
        titulo: 'O Alquimista',
        autor: 'Paulo Coelho',
        ano: '1988',
        imagem: oalquimista,
        descricao:
            'A jornada de um jovem pastor em busca de seu tesouro pessoal.'
    }
];

const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(
        pesquisa.toLowerCase()
    )
);

const adicionarLivro = (livro) => {
    const existe = estante.some(
        (item) => item.titulo === livro.titulo
    );

    if (existe) {
        alert('Este livro já está na estante!');
        return;
    }

    const novaEstante = [...estante, livro];

    setEstante(novaEstante);

    localStorage.setItem(
        'estante',
        JSON.stringify(novaEstante)
    );
};

return (
    <div>
        <h1>Catálogo</h1>

        <input
            type="text"
            placeholder="Pesquisar livro..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
        />

        <div className="catalogo">
            {livrosFiltrados.map((livro, index) => (
                <Livro
                    key={index}
                    titulo={livro.titulo}
                    autor={livro.autor}
                    ano={livro.ano}
                    imagem={livro.imagem}
                    descricao={livro.descricao}
                    adicionarLivro={() =>
                        adicionarLivro(livro)
                    }
                />
            ))}
        </div>

        <p>
            <strong>Livros na Estante:</strong>{' '}
            {estante.length}
        </p>
        <Footer />
    </div>
);

}

export default Catalogo;