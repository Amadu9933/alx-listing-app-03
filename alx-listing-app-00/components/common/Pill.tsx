import React from "react";

interface PillProps {
    label: string;
    selected?: boolean;
    onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, selected = false, onClick }) => {
    return (
        <button
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors duration-150 mr-2 mb-2 focus:outline-none ${selected
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400"
                }`}
            onClick={onClick}
            type="button"
        >
            {label}
        </button>
    );
};

export default Pill;
