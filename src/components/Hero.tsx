import React from 'react';

const Hero: React.FC = () => {
    return (
        <section
            className="hero d-flex flex-column justify-content-center align-items-center text-center p-5"
            style={{ height: '75vh' }}>
            <div className="avatar-container mb-4" style={{ position: 'relative', padding: '5px' }}>
                <div
                    className="ring"
                    style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'linear-gradient(135deg, #f09, #3023ae, #00f, #ff0)',
                        backgroundSize: '400% 400%',
                        animation: 'changeColor 8s ease infinite',
                    }}
                >
                    <img
                        src="/photo.png"
                        alt="Phuong's Avatar"
                        className="avatar rounded-circle"
                        style={{ width: '170px', height: '170px', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <h2 className="display-4" style={{ fontFamily: 'Lobster, cursive', fontSize: '4rem' }}>
                Mia <span style={{ color: 'rgb(112,169,211)' }}>Phuong</span>
            </h2>
            <p className="lead">Full Stack Developer</p>
        </section>
    );
};

export default Hero;
