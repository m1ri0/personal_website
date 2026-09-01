import { useState, useRef, useEffect } from 'react';
import './ProjectShowcase.css';

const projects = [
    {
        id: 'neural-terminal',
        name: 'neural-terminal',
        tagline: 'AI-powered terminal with natural language understanding',
        description: 'A terminal emulator that understands plain English commands and executes them safely. Built with WebLLM for local inference.',
        longDescription: 'Neural Terminal bridges the gap between CLI power and natural language accessibility. Type "show me all python files modified last week" and it translates to `find . -name "*.py" -mtime -7`. Runs entirely in-browser using WebGPU-accelerated LLMs.',
        tech: ['React 18', 'TypeScript', 'WebLLM', 'WebGPU', 'xterm.js', 'Tailwind'],
        stats: { stars: 2.4, forks: 187, issues: 12 },
        links: { github: '#', demo: '#', docs: '#' },
        color: '#ff2a2a',
        gradient: 'linear-gradient(135deg, #ff2a2a 0%, #ff6b35 100%)',
        image: 'https://picsum.photos/seed/neural-terminal-1/800/600'
    },
    {
        id: 'devflow-cli',
        name: 'devflow-cli',
        tagline: 'Zero-config workflow automation for modern stacks',
        description: 'Smart CLI that detects your project type and generates optimized CI/CD pipelines, dev containers, and deployment configs.',
        longDescription: 'DevFlow analyzes your repository structure, dependencies, and frameworks to generate production-ready workflows. Supports monorepos, microservices, and serverless. Extensible plugin system for custom generators.',
        tech: ['Node.js', 'Rust', 'TypeScript', 'Docker', 'GitHub Actions', 'Zod'],
        stats: { stars: 1.8, forks: 94, issues: 5 },
        links: { github: '#', demo: '#', docs: '#' },
        color: '#00d4aa',
        gradient: 'linear-gradient(135deg, #00d4aa 0%, #0099ff 100%)',
        image: 'https://picsum.photos/seed/devflow-1/800/600'
    }
];

export default function ProjectsShowcase() {
    const [activeId, setActiveId] = useState(null);
    const activeProject = projects.find(project => project.id === activeId);

    return (
        <div className="projects-container">

            <div className="projects-header">
                <h2> ❯ tree -L 1 <span className="projects-header-command">projects/</span></h2>
                <p className="projects-header-subtitle">Hover cards to preview • Click to expand details</p>
            </div>

            <div className="projects-split-view">
                <div className="projects-list">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className={`project-card ${activeId === project.id ? 'active' : ''}`}
                            onClick={() => setActiveId(project.id)}
                            style={{
                                cursor: 'pointer',
                                borderLeft: `4px solid ${project.color}`,
                                padding: '15px',
                                background: activeId === project.id ? '#f0f0f0' : 'transparent',
                            }}
                        >
                            <h3 style={{ margin: '0 0 5px 0' }}>{project.name}</h3>
                            <p style={{ margin: 0, fontSize: '0.9em' }}>{project.tagline}</p>
                        </div>
                    ))}
                </div>

                <div className="project-display-area">
                    {activeProject ? (
                        <div className="project-info">
                            <h2 style={{color: activeProject.color}}>{activeProject.name}</h2>
                            <p><strong>{activeProject.description}</strong></p>
                            <p>{activeProject.longDescription}</p>

                            <div className = "tech-stack">
                                <h4>Tecnologies:</h4>
                                <div>
                                    {activeProject.tech.map(t => (
                                        <span key={t}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <img
                                src={activeProject.image}
                                alt={activeProject.name}
                            />
                        </div>
                    ) : (
                        <div className="empty-state">
                            <h3>⬅ Selecione um projeto ao lado para explorar</h3>
                        </div>
                    )}
                </div>

            </div>

            <div className="showcase-footer">
                <p>{projects.length} active repositories • <a href="#" target="_blank" rel="noopener noreferrer">View all on GitHub</a></p>
            </div>
        </div>
    );
}