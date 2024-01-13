import React from "react";
import aboutimage from './images/about1.png'

function About(){
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
            <div className='about-text'>
                <h1> LEARN MORE ABOUT US</h1>
                <p>Welcome to FitZilla, where cutting-edge AI meets your health and wealth goals. We leverage advanced technology to provide personalized insights, fostering a holistic approach to well-being. Empower yourself with intelligent solutions for a healthier and wealthier future.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About;