import React, { useState } from 'react'
import { navLinks } from '../../Data'
import DarkMode from '../DarkMode/DarkMode'
import { FaAlignJustify,  FaTimes} from "react-icons/fa";
import './_navbar.scss'
import { Variant, motion } from 'framer-motion';
// import { useRef } from 'react';

const Navbar = () => {

    const [ toggle, setToggle] = useState(false);

    const menuVariants = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            },

        },
    };

    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.3,
            },
        },
    };



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
            <div className='dark-mode'>
                <DarkMode />
            </div>
            <div className = "nav-toggle">
                <FaAlignJustify onClick={() => {
                    setToggle(true)
                }} className='toggle-btn' />
            </div>
            <motion.div className="mobile-menu"
                variants={menuVariants}
                initial = "hidden"
                animate = {toggle ? "visible": "hidden"}
            >
            </motion.div>
            <motion.div className='close-toggle'
                variants={navLinkVariants}
                animate={toggle ? "visible" : "hidden"}
                >
                <FaTimes onClick={ () => {
                    setToggle(false)
                }} />
                {navLinks.map((navlink, index) => {
                        return <li key={index}><a href ={`#${navlink}`}>{navlink}</a></li>
                    })}
            </motion.div>

        </nav>
        

      
    </header>
  )
}

export default Navbar
