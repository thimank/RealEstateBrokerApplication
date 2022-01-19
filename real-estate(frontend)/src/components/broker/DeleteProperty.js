import React from 'react'
import { deletingProperty } from '../../store/PropertySlice';
import { useDispatch,useSelector } from 'react-redux';
import BrokerNavBar from './BrokerNavBar';

function DeleteProperty() {

    const dispatch = useDispatch();

    const deleteHandler = () => {
        const propId = document.getElementById("propid").value;
        dispatch(deletingProperty(propId))
        alert("Property deleted Successfully");
    }

    return (
        <div>
            <BrokerNavBar/>
            <h1>Delete Property</h1>
            <br />
            <div >
                <label><b>Enter Property Id :</b></label><br />
                <input type="text" id="propid" />
                <button className="btn btn-dark " onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteProperty;