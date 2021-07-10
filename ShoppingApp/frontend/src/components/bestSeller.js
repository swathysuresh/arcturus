import React from 'react';
import './bestSeller.css'

function bestSeller(props) {
    return (
        <>
        <div>
            <div className='heading'>
                BEST SELLER
            </div>

            <div>
                <ul className='list__cat'>
                    <li className='categories'>ALL</li>
                    <li className='categories'>MAC</li>
                    <li className='categories'>iPhone</li>
                    <li className='categories'>iPad</li>
                    <li className='categories'>iPod</li>
                    <li className='categories'>Accessories</li>
                </ul>
                <select id="dropdown__cat">
                <option value="1">ALL</option>
                <option value="2" selected="selected">MAC</option>
                <option value="3">iPhone</option>
                <option value="4">iPad</option>
                <option value="5">iPod</option>
                <option value="6">Accessories</option>
                </select>
            </div>

        </div>
        </>
    );
}

export default bestSeller;