import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../product/productSlice';

const Home = () => {

    // const [products, setProducts] = useState([]);

    // const getAllProducts = async () => {
    //     try {
    //         const { data } = await axios.get("https://fakestoreapi.com/products")
    //         setProducts(data);

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     getAllProducts();
    // }, [])

    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(
        (state) => state.products
    )

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]
    )

    console.log(product)

    return (
        <Layout>
            <div>
                <div className='productContainer' >
                    {product?.map((p) => (
                        <div className='product_card' key={p.id}>
                            <div className='productImage'>
                                <img src={`${p.image}`} alt="Product" />
                            </div>
                            <div className='productInfo'>
                                <h1>{`${p.title}`}</h1>
                                <h2>{`${p.category}`}</h2>
                                <p>
                                    {`${p.description}`}
                                </p>
                                <h5>{`Rating : ${p.rating.rate}`}</h5>
                                <h3>{`${Math.floor(p.price)}$`}</h3>
                                <button className='addToCartButton' onClick={""}>Add to Cart</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Home;
