import { useState, useRef, useEffect } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal.jsx';
import './projects.css';

const projects = [
    {
        id: 'nevermore',
        name: 'Nevermore/',
        tagline: 'Domains Threat Intelligence Feed',
        description: 'A Threat Intelligence Feed that aggregates useful informations about malicious domains in blocklists.',
        longDescription: 'Each Domain is identified with their respective IP addresses, ASN, and geolocation, also providing the abuse type that the domain is associated with. Is a Open Source project that uses congregated blocklists to provide a comprehensive feed of malicious domains, helping security professionals and enthusiasts stay informed about potential threats. This project was made in ACME! Cybersecurity Research laboratory with Financial support from the nic.br with Fundunesp.',
        tech: ['Python', 'Poetry', 'FastAPI', 'SLQAlchemy', 'Async processes', 'PostgreSQL', 'Docker'],
        links: { github: 'https://github.com/acmecr/nevermore/tree/nevermore_3', demo: 'https://dnscheck.acmesecurity.org', demo_label: 'dnscheck.acmesecurity.org' },
        color: '#ffcc2a',
        image: 'images/nevermore.jpeg',
        status: 'deployed'
    },
    {
        id: 'cripto-cracker',
        name: 'Cripto-Cracker/',
        tagline: 'Crack Passwords using Distributed Systems',
        description: 'Project for show how distributed systems works and can be used to crack passwords using brute force.',
        longDescription: 'This project is a distributed system that uses Celery and Redis to distribute the workload of cracking passwords using brute force. It demonstrates how to scale a task across multiple workers, making it faster and more efficient. The system is built with FastAPI for the API layer, PostgreSQL for data storage, and Docker for containerization. It also includes cryptography techniques to handle password hashing and verification. \n This project was made for Distributed Systems class in the State University of São Paulo (UNESP).',
        tech: ['Python', 'Celery', 'Redis', 'Docker', 'Distributed Systems', 'PostgresSQL', 'FastAPI', 'Criptography', 'Brute Force'],
        links: { github: 'https://github.com/m1ri0/cryptographyCracker' },
        color: '#00bf62',
        image: 'images/cripto_cracker.jpeg',
        status: 'to_study'
    },
    {
        id: 'chicos',
        name: 'ChicOS/',
        tagline: 'Emulated Operating System with GUI',
        description: 'A simple emulated operating system with a graphical user interface, built using ncurses.',
        longDescription: 'ChicOS is a simple emulated operating system that provides a graphical user interface (GUI) for users to interact with. It is built using the ncurses library, which allows for the creation of text-based user interfaces in a terminal. ChicOS includes basic functionalities such as file management, process management, and a simple shell. It serves as an educational project to demonstrate the concepts of operating systems and GUI development. \n This project was made for Operating Systems class in the State University of São Paulo (UNESP).',
        tech: ['C', 'CMake','ncurses', 'Operating Systems', 'GUI', 'Emulation'],
        links: { github: 'https://github.com/m1ri0/ChicOS' },
        color: '#687d85',
        image: 'images/chicos.png',
        status: 'to_study'
    },
    {
        id: 'image-captioning',
        name: 'Image-Captioning/',
        tagline: 'Image Captioning using Machine Learning',
        description: 'A machine learning project that generates descriptive captions for images using Convolutional Neural Network (CNN).',
        longDescription: 'This project implements an image captioning model that uses a CNN to extract features from images and a auto-regressive transformer model to generate captions. The model is trained on the FlickR30k dataset, which contains images and their corresponding captions. The project demonstrates the application of machine learning techniques in computer vision and natural language processing. \n This project was made for Artificial Intelligence class in the State University of São Paulo (UNESP).',
        tech: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'Machine Learning', 'CNN', 'Image Processing', 'FlickR30k'],
        links: { github: 'https://github.com/m1ri0/image-captioning/tree/NAS' },
        color: '#5c69b8',
        image: 'images/image-captioning.png',
        status: 'to_study'
    },
    {
        id: 'compiler-project',
        name: 'Compiler/',
        tagline: 'A simple compiler for a custom programming language',
        description: 'A simple compiler that translates a custom programming language to accept the language.',
        longDescription: 'This project implements a simple compiler that takes source code written in a custom programming language and accepts it. The compiler performs lexical analysis, syntax analysis and semantic analysis. It serves as an educational project to demonstrate the principles of compiler design and implementation. \n This project was made for Compilers class in the State University of São Paulo (UNESP).',
        tech: ['C', 'Flex', 'CMake', 'Compiler', 'Lexical Analysis', 'Syntax Analysis', 'Semantic Analysis'],
        links: { github: 'https://github.com/m1ri0/Parser' },
        color: '#b7bdc3',
        image: 'images/compiler.png',
        status: 'to_study'
    }
];

const statusStyles = {
    deployed: 'status-deployed',
    to_study: 'status-to-study'
};

const statusLabels = {
    deployed: 'DEPLOYED ●',
    to_study: 'TO STUDY ◆',
};

export default function ProjectsShowcase() {
    useScrollReveal();
    const [activeId, setActiveId] = useState('nevermore');
    const activeProject = projects.find(project => project.id === activeId);

    const renderProjectInfo = (project) => (
        <div key={project.id} className="project-info">
            <h2 style={{color: project.color}}>{project.name}</h2>
            <p><strong>{project.description}</strong></p>
            <p>{project.longDescription}</p>

            <div className = "tech-stack">
                <h4>Tecnologies:</h4>
                <div>
                    {project.tech.map(t => (
                        <span key={t}>{t}</span>
                    ))}
                </div>
                {project.links.demo && (
                    <p>Project deployed: <a href={project.links.demo} target="_blank" rel="noopener noreferrer">{project.links.demo_label}</a></p>
                )}
            </div>

            <img src={project.image} alt={project.name} />

            <p><a href={project.links.github} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
        </div>
    )

    return (
        <div className="projects-container reveal-on-scroll">

            <div className="projects-header">
                <h2> ❯ ls <span className="projects-header-command">mario/projects/</span></h2>
            </div>

            <div className="projects-split-view">

                <div className="projects-list">
                    {projects.map(project => (

                        <div key={project.id} className="project-accordion-wrapper">

                            <div
                                className={`project-card ${activeId === project.id ? 'active' : ''}`}
                                onClick={() => setActiveId(activeId === project.id ? null : project.id)}
                                style={{
                                    background: activeId === project.id ? 'var(--red-muted)' : 'transparent',
                                    borderLeft: activeId === project.id ? '3px solid var(--red-primary)' : '3px solid var(--text-main)',
                                    borderWidth: activeId === project.id ? '5px' : '3px',
                                }}
                            >
                                <div>
                                    <img className="project-svgfolder" src={activeId === project.id ? 'icons/folder-svgrepo-open.svg' : 'icons/folder-svgrepo-close.svg'} alt='closed-folder' />
                                    </div>
                                <div style={{ width: '100%' }}>
                                    <div className="project-card-header">
                                        <h3>{project.name}</h3>
                                        <span className={`project-status ${statusStyles[project.status]}`}>{statusLabels[project.status]}</span>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.9em' }}>{project.tagline}</p>
                                </div>
                            </div>

                            <div className={`project-info-mobile ${activeId === project.id ? 'open' : ''}`}>
                                <div className="project-info-inner">
                                    {renderProjectInfo(project)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="project-display-area">
                    {activeProject ? (
                        renderProjectInfo(activeProject)
                    ) : (
                        <div className="empty-state">
                            <h3 style={{ color: 'var(--text-muted)' }}>Select a project to view details</h3>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}