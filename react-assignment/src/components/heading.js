import React  from "react";
import { NavLink } from "react-router-dom";
import './../index.css'
import Banner from './banner'
import Latest from './theLatest'
import LatestArticle from './latestArticle'
import LatestStories from "./latestStories";

const Heading = ()=>{
    return(
        <>
            <div className='Heading'>
                        <div className= 'mainHeadingOne'>The</div>
                        <div className= 'mainHeadingTwo'> Siren</div>
                    </div>
                    
                        <div>
                            
                            <ul className='menu'>
                                <li className='listItem'>Home</li>
                                <li className='listItem'>
                                <NavLink className = 'linkStyle' to = '/bollywood'>Bollywood</NavLink></li>
                                <li className='listItem'>Technology</li>
                                <li className='listItem'>Hollywood</li>
                                <li className='listItem'>Fitness</li>
                                <li className='listItem'>Food</li>
                            </ul>
                            
                        </div>
                        <hr className='headLine'/>
                        <Banner/>
                        <Latest/>
                        <LatestArticle />
                        <LatestStories />
        </>
    );
}
export default Heading;
