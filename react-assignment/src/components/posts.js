import { useState, useEffect } from "react";
import axios from "axios";

   

const Posts = props =>{
    const [content,setContent] = useState(1);
    useEffect(()=>{
        axios.get("http://localhost:3001/home")
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
            <div className='postsContainer'>
                <div className='postsImageContainer'>
                    <img className='postsImage' src={content.articleImage} alt='postsImage'/>
                </div>
                <div className='topPostsHead'>
                    <div className='styleHeading'>{content.articleHeading}</div>
                    <div id='NumOne'>2</div>
                </div>
                <div>{content.articleDate}</div>    
            </div>
            <hr className='postsLine'/>
            <div className='postsContainer'>
                <div className='postsImageContainer'>
                    <img className='postsImage' src={content.articleImage} alt='postImage'/>
                </div>
                <div className='topPostsHead'>
                    <div className='styleHeading'>{content.articleHeading}</div>
                    <div id='NumOne'>3</div>
                </div>
                <div>{content.articleDate}</div>
            </div>
            <hr className='postsLine'/>
            <div className='postsContainer'>
                <div className='postsImageContainer'>
                    <img className='postsImage' src={content.articleImage} alt='postsImage'/>
                </div>
                <div className='topPostsHead'>
                    <div className='styleHeading'>{content.articleHeading}</div>
                    <div id='NumOne'>4</div>
                </div>
                <div>{content.articleDate}</div>    
            </div>
            
        </>
    );
}
export default Posts;