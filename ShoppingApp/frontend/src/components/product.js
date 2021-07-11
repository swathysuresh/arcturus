import React from 'react';
import './product.css'

import { Link } from 'react-router-dom';

function product(props) {
    return (
        <>
        <div className='product__container'>
            <img src='https://image.shutterstock.com/image-vector/hand-holding-mobile-phone-flat-260nw-247245826.jpg'
            alt='productIMAGE'/>
            <p className='productName'>ProductOne</p>
            <p classname= 'productInfo'>
                Reprehenderit amet anim dolore ipsum dolor occaecat sit consequat 
                fugiat labore amet quis laboris nulla. Id consectetur consectetur 
                ullamco adipisicing eu enim. Pariatur nulla anim Lorem ipsum ea laboris. 
                Cupidatat nostrud ipsum nulla consectetur ex sint adipisicing.
            </p>
            <p className='productPrice'>$4999</p>
            <p className='productRating'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </p>

            <Link to={'/product/${1111}'}  className = 'viewButton'>View</Link>
            
        </div>
        </>
    );
}
                {/* rating = 3;
                for (const i of rating) {
                    <span class="fa fa-star checked"></span>
                }
                const unchecked = 5 - rating;
                for (const j of unchecked) {
                    <span class="fa fa-star"></span>
                } */}

export default product;