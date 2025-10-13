import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    const cartCount = useSelector((state) => state.cartProduct.products).length;

    const authData = localStorage.getItem("auth");

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/")
    }

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/todolist">To Do List</NavLink></li>
                <li><NavLink to="/cart">🛒 Cart ({cartCount})</NavLink></li>

                <div className="auth-buttons">
                    {authData ? (
                        <button className="logoutBtn" onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </>
                    )}
                </div>
            </ul>
        </nav>

    )
}

export default Header
