import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="d-flex justify-content-center align-items-center p-3">
            <div className="social-icons d-flex justify-content-center">
                <a
                    href="https://github.com/tamipu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-white"
                >
                    <FaGithub size={25} />
                </a>
                <a
                    href="https://www.linkedin.com/in/phuong-ta-6989b0190/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-white"
                >
                    <FaLinkedin size={25} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
