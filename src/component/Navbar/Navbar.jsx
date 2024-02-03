import React from 'react'
import { navLinks } from '../../Data'
import DarkMode from '../DarkMode/DarkMode'
import { FaAlignJustify,  FaTimes} from "react-icons/fa";
import './_navbar.scss'
// import { useRef } from 'react';

const Navbar = () => {


  return (
    <header className='container'>
        <nav className="nav-container">
            <div className="nav-logo">
                <h2>Abadom Emeka</h2>
            </div>
            <div className="nav-links">
                <ul className="nav-list">
                    {navLinks.map((navlink, index) => {
                        return <li key={index}><a href ={`#${navlink}`}>{navlink}</a></li>
                    })}
                </ul>
                <div className='close-toggle'><FaTimes /></div>
            </div>
            <div className="nav-toggle">
                {/* <DarkMode /> */}
                <FaAlignJustify className='toggle-btn' />
                <FaTimes />
            </div>

        </nav>
        

      
    </header>
  )
}

export default Navbar
