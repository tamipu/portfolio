import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import ProjectsList from "./components/projects/ProjectsList";
import Contact from "./components/contact/Contact";

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
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
