import SubArticle from "./subArticle";
import Posts from "./posts";
import { useState, useEffect } from "react";
import axios from "axios";

const LatestArticle = props =>{
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
            <div className='subHeading'>The Latest Article</div>
            <hr className='underlineLatest'/>
            <div>
                <div  className='BigArticle'>
                    <div id='bigImage'>
                        <img src = {content.articleImage} alt='latestArticleImage'/>
                    </div>
                    <div>
                        <div className='styleHeading'>{content.articleHeading}</div>
                        <p>{content.articleContentShort}</p>
                        <div>Travel / {content.articleDate}</div>
                    </div>
                    <div className='advertisement'>Advertisement</div>
                </div>
                <hr className='articleLine'></hr>
                <div className='containerThree'>
                <div className='verticleArticle'>
                    <SubArticle />
                    <hr className='articleLine'></hr>
                    <SubArticle />
                    <hr className='articleLine'></hr>
                    <SubArticle />
                    <div id = 'footer'>
                        <div id= 'footerImage'className= 'imageLeft'>
                            <div className='imageHeading'>Topic</div> 
                            <div className='imageDesc'>Travel/ June 2021</div>    
                        </div>

                    </div>
                </div>
                <div className='topPosts'>
                            <div className='styleHeading'>Top Posts</div>
                            <hr className='underline'/>
                            <img id= 'topPostsImg' src={content.topPostImage} alt='toppostsImage'/>
                            <div className='topPostsHead'>
                                <div className='styleHeading'>{content.articleHeading}</div>
                                <div id='NumOne'>1</div>
                            </div>
                            <div>{content.articleDate}</div>
                            <hr className='postsLine'/>
                            <Posts />
                            <hr className='postsLine'/>
                </div>
                </div>
            </div>
        </>
    );
}
export default LatestArticle;