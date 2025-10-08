import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>avout us</li>
                <li><NavLink to={"/todolist"}>To Do List</NavLink></li>
                <li> <NavLink to={"/cart"}> 🛒Cart {0} </NavLink> </li>
            </ul>
        </nav>
    )
}

export default Header
