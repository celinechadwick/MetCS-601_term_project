import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';


function Nav() {
    return (
        <Router>
            <div className='main-nav'>
                <div className='nav-items'>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/experience">Experience</Link> 

                </div>
            </div>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/experience" element={<Experience />} />

                </Routes>

        </Router>
    );
}

export default Nav;
