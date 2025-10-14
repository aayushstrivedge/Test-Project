import React from 'react'
import Layout from './../Layout/Layout';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { sentToProductpage } from '../product/productPageSlice';
import { addToCart } from '../cart/cartSlice';

const SearchPage = () => {

    const dispatch = useDispatch()

    const productsResults = useSelector((state) => state.searchResults)

    const showResults = productsResults.results.products;

    const handleSubmit = (e, p) => {
        e.preventDefault();
        dispatch(addToCart(p));
        toast.success("Product added to cart")
    }

    return (
        <Layout>
            <ToastContainer />
            <section>

                <h1>Search Results</h1>
                {showResults ? <>
                    <div className='productContainer' >
                        {showResults?.map((p, index) => (
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
                                    {/* <h5>{`Rating : ${p.rating.rate}`}</h5> */}
                                    <h3>{`${Math.floor(p.price)}$`}</h3>
                                    <button className='addToCartButton' onClick={(e) => handleSubmit(e, p)}>Add to Cart</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </> : <>
                    <h1>no prodduct to shown</h1>
                </>}

            </section>

        </Layout>
    )
}

export default SearchPage
