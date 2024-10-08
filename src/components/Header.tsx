import React from 'react';
import { FaHome } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="d-flex justify-content-between align-items-center p-3 bg-dark">
            <div className="d-flex align-items-center">
                <FaHome className="text-white h4" />
            </div>
            <nav className="mx-auto">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#projects">Projects</a>
                    </li>
                </ul>
            </nav>
            <div>
                <a className="nav-link text-white" href="#contact">Contact Me</a>
            </div>
        </header>
    );
};

export default Header;
