import React from 'react';
import { NavLink } from "react-router-dom";
import './../index.css'
import SubArticle from './subArticle';
import Posts from './posts';
import { useState, useEffect } from "react";
import axios from 'axios';


const Bollywood = props =>{
    const [content,setContent] = useState(1);
    useEffect(()=>{
        axios.get("http://localhost:3001/bollywood")
        .then(res=>{
            console.log(res.data)
            setContent(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

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
                            <img id= 'topPostsImg' src={content.topPostsImage} alt='bollywoodImage'/>
                            <div className='topPostsHead'>
                                <div className='styleHeading'>{content.articleHeading}</div>
                                <div id='NumOne'>1</div>
                            </div>
                            <div>{content.articleDate}</div>
                            <hr className='postsLine'/>
                            <Posts />
                            <div className='bAdvt'>Advertisement</div>

                </div>
            </div>
        </>
        
    );
}

export default Bollywood;