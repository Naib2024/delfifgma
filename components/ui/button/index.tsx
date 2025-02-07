import React from 'react';

interface IButtonProps {
    text: string;
    classes?:string;
    onClick():void
}

const Button = ({ text, onClick, classes}: IButtonProps) => {
    return (
        <button onClick={onClick} className={`bg-[#FF8A00] text-lg sm:text-xl lg:text-2xl px-6 py-3 rounded-full hover:text-white transition ${classes}`}>
            {text}
        </button>
    );
};

export default Button;
