import React from 'react'
import Contact from './Contact';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import './FullPortfolio.css'
function FullPortfolio() {
    return (
        <div className='PortfolioBackground'>
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}



export default FullPortfolio