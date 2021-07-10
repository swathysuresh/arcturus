import React from 'react';
import './menu.css'

function menu(props) {
    return (
        <>
        <div className='menu'>
        <span className='span__lang'>
            <select id="dropdown__lang">
                <option value="1">FR</option>
                <option value="2" selected="selected">EN</option>
                <option value="3">HINDI</option>
            </select>
        </span>
        <span className = 'span__curr'>
            <select id="dropdown__curr">
                <option value="1">CAD</option>
                <option value="2" selected="selected">$</option>
                <option value="3">INR</option>
            </select>
        </span>
        <span className = 'span__profile'>
         <i class="fa fa-user"></i>  
            My Profile
        </span>
        <span className='cart__logo'>
            <i class="fa fa-shopping-cart"></i>   
        </span>
        <span className='cart__itemCount'></span>
        <span className='cart__itemPrice'></span>
        <span className='searchIcon'>
            <i class="fa fa-search"></i>   
        </span>
        </div>
        <div className='mainHeading'>
            iSHOP
        </div>
        <div className='menuContainer'>
            <div class="dropdown"><button class="dropbtn">HOME</button></div>
            <div class="dropdown">
                <button class="dropbtn">STORE</button>
                <div class="dropdown-content">  
                    <div class="row">
                        <div class="column">
                        <h3>Accessories</h3>
                        <a href='/store/accessories'>AirPort &amp; Wireless</a>
                        <a href='/store/accessories'>AppleCare</a>
                        <a href='/store/accessories'>Bags, Shells &amp; Sleeves</a>
                        <a href='/store/accessories'>Business &amp; Security</a>
                        <a href='/store/accessories'>Cables &amp; Docks</a>
                        <a href='/store/accessories'>Cameras &amp; Video</a> 
                        <a href='/store/accessories'>Car &amp; Travel</a> 
                        <a href='/store/accessories'>Cases &amp; Films</a>
                        </div>
                        <div class="column">
                        <h3>Category</h3>
                        <a href='/store/accessories'>Link 1</a>
                        <a href='/store/accessories'>Link 2</a>
                        <a href='/store/accessories'>Link 3</a>
                        </div>
                        <div class="column">
                        <h3>Category</h3>
                        <a href='/store/accessories'>Link 1</a>
                        <a href='/store/accessories'>Link 2</a>
                        <a href='/store/accessories'>Link 3</a>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="dropdown"><button class="dropbtn">iPHONE</button></div>
                    <div class="dropdown"><button class="dropbtn">iPAD</button></div>
                    <div class="dropdown"><button class="dropbtn">MACBOOK</button></div>
                    <div class="dropdown"><button class="dropbtn">ACCESSORIES</button></div>
                </div>
        </>
    );
}

export default menu;