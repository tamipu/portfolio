import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
