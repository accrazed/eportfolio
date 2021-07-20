type Skill = {
    name: string;
    img: URL;
    example?: string;
};

const skills: Skill[] = [
    {
        name: 'Golang',
        img: new URL('file:./assets/logo_go.svg'),
    },
];
const Skills: Function = (): JSX.Element => {
    return <img src={skills[0].img.toString()} />;
};

export default Skills;
