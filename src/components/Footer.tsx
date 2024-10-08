import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="footer">
            <p>Email: ttmpwork@gmail.com | Phone: (+33) 7 64 35 46 92</p>
            <div className="social-icons">
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
