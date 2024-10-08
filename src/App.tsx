import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="app-container"
             style={{ backgroundColor: 'rgb(1,32,51)' }}>
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    );
};

export default App;
