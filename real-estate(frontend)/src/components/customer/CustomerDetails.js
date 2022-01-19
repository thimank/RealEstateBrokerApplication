import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../store/UserSlice';
import CustomerNavBar from './CustomerNavBar';

function CustomerDetails() {

    const dispatch = useDispatch();
    const allData = useSelector(state => state.user)

    useEffect(() => {
        const id=allData.userid
        dispatch(fetchUserById(id))
    }, []);
    
    return (
    
    <div>
        <CustomerNavBar/>
        <div className="inner">
            
            <p className="alert-warning" id="msg"></p>
            <h3>Customer Details</h3><br />
            <div >
                <label><b>Userid :</b></label><br />
                <p id="userid">{allData.userList.userid}</p>
            </div><br />
            <div >
                <label><b>City :</b></label>
                <p id="city" >{allData.userList.city}</p>
            </div><br />
            <div >
                <label><b>Email :</b></label>
                <p id="email" >{allData.userList.email}</p>
            </div><br />
            <div >
                <label><b>Mobile No. :</b></label>
                <p id="mobile" >{allData.userList.mobile}</p>
            </div><br />
            <div >
                <label><b>Password :</b></label>
                <p id="password" >{allData.userList.password}</p>
            </div><br />
        </div>
        </div>
    )
}

export default CustomerDetails;
