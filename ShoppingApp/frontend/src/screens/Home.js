import React from 'react';
import './Home.css'
import BestSeller from '../components/bestSeller';
import Products from '../components/product';

function Home() {
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
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                </div>

         </div>
        </>
    );
}

export default Home;