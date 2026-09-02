import { useState, useRef, useEffect } from 'react';
import './ProjectShowcase.css';

const projects = [
    {
        id: 'neural-terminal',
        name: 'Nevermore/',
        tagline: 'Domains Threat Intelligence Feed',
        description: 'A Threat Intelligence Feed that aggregates useful informations about malicious domains in blocklists.',
        longDescription: 'Each Domain is identified with their respective IP addresses, ASN, and geolocation, also providing the abuse type that the domain is associated with. Is a Open Source project that uses congregated blocklists to provide a comprehensive feed of malicious domains, helping security professionals and enthusiasts stay informed about potential threats.',
        tech: ['Python', 'Poetry', 'FastAPI', 'SLQAlchemy', 'Async processes', 'PostgreSQL', 'Docker'],
        links: { github: 'https://github.com/acmecr/nevermore', demo: '#', docs: '#' },
        color: '#ffcc2a',
        gradient: 'linear-gradient(135deg, #ffcc2a 0%, #fffd38 100%)',
        image: 'src/assets/nevermore.jpeg'
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
                <h2> ❯ ls <span className="projects-header-command">mario/projects/</span></h2>
            </div>

            <div className="projects-split-view">
                <div className="projects-list">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className={`project-card ${activeId === project.id ? 'active' : ''}`}
                            onClick={() => setActiveId(project.id)}
                            style={{
                                background: activeId === project.id ? 'var(--red-muted)' : 'transparent',
                                borderLeft: activeId === project.id ? '3px solid var(--red-primary)' : '3px solid var(--text-main)',
                                borderWidth: activeId === project.id ? '5px' : '3px',
                            }}
                        >
                            <div>
                                <img calssName="project-svgfolder" src={activeId === project.id ? '../../public/folder-svgrepo-open.svg' : '../../public/folder-svgrepo-close.svg'} alt='closed-folder' />
                                </div>
                            <div>
                                <h3 style={{ margin: '0 0 5px 0' }}>{project.name}</h3>
                                <p style={{ margin: 0, fontSize: '0.9em' }}>{project.tagline}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="project-display-area">
                    {activeProject ? (
                        <div key={activeProject.id} className="project-info">
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

                            <p><a href={activeProject.links.github} target="_blank" rel="noopener noreferrer">View on Github</a></p>
                        </div>
                    ) : (
                        <div className="empty-state">
                            
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