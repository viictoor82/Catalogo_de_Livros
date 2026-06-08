import "../app.css";
import Footer from "../componentes/footer";

function Estante({ estante = [], setEstante }) {

    const removerLivro = (index) => {
        const novaEstante = estante.filter((_, i) => i !== index);
        setEstante(novaEstante);
        localStorage.setItem("estante", JSON.stringify(novaEstante));
    };

    return (
        <div>
            <h1>Minha Estante</h1>

            {estante.length === 0 ? (
                <p>Sua estante está vazia. Adicione livros do catálogo!</p>
            ) : (
                <div className="estante">
                    {estante.map((livro, index) => (
                        <div key={index} className="livro-estante">
                            <img
                                src={livro.imagem}
                                alt={livro.titulo}
                                className="capa-livro-estante"
                            />

                            <h3>{livro.titulo}</h3>

                            <p>
                                {livro.autor} ({livro.ano})
                            </p>

                            <button onClick={() => removerLivro(index)}>
                                Remover
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <p>
                <strong>Livros na Estante:</strong> {estante.length}
            </p>
            <Footer />
        </div>
    );
}

export default Estante;