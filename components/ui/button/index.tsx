import React from 'react';

interface IButtonProps {
    text: string;
}

const Button = ({ text, }: IButtonProps) => {
    return (
        <button className={`bg-[#FF8A00]  text-lg sm:text-xl lg:text-2xl px-6 py-3 rounded-full hover:text-white transition`}>
            {text}
        </button>
    );
};

export default Button;
