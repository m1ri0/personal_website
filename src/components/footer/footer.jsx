import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-command">&gt; exit 0</span>
        
        <p className="footer-copyright">
          &copy; {currentYear} Mário Lúcio. Todos os direitos reservados.
        </p>

        <span className="footer-tech">
          Desenvolvido com <span className="highlight">React</span> & <span className="highlight">CSS</span>
        </span>
      </div>
    </footer>
  );
}