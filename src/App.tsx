import React from 'react';
import './css/style.css';
import Trim from './Trim';
import Projects from './Projects';
import AboutMe from './AboutMe';

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
                <p className="txt-subtitle">Projects</p>
                <Projects />
                <AboutMe />
            </div>

            <Trim position="footer" />
        </div>
    );
}

export default App;
