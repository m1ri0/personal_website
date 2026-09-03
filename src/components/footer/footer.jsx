import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-command">&gt; exit 0</span>
        
        <p className="footer-copyright">
          &copy; {currentYear} Mário Lúcio. All rights reserved.
        </p>

        <span className="footer-tech">
          Developed with <span className="highlight">React</span> & <span className="highlight">CSS</span>
        </span>
      </div>
    </footer>
  );
}