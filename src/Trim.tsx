import React, { FC } from 'react';
interface TrimProps {
    position: 'header' | 'footer';
}

const Trim: FC<TrimProps> = ({ position }) => {
    return (
        <div id={position}>
            <div className="pattern"></div>
            <div className="container">
                <div className="pattern-inner"></div>
            </div>
        </div>
    );
};

export default Trim;
