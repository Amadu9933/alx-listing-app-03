import React from "react";
import Button from "@/components/common/Button";
import Image from "next/image";

const accommodationTypes = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Villa",
    "Chalet",
    "Cabin",
    "Apartment",
    "Cottage",
    "Lodge",
    "Retreat",
];

const Header: React.FC = () => {
    return (
        <header className="w-full shadow-md bg-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/next.svg" alt="Logo" width={40} height={40} />
                    <span className="text-2xl font-bold text-blue-600">ALX Listing</span>
                </div>
                {/* Search Bar */}
                <div className="flex-1 mx-8">
                    <input
                        type="text"
                        placeholder="Search for properties, locations..."
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {/* Auth Buttons */}
                <div className="flex gap-2">
                    <Button label="Sign In" onClick={() => { }} />
                    <Button label="Sign Up" onClick={() => { }} />
                </div>
            </div>
            {/* Accommodation Types */}
            <nav className="container mx-auto flex gap-4 px-6 pb-2 overflow-x-auto">
                {accommodationTypes.map((type) => (
                    <span
                        key={type}
                        className="text-gray-600 hover:text-blue-600 cursor-pointer whitespace-nowrap text-sm font-medium"
                    >
                        {type}
                    </span>
                ))}
            </nav>
        </header>
    );
};

export default Header;
