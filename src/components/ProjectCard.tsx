import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub size={24} />
            </a>
        </div>
    );
};

export default ProjectCard;
