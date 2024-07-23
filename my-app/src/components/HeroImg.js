import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/lsu-eng.webp"

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
       <div className="mask">
        <img className="into-img"
        src={IntroImg} alt="IntroImg" />
        </div> 
        <div className="content">
            <p>HI, I'M SHAWN.</p>
            <h1>LSU Computer Engineering Student</h1>
            <div>
                <Link to="/skills" className="btn">Skills</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg