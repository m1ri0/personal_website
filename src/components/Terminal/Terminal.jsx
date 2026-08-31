import { useState, useEffect } from 'react';
import './Terminal.css';

export default function Terminal() {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);

  const welcometext = "Welcome to Mário's portifolio!";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000); // 2.4s delay + 0.6s anim = 3s total

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showText) return;
    
    let index = 0;
    const interval = setInterval(() => {
      setText(welcometext.slice(0, index + 1));
      index++;
      
      if (index >= welcometext.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [showText]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="dot dot-red"></span>
        <span className="dot dot-muted"></span>
        <span className="dot dot-muted"></span>
      </div>
      
      <div className="terminal-body">
        <h1>Connected</h1>
        <p>
          {text}
          <span className="cursor">█</span>
        </p>
      </div>
    </div>
  );
}