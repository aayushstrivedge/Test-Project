import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const cartCount = useSelector((state) => state.cartProduct.products).length;



    return (
        <nav>
            <ul>
                <li> <NavLink to={"/"}>Home</NavLink></li>
                <li>Contact us</li>
                <li>avout us</li>
                <li><NavLink to={"/todolist"}>To Do List</NavLink></li>
                <li> <NavLink to={"/cart"}> 🛒Cart {cartCount}</NavLink> </li>
                <li> <NavLink to={"/login"}> Login</NavLink> </li>
                <li> <NavLink to={"/register"}> Register</NavLink> </li>
            </ul>
        </nav>
    )
}

export default Header
