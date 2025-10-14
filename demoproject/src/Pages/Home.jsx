import React, { useEffect } from 'react'
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../product/productSlice';
import { addToCart } from '../cart/cartSlice';
import { sentToProductpage } from '../product/productPageSlice';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
    const dispatch = useDispatch();

    const { product } = useSelector((state) => state.products)

    const productsResults = useSelector((state) => state.searchResults)

    const showResults = productsResults.results.products;

    const hasSearchResults = showResults && product.length > 0;

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    const handleSubmit = (e, p) => {
        e.preventDefault();
        dispatch(addToCart(p));
        toast.success("Product added to cart")
    }

    return (
        <Layout>
            <ToastContainer />
            <div className='productContainer' >
                {(hasSearchResults ? showResults : product)?.map((p, index) => (
                    <div className='product_card' key={index}>
                        <div className='productImage'>
                            <img src={`${p.images}`} alt="Product" loading='lazy' />
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
                            <h3>{`${Math.floor(p.price)}$`}</h3>
                            <button className='addToCartButton' onClick={(e) => handleSubmit(e, p)}>Add to Cart</button>
                        </div>

                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Home;
