import React from 'react';
import RadarChartSkills from './skills/SkillsChart';
import LanguagesCard from './languages/LanguagesCard';

const About: React.FC = () => {
    return (
        <div style={{height: '75vh'}}>
            <section className="p-5 text-center"
                     style={{
                         height: 'auto',
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         gap: '20px'
                     }}>
                <div style={{flex: 1, height: '47vh'}}>
                    <RadarChartSkills/>
                </div>
                <div style={{flex: 1, height: '47vh'}}>
                    <LanguagesCard/>
                </div>
            </section>
        </div>
);
};

export default About;
