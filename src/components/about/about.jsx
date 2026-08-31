import './about.css';

export default function About() {
    return (
        <div className="about-container">

            <div className="about-terminal">
                <div className="about-header">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-muted"></span>
                    <span className="dot dot-muted"></span>
                </div>
                <div className="about-body">
                    <h2>About Me</h2>
                    <p>
                        I am a passionate software developer with a strong interest in web development and programming.
                        I enjoy creating efficient and user-friendly applications, and I am always eager to learn new technologies and improve my skills.
                    </p>
                </div>
            </div>

            <div className="about-image">
                <img src="../../assets/profile.jpeg" alt="Profile" />
            </div>

        </div>
    )
}