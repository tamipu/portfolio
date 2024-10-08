import React from 'react';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="d-flex justify-content-between align-items-center p-3" style={{height: '15vh'}}>
            <div className="d-flex align-items-center">
                <Link className="nav-link text-white" to="/"><FaHome className="text-white h4" /></Link>
            </div>
            <nav className="mx-auto">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">About</Link>                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/projects">Projects</Link>                    </li>
                </ul>
            </nav>
            <div>
                <FaEnvelope className="text-white h4 me-1" href="#contact"/>

            </div>
        </header>
    );
};

export default Header;
