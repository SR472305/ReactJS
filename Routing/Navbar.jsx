import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div>SR</div>
       <ul>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/About_page">About</Link>
         </li>
         <li>
            <Link to="/Contact_page">Contact</Link>
         </li>
         <li>
            <Link to="/Post">Post</Link>    
        </li> 
         <li>
            <Link to="/Feedback_page">Feedback</Link>    
        </li> 
       </ul>
    </div>
  )
}

export default Navbar
