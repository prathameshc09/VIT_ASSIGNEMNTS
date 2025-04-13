import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
            <p>© 2025 MyStore | Follow us on</p>
            <div className="flex justify-center gap-4 mt-2">
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
