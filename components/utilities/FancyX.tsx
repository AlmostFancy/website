import React from 'react';

type FancyXProps = {
    black?: boolean;
    className?: string;
};

function FancyX({ black = true, className = '' }: FancyXProps) {
    return (
        <svg
            width="43"
            height="43"
            viewBox={`0 0 43 43`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                x="6.14355"
                width="52.123"
                height="8.68716"
                transform="rotate(45 6.14355 0)"
                fill={black ? 'black' : 'white'}
            />
            <rect
                x="42.999"
                y="6.14258"
                width="52.123"
                height="8.68716"
                transform="rotate(135 42.999 6.14258)"
                fill={black ? 'black' : 'white'}
            />
        </svg>
    );
}

export default FancyX;
