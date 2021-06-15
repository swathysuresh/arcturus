import SubArticle from "./subArticle";
import Posts from "./posts";
const LatestArticle = () =>{
    return(
        <>
            <div className='subHeading'>The Latest Article</div>
            <hr className='underlineLatest'/>
            <div>
                <div  className='BigArticle'>
                    <div id='bigImage'>
                        <img src = 'https://miro.medium.com/max/300/1*p73sqhj78NTitHlEZOKT_w.jpeg' alt='latestArticleImage'/>
                    </div>
                    <div>
                        <div className='styleHeading'>VR, AR, and IoT Tech Proving Invaluable in Retail</div>
                        <p>Virtual reality and augmented reality are taking ground with the retail 
                            sector, according to recent research conducted by ICX Association. The 
                            report shows a clear upward trend, with the value of this technology in the
                            retail sector estimated to reach $1.6 billion by 2025.
                        </p>
                        <div>Travel / Date</div>
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
                            <img id= 'topPostsImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0akqaazC8bOyBMzd-kevQXn9uFnDnVL-zQ&usqp=CAU' alt='toppostsImage'/>
                            <div className='topPostsHead'>
                                <div className='styleHeading'>VR, AR, and IoT Tech Proving Invaluable in Retail</div>
                                <div id='NumOne'>1</div>
                            </div>
                            <div>Date</div>
                            <hr class='postsLine'/>
                            <Posts />
                            <hr class='postsLine'/>
                </div>
                </div>
            </div>
        </>
    );
}
export default LatestArticle;