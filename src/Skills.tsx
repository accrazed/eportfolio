import logoGo from './assets/logo_go.svg';
import logoRust from './assets/logo_rust.svg';

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
                className={'logo-' + skill.name}
            />
        );
        if (skill.example !== undefined) {
            return <a href={skill.example.toString()}>{svg}</a>;
        }
        return svg;
    });
    return <div className="logo-grid">{logos}</div>;
};

export default Skills;
