import React from 'react';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="d-flex justify-content-between align-items-center p-3" style={{ height: '15vh' }}>
            <div className="d-flex align-items-center">
                <Link className="nav-link text-white" to="/">
                    <FaHome className="text-white h4" />
                </Link>
            </div>
            <nav className="mx-auto">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://drive.google.com/drive/folders/1h_hwcz3izG8CL3q57YbDNTkuPM2xwoUE?usp=share_link" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <Link className="nav-link text-white" to="/contact">
                    <FaEnvelope className="text-white h4 me-1" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
