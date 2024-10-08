import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
    return (
        <div className="projects-grid">
            <ProjectCard
                title="Web Application in PHP, Laravel, JavaScript, SQLite"
                description="Developed a web application using PHP Laravel (MVC model) and SQLite for dynamic recipe management.
                Implemented CRUD functionality via RESTful APIs for adding, updating, deleting, and viewing recipes.
                Ensured application robustness with unit and functional tests."
                githubLink="https://github.com/tamipu/application-web-PHP-Laravel"
            />
            <ProjectCard
                title="ROLAP, MOLAP Data Warehouse and Reporting"
                description="Designed and populated a relational data warehouse with multidimensional modeling (ROLAP and MOLAP) for fast decision-making analysis.
                Created SQL queries to extract and manipulate data, ensuring fast response times for analytical reports.
                Integrated data from external sources using ETL tools and set up visual reports for clear data analysis."
                githubLink="#"
            />
            <ProjectCard
                title="Java Projects"
                description="Developed a real-time stream application to send messages.
                Collaborated in a team of five to build the 'Battleship' game project."
                githubLink="https://github.com/tamipu/Projects-in-Java"
            />
        </div>
    );
};

export default ProjectsList;
