import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../store/UserSlice';
import BrokerNavBar from './BrokerNavBar';

function BrokerDetails() {

    const dispatch = useDispatch();
    const allData = useSelector(state => state.user)

    const searchHandler = () => {
        const id = document.getElementById("userid").value;
        dispatch(fetchUserById(id))
        console.log(allData.userList)

        document.getElementById("city").innerHTML = allData.userList.city;
        document.getElementById("email").innerHTML = allData.userList.email;
        document.getElementById("mobile").innerHTML = allData.userList.mobile;
        document.getElementById("password").innerHTML = allData.userList.password;
    }
    return (
    
    <div>
        <BrokerNavBar/>
        <div className="inner">
            
            <p className="alert-warning" id="msg"></p>
            <h3>Customer Details</h3><br />
            <div >
                <label><b>Userid :</b></label><br />
                <input type="text" id="userid" placeholder="Enter Userid" />
            </div><br />
            <div >
                <label><b>City :</b></label>
                <p id="city" />
            </div><br />
            <div >
                <label><b>Email :</b></label>
                <p id="email" />
            </div><br />
            <div >
                <label><b>Mobile No. :</b></label>
                <p id="mobile" />
            </div><br />
            <div >
                <label><b>Password :</b></label>
                <p id="password" />
            </div><br />

            <button className="btn btn-dark btn-lg btn-block" onClick={searchHandler}>Search</button>
        </div>
        </div>
    )
}

export default BrokerDetails