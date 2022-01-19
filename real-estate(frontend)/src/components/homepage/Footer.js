import React from 'react'
import { Link } from 'react-router-dom'
import "../../Styles/Home.css"

function Footer() {
    return (
        <div className="footer">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark footer">
                <Link to="/" className="custom-centered">Estate Agency&copy;<b> Copyright Since 2021</b></Link> 
            </nav>
        </div>
    )
}

export default Footer
