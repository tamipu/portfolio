import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiPhp, SiJavascript, SiLaravel, SiSqlite, SiPostgresql, SiPowerbi } from 'react-icons/si';
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    githubLink: string;
    techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink, techStack }) => {

    const techIcons: { [key: string]: JSX.Element } = {
        PHP: <SiPhp size={24} style={{ margin: '0 10px', color: '#ffffff' }} />,
        JavaScript: <SiJavascript size={24} style={{ margin: '0 10px', color: '#ffffff' }} />,
        Laravel: <SiLaravel size={24} style={{ margin: '0 10px', color: '#ffffff' }} />,
        SQLite: <SiSqlite size={24} style={{ margin: '0 10px', color: '#ffffff' }} />,
        SiPostgresql: <SiPostgresql size={24} style={{ margin: '0 10px', color: '#ffffff' }} />,
        SiPowerbi: <SiPowerbi size={24} style={{ margin: '0 10px', color: '#ffffff' }} />,
        Qlik: <span style={{ margin: '0 10px', color: '#ffffff' }}></span>,
        Java: <span style={{ margin: '0 10px', color: '#ffffff' }}></span>,
    };

    return (
        <div className="project-card">
            <h3 style={{ color: '#e74c3c' }}>{title}</h3>
            <p>{description}</p>

            <div className="tech-icons">
                {techStack.map((tech, index) => techIcons[tech] || null)}
            </div>

            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaExternalLinkAlt size={24} />
            </a>
        </div>
    );
};

export default ProjectCard;
