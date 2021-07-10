import logo from './../images/Mask Group 21.png'
import logoOne from './../images/rythm.png'
import logoTwo from './../images/share.png'
import Article from './article'
import { useState, useEffect } from "react";
import axios from 'axios';


const  Technology = props =>{
    const [content,setContent] = useState(1);
    useEffect(()=>{
        axios.get("http://localhost:3001/technology")
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

        <div id='tContainer'>
        <div id='tHead'className='Heading'>
            <div className= 'mainHeadingOne'>The</div>
            <div className= 'mainHeadingTwo'> Siren</div>
        </div>
        <div className='tStart'>Get Started</div>
        </div>
        <hr id='tLine' className='headLine'/>
        <div id='tSubHead' className= 'mainHeadingTwo'>{content.heading}</div>
        <div className='techContainer'>
            <div className='techImage'>
                <img className='techImage' src = {logo} alt='techImage'/> 
            </div>
            <div className='techPerson'>
                <div id='techName'>{content.author}</div>
                <div id='techRead'>{content.read}</div>
            </div>
            <div className='techLogo'>
               logo
            </div>

        </div>
        <div className='tLeftImage'>
            <div id='tTopImage'><img src = {logoOne}alt='tLeftImage'>
            </img></div>
            <div><img img src = {logoTwo} alt='tLeftImage'>
            </img></div>
        </div>

        <div className='techContainerTwo'>

            <div>
                <img id='reactImage' src={content.reactImage} alt='reactImage' />
            </div>

            <div id='techDetails'>{content.techDetails}</div>
            <div id='snippetImage'>
                <img src = {content.snippetImage} alt='codeSnippet'></img>
            </div>
            <div className='buttonGroup'>
                <button className='buttonStyle'>Reset</button>
                <button className='buttonStyle'>JavaScript</button>
                <button className='buttonStyle'>Animation</button>
            </div>
            <div id='tTopImage'><img src = {logoOne}alt='tLeftImage'>
            </img></div>
            <hr></hr>
            <div className='techContainerThree'>
            <div className='techImage'>
                <img className='techImage' src = {logo} alt='techImage'/> 
            </div>
            <div id='author'className='techPerson'>
                <div>WRITTEN BY</div>
                <div id='techName'>{content.author}</div>
                <div id='techRead'>{content.read}</div>
            </div>
            </div>
            <hr></hr>
        </div>
        <div id='tFooter'>
            <div className= 'footerHead'>More From The Siren</div>
            <hr className= 'footerHead' borderColor= '#F0F0F0'></hr>
            <div id='footerFlex'>
                <Article />
                <Article />
                <Article />
                
            </div>
        </div>
        


        </>
    );
}

export default Technology;