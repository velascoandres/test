import React from 'react';

const colors: Record<'green' | 'pink' | 'blue', string> = {
    green: '#3BA252',
    pink: '#E75E91',
    blue: '#1A1E39',
};

export type ButtonProps = {
    iconClass?: string;
    title: string;
    color?: 'green' | 'pink' | 'blue';
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
    iconClass,
    title,
    color,
    onClick,
}: ButtonProps) => {
    const buttonSyle = {
        backgroundColor: color ? colors[color] : colors.green,
    };

    return (
        <button className="button" style={buttonSyle} onClick={onClick}>
            <i className={`${iconClass ?? ''}`}>{` ${title}`}</i>
        </button>
    );
};
