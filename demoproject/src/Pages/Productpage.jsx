import React from 'react'
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../cart/cartSlice';

const Productpage = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const productPageData = useSelector((state) => state.productPage.individualProduct)

    const handleSubmit = (e, p) => {
        e.preventDefault();
        dispatch(addToCart(p));
        alert("Product added to cart")

    }
    const demoDunction = () => {

    }

    demoDunction()

    return (
        <Layout>
            {productPageData.map((p) => (
                <div key={p.id} className='productPageContainer'>
                    <div className='singleProductImage'>
                        <img src={`${p.images}`} alt="productPhoto" />
                    </div>
                    <div className='singleProductDescription'>
                        <h4>/{p.category}</h4>
                        <h1>{p.title}</h1>
                        <h2>${p.price}</h2>
                        <h3>Rating : {p.rating}</h3>
                        <button className='addToCartButton2' onClick={(e) => handleSubmit(e, p)}>Add to Cart</button>
                        <p> {p.description}</p>
                    </div>
                </div>
            )
            )}
        </Layout>
    )
}

export default Productpage
