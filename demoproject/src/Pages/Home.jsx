import React, { useEffect } from 'react'
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../product/productSlice';
import { addToCart } from '../cart/cartSlice';
import { sentToProductpage } from '../product/productPageSlice';
import { NavLink } from 'react-router-dom';

const Home = () => {


    const dispatch = useDispatch();
    const { product } = useSelector(
        (state) => state.products
    )

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]
    )

    const handleSubmit = (e, p) => {
        e.preventDefault();
        dispatch(addToCart(p));
        alert("Product added to cart")
    }

    return (
        <Layout>
            <div>
                <div className='productContainer' >
                    {product?.map((p, index) => (
                        <div className='product_card' key={p.id}>
                            <div className='productImage'>
                                <img src={`${p.images}`} alt="Product" />
                            </div>
                            <div className='productInfo'>
                                <NavLink to={`/products/${p.id}`} key={p.id}>
                                    <h1 onClick={() => {
                                        dispatch(sentToProductpage(p));
                                    }}>{p.title}</h1>
                                </NavLink>
                                <h2>{`${p.category}`}</h2>
                                <p>
                                    {`${p.description}`}
                                </p>
                                {/* <h5>{`Rating : ${p.rating.rate}`}</h5> */}
                                <h3>{`${Math.floor(p.price)}$`}</h3>
                                <button className='addToCartButton' onClick={(e) => handleSubmit(e, p)}>Add to Cart</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Home;
