import React from 'react'
import Layout from '../Layout/Layout'
import { removeCart } from '../cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cartProduct.products)

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleSubmit = (id) => {
        dispatch(removeCart(id))
    }

    const handleClick = () => {
        navigate("/checkout")
    }

    const auth = localStorage.getItem("auth")

    return (
        <Layout>
            <ToastContainer />
            <h1>Your Cart</h1>
            <section className='cartPage'>
                {cartItems.length === 0 ? (
                    <div><h1>Your Cart is Empty</h1></div>
                ) : (

                    <div className='cartContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody >
                                {cartItems?.map((p, index) => (
                                    <tr key={index}>
                                        <td><img src={p.images} alt="" /></td>
                                        <td><h3>{p.title}</h3></td>
                                        <td>${p.price}</td>
                                        <td>
                                            <button className="addToCartButton" onClick={() => handleSubmit(p.id)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className='chechoutContainer'>
                    <h1>Checkout</h1>
                    <hr />
                    <div>
                        <h3>Total : ${total}</h3>
                    </div>
                    <button className='addToCartButton2' onClick={handleClick}> {auth ? cartItems.length > 0 ? "Checkout" : "Please add products" : "Please Login"}
                    </button>
                </div>

            </section>
        </Layout>
    )
}

export default Cart
