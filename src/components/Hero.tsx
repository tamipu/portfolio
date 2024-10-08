import React from 'react';

const Hero: React.FC = () => {
    return (
        <section
            className="hero d-flex flex-column justify-content-center align-items-center text-center p-5"
            style={{ height: '75vh' }}
        >
            <img
                src="/photo.jpeg"
                alt="Phuong's Avatar"
                className="avatar rounded-circle mb-4"
                style={{ width: '180px', height: '180px' }}
            />
            <h2 className="display-4" style={{ fontFamily: 'Lobster, cursive', fontSize: '4rem' }}>
                Mia <span style={{ color: 'rgb(112,169,211)' }}>Phuong</span>
            </h2>
            <p className="lead">Full Stack Developer</p>
        </section>
    );
};

export default Hero;
