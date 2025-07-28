// components/Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TbTool } from 'react-icons/tb';
import { Navigate, NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full border-b py-4 border-gray-200 z-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600 flex items-center space-x-2">
                    <TbTool size={50} />
                    <NavLink to="/">ETBnews</NavLink>
                </div>

                {/* Desktop NavLinks */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink>
                    <NavLink to="/articles" className="text-gray-700 hover:text-blue-600">Articles</NavLink>
                    <NavLink to="/resources" className="text-gray-700 hover:text-blue-600">Resources</NavLink>
                    <NavLink to="/about" className="text-gray-700 hover:text-blue-600">About</NavLink>
                    <NavLink to="/" className="block py-1 text-gray-700 hover:text-blue-500 border-1 px-3 border-gray-200 cursor-pointer hover:bg-gray-200 rounded-full" onClick={() => { Navigate('/') }}>Start For Free</NavLink>
                </nav>

                {/* Mobile Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 text-2xl focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden px-4">
                    <NavLink to="/" className="block py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/articles" className="block py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Articles</NavLink>
                    <NavLink to="/resources" className="block py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Resources</NavLink>
                    <NavLink to="/about" className="block py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>About</NavLink>
                    <div
                        className="block py-1 text-gray-700 hover:text-blue-500 border-1 px-3 border-gray-200 w-32 hover:bg-gray-200 rounded-full"
                        aria-label="Get Starte to our newsletter"
                        role="button"
                        aria-placeholder='Call to action'
                        onClick={() => { Navigate('/') }}>
                        Start For Free
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
