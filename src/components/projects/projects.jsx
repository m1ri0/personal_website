import './projects.css';

const projects = [
    {
        name: 'neural-terminal',
        description: 'AI-powered terminal emulator with natural language processing',
        tech: ['React', 'TypeScript', 'WebLLM', 'Tailwind'],
        status: 'active',
        link: 'https://github.com/mario/neural-terminal'
    },
    {
        name: 'devflow-cli',
        description: 'Automated workflow toolkit for modern development pipelines',
        tech: ['Node.js', 'Rust', 'Docker', 'GitHub Actions'],
        status: 'active',
        link: 'https://github.com/mario/devflow-cli'
    },
    {
        name: 'pixel-perfect',
        description: 'Design system and component library with zero-runtime CSS',
        tech: ['React', 'Stitches', 'Storybook', 'TypeScript'],
        status: 'maintenance',
        link: 'https://github.com/mario/pixel-perfect'
    },
    {
        name: 'data-viz-lab',
        description: 'Interactive data visualization playground for real-time analytics',
        tech: ['D3.js', 'Svelte', 'WebGL', 'Web Workers'],
        status: 'experimental',
        link: 'https://github.com/mario/data-viz-lab'
    },
    {
        name: 'secure-vault',
        description: 'End-to-zero-trust secrets management for distributed teams',
        tech: ['Go', 'PostgreSQL', 'Vault', 'Kubernetes'],
        status: 'archived',
        link: 'https://github.com/mario/secure-vault'
    }
];

const statusStyles = {
    active: 'status-active',
    maintenance: 'status-maintenance',
    experimental: 'status-experimental',
    archived: 'status-archived'
};

const statusLabels = {
    active: '● ACTIVE',
    maintenance: '◆ MAINT',
    experimental: '◆ EXPERIMENTAL',
    archived: '✦ ARCHIVED'
};

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h2> projects.list</h2>
                <span className="project-count">{projects.length} repositories found</span>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <article key={project.name} className="project-card" style={{ '--delay': `${index * 100}ms` }}>
                        <div className="project-header">
                            <span className="project-index">[{String(index + 1).padStart(2, '0')}]</span>
                            <h3 className="project-name">{project.name}</h3>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                        <div className="project-footer">
                            <span className={statusStyles[project.status]}>
                                {statusLabels[project.status]}
                            </span>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                view source →
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}