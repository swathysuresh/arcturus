import { useState, useEffect } from "react";
import axios from "axios";



const Article = props =>{
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
                    <div className='article'>
                        <img  src={content.articleImage}alt='articleImage'/>
                        <div className='articleDesc'>
                            <div className ='styleHeading'>{content.articleHeading}</div>
                            <p>{content.articleContent}</p>
                            <div>Travel / {content.articleDate}</div>
                        </div>

                </div>
        </>
    );
}

export default Article;