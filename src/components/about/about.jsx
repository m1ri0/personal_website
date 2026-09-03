import useScrollReveal from '../../hooks/useScrollReveal.jsx';
import './about.css';

export default function About() {
    useScrollReveal();
    return (
        <div className="about-container">

            <div className="about-terminal reveal-on-scroll">
                <div className="about-terminal-header">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-muted"></span>
                    <span className="dot dot-muted"></span>
                </div>
                <div className="about-terminal-body">
                    <h2>❯ cat <span className="terminal-text">mario/about.me</span></h2>
                    <p>
                        {`A passionate and dedicated cybersecurity enthusiast with a strong interest in ethical hacking, penetration testing, and vulnerability assessment. I have a solid foundation in computer networks, operating systems, and programming languages, which allows me to analyze and exploit security vulnerabilities effectively. My goal is to continuously enhance my skills and contribute to the cybersecurity community by identifying and mitigating potential threats.`}
                    </p>
                </div>
            </div>

            <div className="about-stats reveal-on-scroll">
                <div className="stat">
                    <span className="stat-value">400+</span>
                    <span className="stat-label">Hours coding</span>
                </div>
                <div className="stat">
                    <span className="stat-value">50+</span>
                    <span className="stat-label">Hours Hacking</span>
                </div>
                <div className="stat">
                    <span className="stat-value">30+</span>
                    <span className="stat-label">POCs executed</span>
                </div>
            </div>

        </div>
    )
}