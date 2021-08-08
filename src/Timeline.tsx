import React from 'react';

type Event = {
    id: string;
    title: string;
    timestamp: string;
    content: string;
};

const events: Event[] = [
    {
        id: 'create-node-run-script',
        title: 'Created the Node Run Script Buildpack',
        timestamp: 'July 2021',
        content:
            'Created a golang-based buildpack for the Paketo open source project. Allows for Node.js apps to easily set up front-end framework apps like React, Angular, or Vue.',
    },
    {
        id: 'create-gosu',
        title: 'Created Gosu',
        timestamp: 'April 2021',
        content:
            'Created a golang-based API wrapper for the osu!api(v2). Included automatic oauth token checking and revalidation and extra useful functions not available on the api by itself.',
    },
    {
        id: 'start-university',
        title: 'Began Attendence at UCF',
        timestamp: 'August 2019',
        content:
            'Started studying at the University of Central Florida with a major in computer science and minor in Philosophy.',
    },
    {
        id: 'start-yorha-ui',
        title: 'Started YoRHa UI',
        timestamp: 'February 2019',
        content: 'Started my initial work on the YoRHa UI for BetterDiscord',
    },
];

const Timeline: Function = (): JSX.Element => {
    const [selected, setSelected] = React.useState(-1);

    let list = events.map((event: Event, i: number) => {
        let br = <div className="timeline-list_br" />;

        if (events.length - 1 === i) {
            br = <div />;
        }

        return [
            <div
                id={'event_' + event.id}
                className={'timeline-list_event' + (i === selected ? ' selected' : '')}
                onClick={() => (selected === i ? setSelected(-1) : setSelected(i))}
            >
                <span className="timeline-list_stamp">{event.timestamp}</span>
                <span className="timeline-list_title">{event.title}</span>
                <span className="timeline-list_content">{event.content}</span>
            </div>,
            br,
        ];
    });

    return (
        <div className="timeline">
            <p className="txt-subtitle">Timeline</p>
            <div className="timeline-container">
                <div className="timeline-list">{list}</div>
            </div>
        </div>
    );
};

export default Timeline;
