import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="footer">
            <p>Email: ttmpwork@gmail.com | Phone: (+33) 7 64 35 46 92</p>
            <div className="social-icons">
                <a href="https://github.com/tamipu" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/phuong-ta-6989b0190/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </div>
            <p>&copy;2024 All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
