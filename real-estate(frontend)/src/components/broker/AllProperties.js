import React, { useEffect } from 'react'
import { fetchPropertyData} from '../../store/PropertySlice';
import { useDispatch, useSelector } from 'react-redux';
import BrokerNavBar from './BrokerNavBar';

function AllProperties() {

    const allPropertyList = useSelector(state => state.property);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPropertyData());
    }, []);

    console.log(allPropertyList)
    return (
        <div>
            <BrokerNavBar />
            <section className="section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading about-heading">List of Our Amazing Properties</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                    </div>
                </div>
            </section>

            {allPropertyList.propertyList.map((prop) =>
            
                <div className="col-lg-6 pb-5 inner">
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
                            <p className="card-text" style={{ color: prop.status===false ? "red" : "green"}}><b>{prop.status===false?"Sold":"Available"}</b></p>
                        </div>
                    </div>
                </div>
            )
            }

        </div>
    )
}

export default AllProperties;
