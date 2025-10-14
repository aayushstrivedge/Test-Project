import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../cart/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import { singleProduct } from '../product/productPageSlice';

const Productpage = () => {


    const [product, setSingleProductData] = useState({})

    const { id } = useParams()
    const dispatch = useDispatch();
    // const productPageData = useSelector((state) => state.productPage.individualProduct)
    // const product = productPageData.find((p) => p.id === Number(id));

    const data = async () => {
        const response = await dispatch(singleProduct(id)).unwrap();
        setSingleProductData(response)
    }

    data();

    const handleSubmit = (e, p) => {
        e.preventDefault();
        dispatch(addToCart(p));
        toast.success("Product added to cart!");

    }

    return (
        <Layout>
            <ToastContainer />
            {product ? (
                <div key={product.id} className='productPageContainer'>
                    <div className='singleProductImage'>
                        <img src={`${product.images}`} alt="productPhoto" />
                    </div>
                    <div className='singleProductDescription'>
                        <h4>/{product.category}</h4>
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <h3>Rating : {product.rating}</h3>
                        <button className='addToCartButton2' onClick={(e) => handleSubmit(e, product)}>Add to Cart</button>
                        <p> {product.description}</p>
                    </div>
                </div>
            ) : (
                <>
                    <h1>Product Not found</h1>
                </>)

            }
        </Layout>
    )
}

export default Productpage
