import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { searchResults } from './../search/searchSlice';
import { toast, ToastContainer } from 'react-toastify';
import { sentToProductpage } from '../product/productPageSlice';

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchinput, setsearchinput] = useState()
    let [resulttitle, setResultTitle] = useState([])
    const cartCount = useSelector((state) => state.cartProduct.products).length;


    const authData = localStorage.getItem("auth");

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/")
    }

    const fetchSuggetion = async (searchinput) => {
        const suggetion = await dispatch(searchResults(searchinput)).unwrap()
        const showResults = suggetion.products;
        const titles = showResults.map((item) => ({
            id: item.id,
            title: item.title
        }));
        setResultTitle(titles)
    }
    if (searchinput) {
        setTimeout(() => {
            fetchSuggetion(searchinput)
        }, 2000);
    }

    const handleSearch = async () => {
        const searchResultproducts = await dispatch(searchResults(searchinput)).unwrap()
        if (searchResultproducts.products.length === 0) {
            toast.error("No product Found");
            navigate("/")
        } else {

        }
    }
    return (
        <nav className="navbar">
            <ToastContainer />
            <ul className="nav-list">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/todolist">To Do List</NavLink></li>
                <li className='inputListCont'>
                    <input type="search" id='searchBox' value={searchinput} onChange={(e) => setsearchinput(e.target.value)} name='searchBox' placeholder='Search products' required />
                    <button type="button" onClick={handleSearch} className='searchBtn'>Search</button>
                    <div className='suggetionBoxdiv'>
                        <h4>Matching results</h4>
                        {resulttitle?.map((p, index) => (
                            <NavLink to={`/products/${p.id}`} key={index}>
                                <h6 onClick={() => {
                                    dispatch(sentToProductpage(p.id));
                                }}>{p.title}</h6>
                            </NavLink>
                        ))}
                    </div>
                </li>
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
