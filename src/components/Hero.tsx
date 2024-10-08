import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero text-center p-5 bg-dark">
            <img
                src="/photo.jpeg"
                alt="Phuong's Avatar"
                className="avatar rounded-circle mb-4"
                style={{ width: '150px', height: '150px' }}
            />
            <h2 className="display-4">Hey, I'm Phuong</h2>
            <p className="lead">Full Stack Developer</p>
        </section>
    );
};

export default Hero;
