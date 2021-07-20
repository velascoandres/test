import React from 'react';

type Color = 'green' | 'pink' | 'blue' | 'dark';

const colors: Record<Color, string> = {
    green: '#3BA252',
    pink: '#E75E91',
    blue: '#1A1E39',
    dark: '#2d2d2d',
};

export type ButtonProps = {
    iconClass?: string;
    title: string;
    color?: Color;
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
    iconClass,
    title,
    color,
    onClick,
}: ButtonProps) => {
    const buttonSyle = {
        background: color ? colors[color] : 'transparent',
    };

    return (
        <button className="button" style={buttonSyle} onClick={onClick}>
            <i className={`${iconClass ?? ''}`}>{` ${title}`}</i>
        </button>
    );
};
