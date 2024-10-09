import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="avatar-container">
                <div className="ring">
                    <img
                        src="/images/photo.png"
                        alt="Phuong's Avatar"
                        className="avatar"
                    />
                </div>
            </div>
            <h2 className="display-4">
                Mia <span style={{ color: 'rgb(112,169,211)' }}>Phuong</span>
            </h2>
            <p className="lead">Full Stack Developer</p>
        </section>
    );
};

export default Hero;
