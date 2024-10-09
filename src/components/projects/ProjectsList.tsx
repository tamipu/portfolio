import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList: React.FC = () => {
    return (
        <>
            <div
                style={{padding: '15px', height: '100%'}}>
                <h3 style={{color: '#ffffff', textAlign: 'left'}}>Some Projects</h3>
            </div>
            <div className="projects-grid" style={{height: '75vh'}}>
                <ProjectCard
                    title='Web Application "Recipe"'
                    description="Developed a web application using PHP Laravel (MVC model) and SQLite for dynamic recipe management.
                Implemented CRUD functionality via RESTful APIs for adding, updating, deleting, and viewing recipes.
                Ensured application robustness with unit and functional tests."
                    githubLink="https://github.com/tamipu/application-web-PHP-Laravel"
                    techStack={['PHP', 'Laravel', 'JavaScript', 'SQLite']}
                />
                <ProjectCard
                    title="Data Warehouse and Reporting"
                    description="Designed and populated a relational data warehouse with multidimensional modeling (ROLAP and MOLAP) for fast decision-making analysis.
                Created SQL queries to extract and manipulate data, ensuring fast response times for analytical reports.
                Integrated data from external sources using ETL tools and set up visual reports for clear data analysis."
                    githubLink="#"
                    techStack={['PostgreSQL', 'Qlik', 'PowerBI']}
                />
                <ProjectCard
                    title="Java Projects"
                    description="Developed a real-time stream application to send messages.
                Collaborated in a team of five to build the 'Battleship' game project."
                    githubLink="https://github.com/tamipu/Projects-in-Java"
                    techStack={['Java']}
                />
            </div>
        </>);
}

export default ProjectsList;
