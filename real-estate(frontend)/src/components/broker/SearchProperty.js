import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch,useSelector} from 'react-redux';
import { searchProperty } from '../../store/PropertySlice';
import BrokerNavBar from './BrokerNavBar';

function SearchPropertyB() {

    const { handleSubmit, register} = useForm();
    const dispatch = useDispatch();
    const allData = useSelector(state => state.property)

    const onFormHanlder=(data)=>{
        dispatch(searchProperty(data))
        console.log(allData)
    }

    return (
        <div>
            <BrokerNavBar/><br/>
            <form className="inner" onSubmit={handleSubmit(onFormHanlder)}>
            <p className="alert-warning" id="msg"></p>
                <h3>Search Property by Criteria</h3>

                <div className="form-group">
                    <label>Configuration</label>
                    <input type="text" id="config" className="form-control" placeholder="Enter Configuration" 
                    {...register("config")}/>
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text" id="city" className="form-control" placeholder="Enter City" 
                    {...register("city")}/>
                </div>

                <div className="form-group">
                    <label>offer Type</label>
                    <input type="text" id="offer"className="form-control" placeholder="Enter offer Type" 
                     {...register("offer")}/>
                </div>

                <div className="form-group">
                    <label>Minimum Cost</label>
                    <input type="number" id="minCost" className="form-control" placeholder="Enter Min Cost" 
                     {...register("mobile")}/>
                </div>

                <div className="form-group">
                    <label>Maximum Cost</label>
                    <input type="number" id="maxCost" className="form-control" placeholder="Enter Max Cost" 
                     {...register("maxCost")}/>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Search</button>
            </form>
            <div><br/>

            {allData.propertyList.map((prop) =>
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
                    <br/></div>
            )}

            </div>
        </div>
    )
}

export default SearchPropertyB;
