import React from 'react';
import './css/style.css';
import Trim from './Trim';
import Projects from './Projects';

function App() {
    return (
        <div className="app">
            <Trim position="header" />

            <div className="container">
                <div className="txt-title">Amelia Castilla</div>
                <div className="txt-subtitle tag">
                    Software developer and CS major / Philosophy minor at the University of Central
                    Florida.
                </div>
                <Projects />
            </div>

            <Trim position="footer" />
        </div>
    );
}

export default App;
