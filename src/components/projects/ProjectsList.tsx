import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList: React.FC = () => {
    return (
        <>
            <div
                style={{padding: '15px', height: '100%'}}>
                <h3 style={{color: '#ffffff', textAlign: 'left'}}>Featured Projects</h3>
            </div>
            <div className="projects-grid">
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
                Integrated data from external sources using ETL tools and set up visual reports for clear data analysis with Microsoft PowerBI and Qlik."
                    githubLink="https://drive.google.com/drive/folders/1iH3cb5YFql1TQJwb_w3Ecijnuek_o_gH"
                    techStack={['PostgreSQL', 'Qlik', 'PowerBI']}
                />
                <ProjectCard
                    title="Java Projects"
                    description="Stream Live Application (Developed a real-time messaging application using Spring Boot, with full REST API integration)
& Battleship Game (Collaborated within a team of five to develop a multiplayer game with real-time  features)."
                    githubLink="https://github.com/tamipu/Projects-in-Java"
                    techStack={['Java']}
                />
                <ProjectCard
                    title="Database Design Project (MOOC Platform)"
                    description="Utilized Verbatelo, DBEaver, and PostgreSQL for the design and development of the database.
Applied the MERISE methodology to ensure a structured and coherent database design, from conceptual modeling to the implementation of SQL queries."
                    githubLink="https://github.com/tamipu/Projet-de-conception-BDD"
                    techStack={[]}
                />
                <ProjectCard
                    title="Parking System Analysis"
                    description="Conducted a detailed analysis of a parking management system. Designed and modeled the system's architecture with UML diagrams, including class, sequence, and activity diagrams to cover all key functionalities."
                    githubLink="https://www.canva.com/design/DAF2O2SZQ-c/1yH_tYMMmeg4yzvoVAWJPw/edit?utm_content=DAF2O2SZQ-c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    techStack={[]}
                />
                <ProjectCard
                    title="Charts Application"
                    description="A Spring Boot application that provides a REST API for generating chart templates and series data using Apache ECharts."
                    githubLink="https://github.com/tamipu/echarts-springboot-api"
                    techStack={['Java']}
                />
                <ProjectCard
                    title="Mood Tracker with Visual Journal"
                    description="Developed a Mood Tracker web application using TypeScript, React with an interactive visual journal, enabling users to record and monitor their mood over time.
Integrated charting libraries to visualize users' mood patterns in graphical formats, allowing for better insights into their emotional well-being."
                    githubLink="https://github.com/tamipu/mood-tracker-journey"
                    techStack={[]}
                />
            </div>
        </>);
}

export default ProjectsList;
