import logo from './../images/Mask Group 21.png'
import logoOne from './../images/rythm.png'
import logoTwo from './../images/share.png'
import Article from './article'
const Technology = () =>{
    return(

        <>

        <div id='tContainer'>
        <div id='tHead'className='Heading'>
            <div className= 'mainHeadingOne'>The</div>
            <div className= 'mainHeadingTwo'> Siren</div>
        </div>
        <div class='tStart'>Get Started</div>
        </div>
        <hr id='tLine' className='headLine'/>
        <div id='tSubHead' className= 'mainHeadingTwo'>5 Ways to animate a React app.</div>
        <div className='techContainer'>
            <div className='techImage'>
                <img className='techImage' src = {logo} alt='techImage'/> 
            </div>
            <div className='techPerson'>
                <div id='techName'>Dmitry Nozhenko</div>
                <div id='techRead'>Jan 28 2019,-10 min read</div>
            </div>
            <div className='techLogo'>
               knfjlenb
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
                <img id='reactImage' src='https://miro.medium.com/max/2456/1*1Z177dpTeAp7uEFc5Zx2xg.png' alt='reactImage' />
            </div>

            <div id='techDetails'>Animation in ReactJs app is a popular topic and there are many ways to create different
                types of animations.Many developers create animation exclusively using css and adding 
                classes to HTML tags. This is a great way and you should use it. If you want to create 
                complex animations you can pay attention to GreenSock. GreenSock is the most powerful 
                animation platform. There are also a lot of libraries, components for creating animation 
                ct. Let’s talk about them</div>
            <div id='snippetImage'>
                <img src = 'https://i.redd.it/i7gcp34a0cg61.jpg' alt='codeSnippet'></img>
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
                <div id='techName'>Dmitry Nozhenko</div>
                <div id='techRead'>Jan 28 2019,-10 min read</div>
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