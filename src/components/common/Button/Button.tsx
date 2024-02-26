import React from 'react';
import { IconType } from 'react-icons';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconType;
    text: string;
    customStyle?: string;
}

const classes = "flex hover:bg-gray-700 duration-300 cursor-pointer items-center bg-gray-500 border border-gray-400 text-white justify-center gap-x-[.4rem] rounded-md px-4 py-1 "

const Button: React.FC<ButtonProps> = ({ icon: Icon, text, customStyle, ...props }) => {
    return (
        <button className={`${classes} ${customStyle}`} {...props}>
            {Icon && <Icon />} {text}
        </button>

    );
};

export default Button;
