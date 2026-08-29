import { useState, useEffect } from 'react';
import './Terminal.css';

export default function Terminal() {
  const [text, setText] = useState('');
  // O \n cria a quebra de linha no terminal
  const fullText = "root@portfolio:~$ ./iniciar_sistema.sh\n[+] Conexão estabelecida.\n[+] Acesso permitido.\n> Olá, eu sou o [Seu Nome].";

  useEffect(() => {
    let index = 0;
    
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 60); // Ajuste este valor (em milissegundos) para alterar a velocidade da digitação

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="dot dot-red"></span>
        <span className="dot dot-muted"></span>
        <span className="dot dot-muted"></span>
      </div>
      
      <div className="terminal-body">
        <pre>
          <span className="text-secundary"></span>
          {text}
          <span className="cursor">█</span>
        </pre>
      </div>
    </div>
  );
}