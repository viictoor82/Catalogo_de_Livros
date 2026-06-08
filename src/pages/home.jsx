import "../app.css";
import Footer from "../componentes/footer";
function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>📚 Catálogo de Livros</h1>
        <p>Organize e salve seus livros favoritos</p>

        
      </header>

      <section className="lista">
        {/* seus livros aqui */}
      </section>
        <Footer />
    </div>
    
  );
}


export default Home;