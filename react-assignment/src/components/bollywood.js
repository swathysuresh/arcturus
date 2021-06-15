import React from 'react';
import { NavLink } from "react-router-dom";
import './../index.css'
import SubArticle from './subArticle';
import Posts from './posts';

const Bollywood = () =>{

    return(
         <>
        
            <div id='bHead' className='Heading'>
                <div className= 'mainHeadingOne'>The</div>
                <div className= 'mainHeadingTwo'> Siren</div>

                
               
            </div>
            <div>
                            
                <ul className='menu'>
                    <li className='listItem'>Home</li>
                    <li className='listItem'>Bollywood</li>
                    <li className='listItem'>
                    <NavLink className = 'linkStyle' to = '/technology'>Technology</NavLink>
                    </li>
                    <li className='listItem'>Hollywood</li>
                    <li className='listItem'>Fitness</li>
                    <li className='listItem'>Food</li>
                </ul>
                            
            </div>
            <hr className='headLine'/>
            <div className='bollywoodContainer'>
                
                <div>
                <div  className='subHeading'>Bollywood</div>
                <hr id='bTitle' className='underlineLatest'/>
                <SubArticle />
                <SubArticle />
                <SubArticle />
                <SubArticle />
                <SubArticle />
                <SubArticle />
                <SubArticle />

                </div>
                
                <div className='topPosts'>
                            <div className='styleHeading'>Top Posts</div>
                            <hr id= 'bTop' className='underline'/>
                            <img id= 'topPostsImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0akqaazC8bOyBMzd-kevQXn9uFnDnVL-zQ&usqp=CAU' alt='bollywoodImage'/>
                            <div className='topPostsHead'>
                                <div className='styleHeading'>VR, AR, and IoT Tech Proving Invaluable in Retail</div>
                                <div id='NumOne'>1</div>
                            </div>
                            <div>Date</div>
                            <hr class='postsLine'/>
                            <Posts />
                            <div className='bAdvt'>Advertisement</div>

                </div>
            </div>
        </>
        
    );
}
export default Bollywood;