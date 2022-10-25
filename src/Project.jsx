import React from 'react';
import ReactDOM from 'react-dom';
import {FaSearch} from 'react-icons/fa';
import MyImage3 from './icons8-winter-48.jpeg';



const Project = () => {
    return (  
        <div>
        <section>
             <div class="search">
            <form action="#">
                <input type="text"
                    placeholder=" Search Courses"
                    name="search"/>
                <button>
                  <FaSearch/>
                </button>
            </form>
        </div>
       
        </section>
        <article className='Section-main'>
<div className='div-main'>
    <div> <p>Trends For You</p></div>
    <div> <img src={MyImage3} alt="winter" width={20} /></div>
</div>
<div className='div-main1'><p>Trending worldwide</p>
<span>#Breaking News</span></div>
<div className='div-main2'>
    <div><p>Space</p>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></div>
    <div><img src="https://wallpapercave.com/wp/wp4347132.jpg" alt="moon" width={100} height={70}/></div>
    
</div>
<div className='div-main3'><span>You'll see top.</span></div>
<div className='div-main1' style={{borderBottom:"0.5px solid #666"}}><p>Trending worldwide</p>
<span>#World News</span>
<p style={{marginTop:"4px",marginBottom:"10px"}}>1.21k Tweets</p></div>

<div className='div-main1'><p>Trending worldwide</p>
<span>#Breaking News</span></div>
<div className='div-main2'>
    <div><p>Animals</p>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></div>
    <div><img src="https://img.freepik.com/premium-photo/portrait-white-spotted-cat-light-blue-background-cat-looks-intently-into-distance_199743-12057.jpg" alt="Cat" width={100} height={70}/></div>
    
</div>
<div className='div-main3'><span>2,282 people are Treanding.</span></div>
<div className='div-main1' style={{borderBottom:"0.5px solid #666"}}><p>Trending worldwide</p>
<span>#GreatTweetOnTime</span>
<p style={{marginTop:"4px",marginBottom:"10px"}}>100k Tweets</p>
</div>
<div className='show-more'><a href="#">Show more</a></div>
</article>
        </div>
    );
}
 
export default Project;