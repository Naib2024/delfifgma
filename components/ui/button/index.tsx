import React from 'react';

interface ButtonProps {
    text: string;
    bg: string;
    textHoverColor: string;
}

const Button: React.FC<ButtonProps> = ({ text, bg, textHoverColor }) => {
    return (
        <button className={`${bg} ${textHoverColor} bg-[#FF8A00]  text-lg sm:text-xl lg:text-2xl px-6 py-3 rounded-full hover:text-white transition`}>
            {text}
        </button>
    );
};

export default Button;
