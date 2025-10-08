import React from 'react'
import Layout from '../Layout/Layout'
import { removeCart } from '../cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cartProduct.products)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(removeCart())
    }



    return (
        <Layout>
            <section className='cartPage'>
                <h1>Your Cart</h1>
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
                                    <th>Quantity</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody >
                                {cartItems?.map((p, index) => (
                                    <tr key={index}>
                                        <td><img src={p.images} alt="" /></td>
                                        <td><h3>{p.title}</h3></td>
                                        <td>${p.price}</td>
                                        <td>{p.quantity}</td>
                                        <td>
                                            <button className="addToCartButton" onClick={handleSubmit}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </Layout>
    )
}

export default Cart
