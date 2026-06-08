import './livros.css';
function Livro({
    titulo,
    autor,
    ano,
    imagem,
    descricao,
    adicionarLivro
}){
    return(
        <div className="Livro">
            <h2>{titulo}</h2>
            <p><strong>Autor:</strong> {autor}</p>
            <p><strong>Ano de Publicação:</strong> {ano}</p>
            <img src={imagem} alt={titulo} className="capa-livro"/>
            <p><strong>Descrição:</strong> {descricao}</p>
            <button onClick={() =>
                adicionarLivro({ titulo, autor, ano, imagem, descricao })
            }>Adicionar à Estante</button>
        </div>
    );
}

export default Livro;