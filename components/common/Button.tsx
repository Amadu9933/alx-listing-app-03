//This file will define a reusable Button component, which will be used for actions like “Book Now,” “Details,” etc.

import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, style }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 text-white font-medium rounded-md transition duration-200 ${disabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
                }`}
            style={style}
        >
            {label}
        </button>
    );
};

export default Button;