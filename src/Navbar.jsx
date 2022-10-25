import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import {FaBars, FaBell, FaBookmark, FaDollarSign, FaEnvelope, FaExclamation, FaFedex, FaHashtag, FaHome, FaList, FaNewspaper, FaUser, FaUsers} from 'react-icons/fa'

const Navbar = () => {
    let[change,setChange]=useState(true)
    let DemoRef=useRef()
    let HandleClick=()=>{
        setChange(!change)
        if (change==true) {
            DemoRef.current.classList.add("open")
        }
        else{
            DemoRef.current.classList.remove("open") 
        }
    }
    return ( 
        <div className="Navbar-div">
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt="Skype" width="50px" />
            <ul>
                <li><a href="#" className='active'><FaHome className='icons'/>Home</a></li>
                <li><a href="#"><FaHashtag className='icons'/>Explore</a></li>
                <li><a href="#"><FaBell className='icons'/>Notifications</a></li>
                <li><a href="#"><FaEnvelope className='icons'/>Messages</a></li>
                <li><a href="#"><FaBookmark className='icons'/>Bookmarks</a></li>
                <li><a href="#"><FaList className='icons'/>Lists</a></li>
                <li><a href="#"><FaUser className='icons'/>Profiles</a></li>
                <li><a href="#" onClick={HandleClick}><FaBars className='icons'/>More</a>
                <ul className='sidebar' ref={DemoRef}> <li><a href="#"><FaUsers className='icons'/>Friend Requests</a></li>
                <li><a href="#"><FaNewspaper className='icons'/>News</a></li>
                <li><a href="#"><FaExclamation className='icons'/>Feed</a></li></ul></li>
            </ul>
            <button className='btn'>tweet</button>
        </div>
     );
}
 
export default Navbar;