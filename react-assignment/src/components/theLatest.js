import Article from "./article";
const Latest = () =>{
    return(
        <>
            <div className='subHeading'>The Latest</div>
            <hr className='underlineLatest'/>
            <div className='articlesContainer'>
                <Article/>
                <Article/>
                <Article/>                
            </div>
        </>
    );
}
export default Latest;