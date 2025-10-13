import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Demo Website. All rights reserved.</p>

                <ul className="footer-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
