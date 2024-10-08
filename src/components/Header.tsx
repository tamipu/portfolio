import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Phuong Ta</h1>
            <nav>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
