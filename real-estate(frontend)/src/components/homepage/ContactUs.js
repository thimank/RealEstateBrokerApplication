import React from 'react'
import NavBar from './NavBar'
import  "../../Styles/Contactus.css"

function Contactus() {
    return (
        <div>
             <NavBar/>
		<h1 className>Visit at our Location or Contact us</h1>
	    
		<div className="contact-in">
			<div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980558.095720102!2d78.03354206249998!3d13.018868000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267df3a93fe71%3A0xab461be7b92777e4!2sJLL%20Chennai!5e0!3m2!1sen!2sin!4v1630651976708!5m2!1sen!2sin" />			
            </div>
			<div className="contact-form">
				<h1>Contact Us</h1>
				<form >
					<input type="text" placeholder="Name" className="contact-form-txt" />
					<input type="text" placeholder="Email" className="contact-form-txt" />
					<textarea placeholder="Message" className="contact-form-textarea"></textarea>
					<input type="submit" name="Submit" className="contact-form-btn" />
				</form>
			</div>
		</div>
	
        </div>
    )
}

export default Contactus