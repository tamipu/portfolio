import React, {useState} from 'react';
import {FaHome, FaEnvelope, FaTimes, FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="d-flex justify-content-between align-items-center p-3" style={{height: '15vh'}}>
            <div className="d-flex align-items-center">
                <Link className="nav-link text-white" to="/">
                    <FaHome className="text-white h4"/>
                </Link>
            </div>
            <nav className="mx-auto navbar">
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                </div>
                <ul className={`nav justify-content-center ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about" onClick={toggleMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/projects" onClick={toggleMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" onClick={toggleMenu}
                           href="https://drive.google.com/drive/folders/1h_hwcz3izG8CL3q57YbDNTkuPM2xwoUE?usp=share_link"
                           target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <Link className="nav-link text-white" to="/contact" onClick={toggleMenu}>
                    <FaEnvelope className="text-white h4 me-1"/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
