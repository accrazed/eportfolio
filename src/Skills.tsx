import logoC from './assets/logo_c.svg';
import logoDocker from './assets/logo_docker.svg';
import logoGCPCompute from './assets/logo_gcp-compute.svg';
import logoGit from './assets/logo_git.svg';
import logoGo from './assets/logo_go.svg';
import logoJava from './assets/logo_java.svg';
import logoPython from './assets/logo_python.svg';
import logoReact from './assets/logo_react.svg';
import logoRust from './assets/logo_rust.svg';
import logoSass from './assets/logo_sass.svg';
import logoTypescript from './assets/logo_typescript.svg';

type Skill = {
    name: string;
    img: string;
    example?: URL;
};

const skills: Skill[] = [
    {
        name: 'Golang',
        img: logoGo,
        example: new URL('https://github.com/AccraZed/node-run-script'),
    },
    {
        name: 'Java',
        img: logoJava,
    },
    {
        name: 'Python',
        img: logoPython,
        example: new URL('https://github.com/AccraZed/Klove/tree/main/src'),
    },
    {
        name: 'C',
        img: logoC,
    },
    {
        name: 'Sass',
        img: logoSass,
        example: new URL('https://github.com/AccraZed/YoRHA-UI-BetterDiscord'),
    },
    {
        name: 'React',
        img: logoReact,
        example: new URL('https://github.com/AccraZed/accrazed.github.io'),
    },
    {
        name: 'Typescript',
        img: logoTypescript,
        example: new URL('https://github.com/AccraZed/accrazed.github.io'),
    },
    {
        name: 'Docker',
        img: logoDocker,
    },
    {
        name: 'GCP Compute',
        img: logoGCPCompute,
    },
    {
        name: 'Git',
        img: logoGit,
    },
    {
        name: 'Rust',
        img: logoRust,
        example: new URL(
            'https://github.com/AccraZed/language-reinforcement/tree/master/rust-projects/maze'
        ),
    },
];

const Skills: Function = (): JSX.Element => {
    let logos = skills.map((skill: Skill, i: number) => {
        let svg = (
            <img
                key={skill.name + i}
                src={skill.img}
                alt={skill.name + ' logo'}
                className={'logo logo-' + skill.name}
            />
        );
        if (skill.example !== undefined) {
            return <a href={skill.example.toString()}>{svg}</a>;
        }
        return svg;
    });
    return (
        <div className="skills">
            <p className="txt-subtitle">Tools</p>
            <div className="logo-grid">{logos}</div>
        </div>
    );
};

export default Skills;
