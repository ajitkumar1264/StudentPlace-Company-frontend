import React, { useContext,useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import context from '../Context/context'
function Navbar() {

  return (
    
    <>
    
    <header>
        <nav>
        <h3 class="logo">Place</h3>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/studentlist">RegisterStudent</Link></li>
            <li><Link to="">services</Link></li>
      <li><Link to="/compdata">YourData</Link></li>
            
        </ul>
        <div class="auth">

            <button><Link to="/login">login</Link></button>
            <button> <Link to="/signup">signup</Link></button>
        </div>
    </nav>
    </header>
    
    </>
  )
}

export default Navbar