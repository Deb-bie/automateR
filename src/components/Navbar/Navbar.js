import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';



const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);



    return (
        <div className='nav-container'>
            <div className='logo'>

                <h2>
                    <Link to='/' className='logo-link' onClick={handleClick}>
                        automate
                        <span>R</span>
                    </Link>
                </h2>
                
            </div>

            <div className="navbar-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>

            <div className={click ? "button-container active" : "button-container"}>
                
                <Link to="/add" className="nav-btn-link" onClick={handleClick} >Add Reminders</Link>
                <Link to="/view" className="nav-btn-link">View Reminders</Link>
                
            </div>
        </div>

    )
}

export default Navbar