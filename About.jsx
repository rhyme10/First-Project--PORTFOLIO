import React from 'react'
import './About.css'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src=''></img>

            </div>
            <div className="about-section">
                <div className="about-left">
                
                    
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I have always been passionate about software development and have been trying to build my skills in this domain. I have been working for Full-Stack Developer. </p>
                        <p>I just code to decode web development</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS<hr style={{width:"60%"}}></hr></p></div>
                        <div className="about-skill"><p>JAVASCRIPT<hr style={{width:"50%"}}></hr></p></div>
                        <div className="about-skill"><p>REACT JS<hr style={{width:"40%"}}></hr></p></div>
                        <div className="about-skill"><p>NEXT JS<hr style={{width:"40%"}}></hr></p></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements"></div> 
       
        </div>
    )
}
export default About