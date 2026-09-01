import { useState } from 'react';
import './contact.css';

const contacts = [
    {
        type: 'github',
        label: 'github.com/mario',
        value: 'https://github.com/mario',
        icon: '⌘'
    },
    {
        type: 'linkedin',
        label: 'linkedin.com/in/mario',
        value: 'https://linkedin.com/in/mario',
        icon: '◈'
    },
    {
        type: 'email',
        label: 'mario@dev.io',
        value: 'mailto:mario@dev.io',
        icon: '✉'
    },
    {
        type: 'twitter',
        label: '@mario_dev',
        value: 'https://twitter.com/mario_dev',
        icon: '⚡'
    },
    {
        type: 'discord',
        label: 'mario#0001',
        value: 'https://discord.com/users/mario',
        icon: '◆'
    }
];

export default function Contact() {
    const [copied, setCopied] = useState(null);

    const handleCopy = (value, label) => {
        navigator.clipboard.writeText(value);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h2> contact.connect</h2>
                <p className="contact-subtitle">
                    Always open to interesting conversations, collaborations, or just a quick hello.
                </p>
            </div>

            <div className="contact-methods">
                {contacts.map((contact, index) => (
                    <button
                        key={contact.type}
                        className="contact-card"
                        onClick={() => handleCopy(contact.value, contact.label)}
                        style={{ '--delay': `${index * 80}ms` }}
                    >
                        <span className="contact-icon">{contact.icon}</span>
                        <div className="contact-info">
                            <span className="contact-type">{contact.type.toUpperCase()}</span>
                            <span className="contact-value">{contact.label}</span>
                        </div>
                        <span className={`copy-indicator ${copied === contact.label ? 'visible' : ''}`}>
                            {copied === contact.label ? 'copied!' : 'click to copy'}
                        </span>
                    </button>
                ))}
            </div>

            <div className="contact-terminal">
                <div className="terminal-header">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-muted"></span>
                    <span className="dot dot-muted"></span>
                </div>
                <div className="terminal-body">
                    <p> curl -s https://api.mario.dev/status</p>
                    <div className="terminal-output">
                        <p>{`{
  "status": "online",
  "availability": "open_to_work",
  "response_time": "< 24h",
  "preferred_contact": "email",
  "pgp_key": "0xDEADBEEF..."
}`}</p>
                    </div>
                    <p className="prompt">
                        <span className="prompt-user">mario@portfolio</span>
                        <span className="prompt-sep">:~$</span>
                        <span className="prompt-cursor">█</span>
                    </p>
                </div>
            </div>
        </div>
    )
}