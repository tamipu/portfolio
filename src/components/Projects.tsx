import React from 'react';

const projects = [
    {
        title: 'Recettes Application',
        description: 'Developed a dynamic web app for managing recipes using PHP and Laravel.',
        technologies: ['PHP', 'Laravel', 'SQLite'],
    },
    {
        title: 'ROLAP/MOLAP Reporting',
        description: 'Designed and implemented a data warehouse for fast decision-making analytics.',
        technologies: ['SQL', 'ETL', 'Data Warehouse'],
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects">
            <h3>Projects</h3>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
