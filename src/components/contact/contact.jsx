import { useState, useEffect } from 'react';
import './contact.css';

const contacts = [
    { type: 'email', label: 'mario@dev.br', href: 'mailto:marioluciocollinettijr@hotmail.com', icon: '✉' },
    { type: 'github', label: 'github.com/mario', href: 'https://github.com/m1ri0', icon: '⌘' },
    { type: 'linkedin', label: 'linkedin.com/in/mario', href: 'https://linkedin.com/in/mario', icon: '◈' },
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
    const [copied, setCopied] = useState(null);
    const [booted, setBooted] = useState(false);
    const [bootIndex, setBootIndex] = useState(0);
    const [glitchLine, setGlitchLine] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            if (bootIndex < bootLines.length) {
                setBootIndex(i => i + 1);
            } else {
                setBooted(true);
            }
        }, 350);
        return () => clearInterval(timer);
    }, [bootIndex]);

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
        <div className="contact-container">

            <div>
                
            </div>

        </div>
    );
}