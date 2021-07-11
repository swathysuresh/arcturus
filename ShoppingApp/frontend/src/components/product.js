import React from 'react';
import './product.css'

import { Link } from 'react-router-dom';

function Product({imageUrl,name,price,description,productId}) {
    return (
        <>
        <div className='product__container'>
            <img src={imageUrl}
            alt={name}/>
            <p className='productName'>{name}</p>
            <p classname= 'productInfo'>
                {description.substring(0,100)}...
            </p>
            <p className='productPrice'>${price}</p>
            <p className='productRating'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </p>

            <Link to={'/product/${productId}'}  className = 'viewButton'>View</Link>
            
        </div>
        </>
    );
}

export default Product;