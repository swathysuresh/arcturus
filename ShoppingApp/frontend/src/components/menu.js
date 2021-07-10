import React from 'react';
import './menu.css'

function menu(props) {
    return (
        <>
        <div className='menu'>
        <div className = 'nav'>
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
         <i className="fa fa-user"></i>  
            My Profile
        </span>
        <span className='cart__logo'>
            <i className="fa fa-shopping-cart"></i>   
        </span>
        <span className='cart__itemCount'></span>
        <span className='cart__itemPrice'></span>
        <span className='searchIcon'>
            <i className="fa fa-search"></i>   
        </span>
        </div>

        </div>

        <div className='headingContainer'>
                <div className='mainHeading'>
                iSHOP</div> 
            
            <div className='hamburger__menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className='menuContainer'>
            <div className="dropdown"><button className="dropbtn">HOME</button></div>
            <div className="dropdown">
                <button className="dropbtn">STORE</button>
                <div className="dropdown-content">  
                    <div className="row">
                        <div className="column">
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
                        <div className="column">
                        <h3>Category</h3>
                        <a href='/store/accessories'>Link 1</a>
                        <a href='/store/accessories'>Link 2</a>
                        <a href='/store/accessories'>Link 3</a>
                        </div>
                        <div className="column">
                        <h3>Category</h3>
                        <a href='/store/accessories'>Link 1</a>
                        <a href='/store/accessories'>Link 2</a>
                        <a href='/store/accessories'>Link 3</a>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="dropdown"><button className="dropbtn">iPHONE</button></div>
                    <div className="dropdown"><button className="dropbtn">iPAD</button></div>
                    <div className="dropdown"><button className="dropbtn">MACBOOK</button></div>
                    <div className="dropdown"><button className="dropbtn">ACCESSORIES</button></div>
                </div>
                <div className='bannerImage'>
                    <div className = 'bannerText'>
                        <div className='imageHead'>iPhone X</div>
                        <div className='imagePara'>Dolore dolor sunt minim dolore. Quis sunt commodo aliqua aliquip duis amet deserunt duis est sint. Deserunt 
                        reprehenderit do nisi ullamco duis incididunt do anim occaecat nisi qui non dolore amet.</div>
                        <div className='imageMore'>MORE</div>
                    </div>
                </div>
        </>
    );
}

export default menu;