import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <Link to="/" className="text-xl font-bold">MyStore</Link>
            <ul className="flex gap-4">
                <li><Link to="/">Home</Link></li>
                <li><a href="#products">Products</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
