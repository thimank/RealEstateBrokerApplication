import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/body" className="navbar-brand" href="#"><img className="rounded" src="\img\favicon.ico"/></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/body" className="nav-link active py-10" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link py-10" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/developers" className="nav-link py-10" href="#">Developers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ourproperties" className="nav-link py-10" href="#">Our Properties</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <Link to="/contactus" className="nav-link py-10" >Contact Us</Link>
                        <Link to="/login"><button className="btn btn-outline-success" type="submit"> Login </button></Link>
                        <Link to="/signup" ><button className="btn btn-outline-success" type="submit">Sign Up</button></Link>
                        </form>
                    </div>
                </div>
            
            </nav>
        </div>
        )}

export default NavBar;
