import { useState, useEffect } from "react";
import axios from "axios";
const SubArticle = props =>{
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
            <div className= 'articleContainerTwo'>
                <div className= 'articleImageContainer'>
                    <img className= 'articleImage'src={content.articleImage} alt='subArticleImage'/>
                </div>
                <div className= 'articleDetails'>
                    <div className='styleHeading'>{content.articleHeading}</div>
                    <p>{content.articleContentShort}
                    </p>
                    <div>Travel / {content.articleDate}</div>
                </div>
            </div>

        </>
    );
}
export default SubArticle;