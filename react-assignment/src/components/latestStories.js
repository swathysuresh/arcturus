import { useState, useEffect } from "react";
import axios from "axios";

    
const LatestStories = props =>{
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
        <div className='containerLatestStories'>
            <div>
                <div className='subHeading'>Latest Stories</div>
            <hr className='underlineLatest'/>
            </div>
            <hr className = 'articleLineStories'/>
            <div className='containerStories'>
            
                <div className='stories'>
                    <div className='styleHeading'>{content.articleHeading}</div>
                    <p>{content.articleContentShort}</p>
                    <div>{content.articleDate}</div>
                </div>
                <hr className = 'storiesLine'/>
                <div className='stories'>
                    <div className='styleHeading'>{content.articleHeading}</div>
                    <p>{content.articleContentShort}</p>
                    <div>{content.articleDate}</div>
                </div>
                <hr className = 'storiesLine'/>
                <div className='stories'>
                    <div className='styleHeading'>{content.articleHeading}</div>
                    <p>{content.articleContentShort}</p>
                    <div>{content.articleDate}</div>
                </div>
            </div>
        </div>
        </>
    );
}
export default LatestStories;