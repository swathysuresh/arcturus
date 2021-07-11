import React from 'react';
import './Home.css'
import BestSeller from '../components/bestSeller';
import Product from '../components/product';

import {useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getProducts as listProducts } from '../redux/actions/productActions';

function Home() {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);

    const { products, loading, error } = getProducts;

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])



    return (
        <>
        <div className='home___screen'>
                
                <div className='bannerImage'>
                    <div className = 'bannerText'>

                        <div className='imageHead'>iPhone X</div>
                        <div className='imagePara'>Dolore dolor sunt minim dolore. Quis sunt commodo 
                        aliqua aliquip duis amet deserunt duis est sint. Deserunt 
                        reprehenderit do nisi ullamco duis incididunt do anim occaecat nisi qui 
                        non dolore amet.</div>
                        <div className='imageMore'>MORE</div>

                    </div>
                </div>

                <BestSeller />
                <br/>
                <br/>
                <div className='products'>
                {loading?<h1>Loading...</h1>:error?<h2>{error}</h2>:products.map(product=>(
                <Product
                key={product._id}
                productId={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
                />))}
                </div>

         </div>
        </>
    );
}

export default Home;