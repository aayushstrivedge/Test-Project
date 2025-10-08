import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../cart/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();
    const { products, quantity, price, title, thumbnail } = useSelector((state) => state.cartProduct)

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    useEffect(() => {
        console.log(products);

    }, [products])


    return (
        <Layout>
            <section className='cartPage'>
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
                            {products?.map((p, index) => (
                                <tr key={index}>
                                    <td><img src={p.thumbnail} alt="" /></td>
                                    <td><h3>{p.title}</h3></td>
                                    <td>${p.price}</td>
                                    <td>{p.quantity}</td>
                                    <td>
                                        <button className="addToCartButton">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}

export default Cart
