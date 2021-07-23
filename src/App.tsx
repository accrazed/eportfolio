import React from 'react';
import './css/style.css';
import Trim from './Trim';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Timeline from './Timeline';

function App() {
    return (
        <div className="app">
            <Trim position="header" />

            <div className="main">
                <div className="txt-title">Amelia Castilla</div>

                <div className="txt-subtext tag">
                    Software developer and CS major / Philosophy minor at the University of Central
                    Florida.
                </div>

                <a href="./resume.pdf" target="_blank" className="button resume-button">
                    <span>Resume</span>
                </a>
                <Projects />
                <AboutMe />
                <Skills />
                <Timeline />
            </div>

            <Trim position="footer" />
        </div>
    );
}

export default App;
