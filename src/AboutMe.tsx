import React from 'react';

const AboutMe: Function = (): JSX.Element => {
    return (
        <div className="skills">
            <p className="txt-subtitle">About Me</p>
            <div className="section">
                <span className="txt-subtext">
                    Computer Science major and Philosophy minor with an emphasis on algorithms and
                    AI. Experienced with maintaining large-scale CI pipelines across open and close
                    sourced products, and creating fast and secure OCI images for containerized
                    applications.
                </span>
            </div>
        </div>
    );
};

export default AboutMe;
