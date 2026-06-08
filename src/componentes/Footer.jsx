
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3>📚 Catálogo de Livros</h3>

        <span className="copy">
          © {new Date().getFullYear()} Desenvolvido por Victor
        </span>

      </div>
    </footer>
  );
}

export default Footer;