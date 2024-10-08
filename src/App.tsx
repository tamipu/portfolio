import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header/>
            <Hero/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default App;
