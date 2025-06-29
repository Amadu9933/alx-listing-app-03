import React from "react";
import { UI_TEXT } from "@/constants";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gray-100 py-6 mt-8 border-t">
            <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
                {UI_TEXT.FOOTER.COPYRIGHT}
            </div>
        </footer>
    );
};

export default Footer;
