import React, { useEffect } from 'react'
import { viewCustomerProperty } from '../../store/CustomerSlice';
import { useDispatch,useSelector } from 'react-redux';
import CustomerNavBar from './CustomerNavBar';

function CustomerProperties() {

    const PropertyList = useSelector(state => state.customer);
    const id=useSelector(state=>state.user.userid)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewCustomerProperty(id));
    }, []);

    const searchHandler = () => {
        //const id = document.getElementById("userid").value;
        dispatch(viewCustomerProperty(id))
        console.log(PropertyList)
    }


    return (
        <div>
            <CustomerNavBar/>
            <h1>My Properties</h1>
            <br />
            <br />
                    {PropertyList.customerList.map((prop)=>
                        <div className="col-lg-4 pb-5 inner">
                            <div className="card ho">
                                <div className="view overlay">
                                     <img className="card-img-top" src="\img\building2.jpg" alt="First Image" />
                                        <a hrf="#!">
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">{prop.configuration}</h3>
                                    <p className="card-text"><span><b>$&nbsp;</b></span><b>{prop.offerCost}</b><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><b>{prop.areaSqft}</b></span><span>sqft.</span></p>
                                     <p className="card-text"><i>{prop.street}</i><span>&#44;</span> <span>{prop.city}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><b>{prop.address}</b></span></p>
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    )
}

export default CustomerProperties;
