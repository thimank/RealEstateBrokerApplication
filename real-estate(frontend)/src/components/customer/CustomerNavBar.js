import React from 'react';
import { userActions } from '../../store/UserSlice';
import "../../Styles/Customer.css"
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CustomerNavBar() {

    const dispatch = useDispatch();
    const history = useHistory();
    const allData = useSelector(state => state.user)

    const logoutHandler = () => {
        dispatch(userActions.logout())
        history.push("/")
    }

    return (
        <nav className="navbar navbar-light bg-dark">
            <Link to="/customer" className="navbar-brand"><img className="rounded" src="\img\favicon.ico" /></Link>

            <div className="dropdown">
                <button className="dropbtn rounded ">Buy/Rent Property</button>
                <div className="dropdown-content rounded">
                    <Link to="/searchPropertyC">Search By Criteria</Link>
                    <Link to="/buyProperty">All Properties</Link>
                </div>
            </div>

            <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => history.push("/editDetails")}>Edit Details</button>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => history.push("/customerDetails")}>View Details</button>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={logoutHandler}>Logout</button>
            </form>
        </nav>
    )
}
export default CustomerNavBar