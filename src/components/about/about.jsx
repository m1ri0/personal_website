import './about.css';

export default function About() {
    return (
        <div className="about-container">

            <div className="about-terminal">
                <div className="about-terminal-header">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-muted"></span>
                    <span className="dot dot-muted"></span>
                </div>
                <div className="about-terminal-body">
                    <h2>❯ cat <span className="terminal-text">mario/about.me</span></h2>
                    <p>
                        {`  About que eu queira colocar`}
                    </p>
                </div>
            </div>

            <div className="about-stats">
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