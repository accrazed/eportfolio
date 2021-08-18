import React from 'react';

type Project = {
    id: string;
    title: string;
    description: string;
    link: URL;
    image?: URL;
};

const projects: Project[] = [
    {
        id: 'node_run_script',
        title: 'Node Run Script',
        description:
            'Golang-based buildpack for the open-source community Paketo. Allows for automatic building of framework apps like React, Angular, or Vue before turning them into OCI images.',
        link: new URL('https://github.com/AccraZed/node-run-script'),
    },
    {
        id: 'yorha_ui',
        title: 'YoRHa UI for BetterDiscord',
        description:
            "SASS-based streamlined environment for a project that completely replaces Discord's default UI. Received over 60 thousand downloads and was featured on PC Gamer Magazine.",
        link: new URL('https://github.com/AccraZed/YoRHA-UI-BetterDiscord'),
    },
    {
        id: 'gosu',
        title: 'Gosu',
        description: 'Golang-based wrapper for the osu!APIv2. ', // TODO: ADD MORE INFO
        link: new URL('https://github.com/AccraZed/Gosu'),
    },
    {
        id: 'tippal',
        title: 'TipPal',
        description:
            'React Native-based phone app that tracks your tips and compiles relevant data for you.',
        link: new URL('https://github.com/AccraZed/TipPal'),
    },
];

const Projects: Function = (): JSX.Element => {
    const [selected, setSelected] = React.useState(-1);

    let list = projects.map((project: Project, i: number) => {
        return (
            <div
                className={'selectable-outer' + (i === selected ? ' selected' : '')}
                onClick={() => (selected === i ? setSelected(-1) : setSelected(i))}
                key={project.id + i}
            >
                <div className="selectable-inner">
                    <div className="bullet" />
                    <span>{' ' + project.title + ' '}</span>
                </div>
            </div>
        );
    });

    let img = undefined;
    let card = <div className="card"></div>;

    if (selected !== -1) {
        img = <img src={projects[selected].image?.toString()} alt="" /> || '';
        card = (
            <div className="card card-selected">
                <div className="card-header">
                    <span>{projects[selected].title}</span>
                    <div
                        className="gh-icon"
                        onClick={() => window.open(projects[selected].link.toString())}
                    />
                </div>
                <div className="card-body">
                    <div className="card-image">{img}</div>
                    <div className="card-description">{projects[selected].description}</div>
                    <div className="card-divider"></div>
                    <div className="card-description"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="projects">
            <p className="txt-subtitle">Projects</p>
            <div className="list">
                <div className="section txt-subtext">{list}</div>
                {card}
            </div>
        </div>
    );
};

export default Projects;
