import React from 'react';
import { FaFlagUsa } from 'react-icons/fa';
import { FiFlag } from 'react-icons/fi';
import { GiWorld } from 'react-icons/gi';

const LanguagesCard: React.FC = () => {
    return (
        <div className="card" style={{ padding: '20px', backgroundColor: '#2c3e50', borderRadius: '8px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ color: '#ffffff', textAlign: 'center', paddingBottom: '30px'}}>Languages Spoken</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ backgroundColor: '#34495e', borderRadius: '8px', padding: '20px', width: '30%', textAlign: 'center' }}>
                    <FaFlagUsa style={{ color: '#e74c3c', fontSize: '24px', marginBottom: '10px' }} />
                    <p style={{ color: '#ffffff' }}>
                        English: <span style={{ color: '#e74c3c' }}>Fluent (TOEIC 875/990)</span>
                    </p>
                </div>

                <div style={{ backgroundColor: '#34495e', borderRadius: '8px', padding: '20px', width: '30%', textAlign: 'center' }}>
                    <FiFlag style={{ color: '#e74c3c', fontSize: '24px', marginBottom: '10px' }} />
                    <p style={{ color: '#ffffff' }}>
                        French: <span style={{ color: '#e74c3c' }}>Advanced (B2 - C1)</span>
                    </p>
                </div>

                <div style={{ backgroundColor: '#34495e', borderRadius: '8px', padding: '20px', width: '30%', textAlign: 'center' }}>
                    <GiWorld style={{ color: '#e74c3c', fontSize: '24px', marginBottom: '10px' }} />
                    <p style={{ color: '#ffffff' }}>
                        Vietnamese: <span style={{ color: '#e74c3c' }}>Native</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LanguagesCard;
