import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal.jsx';
import './contact.css';

const contacts = [
    { type: 'email', label: 'mail', href: 'mailto:marioluciocollinettijr@hotmail.com', icon: '../../../public/mail-icon.svg', color: '#98230e' },
    { type: 'github', label: 'M1ri0', href: 'https://github.com/m1ri0', icon: '../../../public/git-icon.svg', color: '#333333' },
    { type: 'linkedin', label: 'Mário Lúcio', href: 'https://www.linkedin.com/in/máriolúciojunior', icon: '../../../public/linkedin-icon.svg', color: '#0077b5' },
];

const bootLines = [
    '> initializing contact protocol...',
    '> loading identity keys...',
    '> verifying pgp signature: 0xDEADBEEF',
    '> establishing secure channel...',
    '> handshake complete. cipher: chacha20-poly1305',
    '> sharing contact information...',
];

export default function Contact() {
    useScrollReveal();

    const terminalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(null);
    const [booted, setBooted] = useState(false);
    const [bootIndex, setBootIndex] = useState(0);
    const [glitchLine, setGlitchLine] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (terminalRef.current) {
            observer.observe(terminalRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const timer = setInterval(() => {
            if (bootIndex < bootLines.length) {
                setBootIndex(i => i + 1);
            } else {
                setBooted(true);
            }
        }, 400);
        return () => clearInterval(timer);
    }, [bootIndex, isVisible]);

    useEffect(() => {
        if (!booted) return;
        const timer = setInterval(() => {
            if (Math.random() < 0.08) {
                const idx = Math.floor(Math.random() * contacts.length);
                setGlitchLine(idx);
                setTimeout(() => setGlitchLine(null), 120);
            }
        }, 2000);
        return () => clearInterval(timer);
    }, [booted]);

    const handleClick = (contact, e) => {
        e.preventDefault();
        navigator.clipboard.writeText(contact.label);
        setCopied(contact.label);
        setTimeout(() => setCopied(null), 1500);
        
        if (contact.type === 'email') {
            window.location.href = contact.href;
        } else {
            window.open(contact.href, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="contact-terminal reveal-on-scroll" ref={terminalRef}>
            <div className="contact-terminal-header">
                <div className="contact-terminal-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-green"></span>
                    <span className="dot dot-muted"></span>
                </div>
                <div className={`contact-terminal-status ${booted ? 'status-active' : 'status-booting'}`}>
                    {booted ? '● Contact Protocol Active' : 'Booting Contact Protocol...'}
                </div>
            </div>

            <div className="contact-terminal-body">
                {bootLines.slice(0, bootIndex).map((line, index) => {
                    const isLastLineBeingTyped = index === bootIndex - 1 && !booted;
                    return (
                        <div key={index} className={`contact-line ${isLastLineBeingTyped ? 'typing-active' : ''}`}>
                            {line}
                        </div>
                    );
                })}
            </div>
            <div className="contact-links">
                {booted && contacts.map((contact, index) => (
                    <div
                        key={index}
                        className={`contact-method ${glitchLine === index ? 'glitch' : ''}`}
                        onClick={(e) => handleClick(contact, e)}
                        style={{ backgroundColor: contact.color }}
                    >
                        <img src={contact.icon} alt={contact.label} />
                        {contact.label} {copied === contact.label && <span className="copied">[copied]</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}