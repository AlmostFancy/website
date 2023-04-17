import React from 'react';

type XProps = {
    color?: string;
};

function AlmostFancyX({ color = 'e53e5f' }: XProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
            <defs></defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <polygon
                        style={{ fill: `#${color}` }}
                        points="600 137.41 462.59 0 300 162.59 137.41 0 0 137.41 162.59 300 0 462.59 137.41 600 300 437.41 462.59 600 600 462.59 437.41 300 600 137.41"
                    />
                </g>
            </g>
        </svg>
    );
}

export default React.memo(AlmostFancyX);
