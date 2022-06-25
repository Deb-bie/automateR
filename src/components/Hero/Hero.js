import React from 'react';
import './Hero.css';
import Background from '../../assets/p1.jpg';
import { Link } from 'react-router-dom'




const Hero = () => {
    return (
        <div className="main-container">
            <div className="main-background">
                <img src={Background} />
            </div>

            <div className="main-content">
                <h1 className="title">
                    Let's help you keep your favorite people in mind
                </h1>

                <p className="p">
                    Add your memos today and let's remind you later
                </p>

                <div className="hero-btn">
                    <Link to='add' className="button">Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero