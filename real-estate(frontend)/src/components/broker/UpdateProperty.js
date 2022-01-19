import React from 'react'
import { useForm } from 'react-hook-form';
import { Link,useHistory } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import BrokerNavBar from './BrokerNavBar';
import { addingProperty } from '../../store/PropertySlice';

function UpdateProperty() {

    const { handleSubmit, register, formState:{errors}  } = useForm();
    const dispatch = useDispatch();
    const allData = useSelector(state => state.user)

    const onFormHanlder=(data)=>{
        dispatch(addingProperty(data))
        console.log(data)
        alert("Property Updated Successfully")
    }

    return (
        <div>
            <BrokerNavBar/>
            <form className="inner" onSubmit={handleSubmit(onFormHanlder)}>
            <p className="alert-warning"id="msg"></p>
                <h3>Update Property</h3>

                <div className="form-group">
                    <label>Property Id</label>
                    <input type="text" id="userid" className="form-control" placeholder="Enter Prop Id" 
                    {...register("propId",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.userid && errors.userid.message }</p>
                </div>

                <div className="form-group">
                    <label>Configuration</label>
                    <input type="text" id="configuration" className="form-control" placeholder="Flat/Shop/Plot" 
                    {...register("configuration",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.configuration && errors.configuration.message }</p>
                </div>

                <div className="form-group">
                    <label>Offer Type</label>
                    <input type="text" id="offerType" className="form-control" placeholder="Sell/Rent" 
                    {...register("offerType",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.offerType && errors.offerType.message }</p>
                </div>

                <div className="form-group">
                    <label>Offer Cost</label>
                    <input type="text" id="offerCost"className="form-control" 
                     {...register("offerCost",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.offerCost && errors.offerCost.message }</p>
                </div>

                <div className="form-group">
                    <label>Area sqft.</label>
                    <input type="number" id="areaSqft" className="form-control" 
                     {...register("areaSqft",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.areaSqft && errors.areaSqft.message }</p>
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text" id="city" className="form-control" 
                     {...register("city",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.city && errors.city.message }</p>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" id="address" className="form-control"
                     {...register("address",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.address && errors.address.message }</p>
                </div>

                <div className="form-group">
                    <label>Street</label>
                    <input type="text" id="status" className="form-control"  
                     {...register("street",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.street && errors.street.message }</p>
                </div>

                <div className="form-group">
                    <label>status</label>
                    <input type="text" id="status" className="form-control" placeholder="True/False" 
                     {...register("status",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.status && errors.status.message }</p>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button><br/><br/>
                
            </form>
        </div>
    )
}

export default UpdateProperty;