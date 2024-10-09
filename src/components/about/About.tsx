import React from 'react';
import RadarChartSkills from './skills/SkillsChart';
import LanguagesCard from './languages/LanguagesCard';
import './About.css';

const About: React.FC = () => {
    return (
        <div>
            {/* Main Profile Section */}
            <div className="profile-section">
                <img
                    src="/images/photo.png"
                    alt="Profile"
                    className="profile-img"
                />

                <div className="profile-text">
                    <h3>Mia Phuong</h3>
                    <p className="username">@midev</p>
                    <p>
                        Hey there! I'm Mia, a passionate software developer based in France. I
                        specialize in full-stack development, where I build responsive web applications that deliver
                        great user experiences.
                    </p>
                    <p>
                        With expertise in JavaScript, PHP, React, and Laravel, I aim to create solutions that are
                        efficient and user-friendly. I believe in continuous learning and collaboration to deliver value
                        to users and businesses alike.
                    </p>
                </div>
            </div>

            {/* Skill and Language Section */}
            <div className="skills-languages-section">
                <section className="section-content">
                    <div className="section-item">
                        <RadarChartSkills/>
                    </div>
                    <div className="section-item">
                        <LanguagesCard/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
