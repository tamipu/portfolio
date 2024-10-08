import React from 'react';
import RadarChartSkills from './SkillsChart';
import LanguagesCard from './LanguagesCard';

const About: React.FC = () => {
    return (
        <>
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
        </>
);
};

export default About;
