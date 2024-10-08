import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import ProjectsList from "./components/ProjectsList";

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-900 text-white"
                 style={{ backgroundColor: 'rgb(1,32,51)' }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<ProjectsList />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
