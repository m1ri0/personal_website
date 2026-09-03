import { useRef, useEffect } from 'react';
import Terminal from '../terminal/terminal.jsx';
import './matrix.css';

export default function MatrixHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const nums = "0123456789";
    const symbols = "<>/\\|[]{}+=-_*^%";
    const alphabet = katakana + latin + nums + symbols;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        ctx.fillStyle = '#FF2A2A';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 35); 

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToNextSection = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
  }

  return (
    <section className="matrix-hero">
      {/* Efeito matrix */}
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      
      {/* Conteúdo */}
      <div className="hero-content">
        <Terminal />
      </div>

      {/* Sete indicadora de rolagem */}
      <button className="scroll-indicator" onClick={scrollToNextSection} aria-label="Scroll to next section">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  );
}