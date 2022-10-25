import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Json from './project.json';
import './global.css'
import './global1.css'
import Navbar from './Navbar';
import Categories from './Categories';
import Project from './Project.jsx';


function App() {
//     let[json,setJson]=useState(Json.products)
//     let DownRef=useRef()
//     let[change,setChange]=useState(true)
//     let[color,setColor]=useState(true)
//     let ColorRef=useRef()
//     let ColorChange=()=>{
// setColor(!color)
// if (color===true) {
//     ColorRef.current.classList.add('close')
// }
// else{
//     ColorRef.current.classList.remove('close')
// }
//     }
//     let HandleEvent=()=>{
//         setChange(!change)
//         if (change===true) {
//             DownRef.current.classList.add("open")
//         }
//         else{
//             DownRef.current.classList.remove("open")
//         }
//     }
//    return(
// <div>
//     {json.map(value=>{
//         return(
//             <div>
//                 <table border="2px" cellPadding="20px">
//                     <tr>
//                         <td>{value.Name}</td>
//                         <td>{value.Age}</td>
//                         <td>{value.Location}</td>
//                     </tr>
//                 </table>
               
//                 </div>
//         )
//     })}
//         <ul className='ulblock' onClick={ColorChange}>
//               <li><a href="#" className='active' ref={ColorRef}>Home</a></li>
//               <li><a href="#">Contact</a></li>
//               <li><a href="#" onClick={HandleEvent}>Profile</a>
//                   <ul className='dropdown' ref={DownRef}>
//                       <li><a href="#">Update Profile</a></li>
//                       <li><a href="#"> Update Account</a></li>
//                       <li><a href="#"> Reset Password</a></li>
//               </ul>
//               </li>
//           </ul>
// </div>
return(
    <section>
        <article className='Main-comp'>
            <div className='Main-div1'>
                <Navbar/>
            </div>
            <div className='Main-div2'>
                <Categories/>
            </div>
            <div className='Main-div3'>
                <Project/>
            </div>
        </article>
    </section>
)
   
}

export default App;