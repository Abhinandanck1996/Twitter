import React from 'react';
import ReactDOM from 'react-dom';
import MyImage from './icons8-twister-64.jpeg'
import {FaTwitter} from 'react-icons/fa';
import MyImage1 from './icons8-globe-64.jpeg';
import MyImage2 from './icons8-imdb-40.jpeg';
import MyImage3 from './icons8-winter-48.jpeg';
import MyImage4 from './icons8-bird-32.jpeg';
import MyImage5 from './icons8-avatar-67.jpeg';
import MyImage6 from './icons8-unread-messages-50.jpeg';
import MyImage7 from './icons8-heart-plus-50.jpeg';
import MyImage8 from './icons8-globe-50.jpeg';
import MyImage9 from './female.jpeg';

const Categories = () => {
    return (
        
        <section className="Home-section">
          <div className="Home"><div>
          <h1>Home</h1></div>
          <div><FaTwitter className='icons1'/>
          </div></div>
          <article className='Home-article'>
          <div className='Home-div'>
          <div>
<img src={MyImage} alt="twister" />

            </div>
            <div><p className='para' style={{color:"#666"}}>Whats happening?</p></div>
          </div>
          <div className='btn-div'>
          <button className='btn'>tweet</button>
          </div>
          <div>
          <img src={MyImage4} alt="bird" width={20} style={{marginLeft:"90px"}}/>
          <img src={MyImage3} alt="winter" width={20} />
          <img src={MyImage2} alt="imdb" width={20} />
          <img src={MyImage1} alt="globe" width={20} />
          </div>
          </article>
          <article className='second-div'>
          <div className='Home-div'>
          <div>
<img src={MyImage5} alt="twister" style={{marginTop:"-10px"}} />

            </div>
            <div className='para para1'><p style={{fontWeight:"900"}}>Brie <span style={{fontWeight:"50"}}>Sketch_Cmmad pf. 5m</span></p>
            
            <p className='para para1' style={{fontWeight:"50",fontSize:"14px"}}>autem accusantium excepturi quae sed eaque magn <a href='#'>praesentium dolore amet. Impedit, quo!</a></p></div>
          </div>
          <div className='Unread-div'>
          <img src={MyImage6} alt="globe" width={20} style={{marginLeft:"90px"}}/>
          <img src={MyImage7} alt="heart-plus" width={20} />
          <img src={MyImage8} alt="globe-plus" width={20} />
          <img src={MyImage3} alt="winter" width={20} />
          </div>
          </article>
        
          <div className='Home-div Home-div3'>
          <div>
<img src={MyImage5} alt="twister" style={{marginTop:"5px"}} />

            </div>
            <div className='para para1'><p style={{fontWeight:"900"}}>@_yeshwanth_raj</p>
            <p style={{fontWeight:"50",fontSize:"14px"}}>❤Nature is Love,Nature Is Health❤</p>
            </div>
            </div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2022/07/19/08/53/tea-7331591_960_720.jpg" alt="Nature" width={520} style={{borderRadius:"10px",marginLeft:"80px"}} />
            </div>
            <div className='Unread-div'>
          <img src={MyImage6} alt="globe" width={20} style={{marginLeft:"90px"}}/>
          <img src={MyImage7} alt="heart-plus" width={20} />
          <img src={MyImage8} alt="globe-plus" width={20} />
          <img src={MyImage3} alt="winter" width={20} />
          </div>
          <div className='Home-div Home-div4'>
          <div>
<img src={MyImage9} alt="twister" style={{marginTop:"10px"}} />

            </div>
            <div className='para para1'><p style={{fontWeight:"900"}}>Andrea 🌹<span style={{fontWeight:"100"}}>@andy_jamesion. 3m</span></p>
            <p style={{fontWeight:"50",fontSize:"14px"}}>How Many Lemons do I need to Make Lemonade</p>
            
          </div>
          </div>
        </section>
        
      );
}
 
export default Categories;