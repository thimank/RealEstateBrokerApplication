import React from 'react'
import "../../Styles/Developers.css"
import NavBar from './NavBar'

function About() {
    return (
        <div>
            <NavBar/>
            <h1 className="about-heading">We Help You Find Your Perfect Home</h1><br/><br/>
            <br/><br/>
            <img src="\img\slide-about-1.jpg"  width="90%"/>
        </div>
    )
}

export default About