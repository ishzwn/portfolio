import "./FooterStyles.css"

import React from 'react'

import { FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaStar } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left"></div>
            <div className="phone">
                <h4><FaPhone size={20} style={{ color: 
            "#fff", marginRight: "2rem" }} />
            504-912-9410</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{ color: 
            "#fff", marginRight: "2rem" }} />
            slabis1@lsu.edu</h4>
            </div>
            <div className="right">
                <h4>Shawn Labis</h4>
                <p>This is shawn labis.</p>
                <div className="social">
                <FaLinkedin size={30} style={{ color: 
            "#fff", marginRight: "1rem" }} />
                 <FaGithub size={30} style={{ color: 
            "#fff", marginRight: "1rem" }} />
                <FaStar size={30} style={{ color: 
            "#fff", marginRight: "1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer