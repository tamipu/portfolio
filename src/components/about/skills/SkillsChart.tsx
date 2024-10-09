import React from 'react';
import ReactECharts from 'echarts-for-react';

const RadarChartSkills: React.FC = () => {
    const option = {
        title: {
            textStyle: { color: '#ffffff' },
            left: 'center',
        },
        radar: {
            radius: '70%',
            indicator: [
                { name: 'JavaScript', max: 100 },
                { name: 'TypeScript', max: 100 },
                { name: 'PHP', max: 100 },
                { name: 'HTML5', max: 100 },
                { name: 'CSS3', max: 100 },
                { name: 'React', max: 100 },
                { name: 'Laravel', max: 100 },
                { name: 'Spring Boot', max: 100 },
                { name: 'Bootstrap', max: 100 },
                { name: 'Figma', max: 100 },
                { name: 'GitLab CI/CD', max: 100 },
                { name: 'Node.js', max: 100 },
                { name: 'Docker', max: 100 },
                { name: 'Git', max: 100 },
                { name: 'IntelliJ IDEA', max: 100 },
                { name: 'MySQL', max: 100 },
                { name: 'MongoDB', max: 100 },
                { name: 'PostgreSQL', max: 100 },
                { name: 'Agile', max: 100 },
                { name: 'Sketch', max: 100 },
            ],
        },
        series: [{
            name: 'Skill Proficiency',
            type: 'radar',
            data: [
                {
                    value: [
                        85, 80, 70, 90, 85, // Languages
                        50, 65, 75, 80,     // Frameworks & Libraries
                        80, 90, 75,         // Technologies
                        60, 85, 80,         // Tools
                        75, 55, 80,         // Databases
                        90, 60              // Methodologies & Design
                    ],
                    name: 'Skill Level'
                }
            ],
            itemStyle: {
                color: '#e74c3c',
            },
        }],
    };

    return (
        <div className="card" style={{ padding: '20px', backgroundColor: '#2c3e50', borderRadius: '8px', height: '100%' }}>
            <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Skills Overview</h3>
            <ReactECharts option={option} style={{ height: '300px', width: '100%' }} />
        </div>
    );
};

export default RadarChartSkills;
