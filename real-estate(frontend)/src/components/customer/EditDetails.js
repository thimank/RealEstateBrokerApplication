import React from 'react'
import { useForm } from 'react-hook-form';
import { Link,useHistory } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import CustomerNavBar from './CustomerNavBar';
import { updateCustomerData } from '../../store/CustomerSlice';

function EditDetails() {

    const { handleSubmit, register, formState:{errors}  } = useForm();
    const dispatch = useDispatch();
    const allData = useSelector(state => state.user)

    const onFormHanlder=(data)=>{
        dispatch(updateCustomerData(data))
        console.log(data)
        alert("Data Updated Successfully")
    }

    return (
        <div>
            <CustomerNavBar/>
            <form className="inner" onSubmit={handleSubmit(onFormHanlder)}>
            <p className="alert-warning"id="msg"></p>
                <h3>Edit/Update Details</h3>

                <div className="form-group">
                    <label>User Id</label>
                    <input type="text" id="userid" className="form-control" placeholder="Enter User Id" 
                    {...register("userid",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.userid && errors.userid.message }</p>
                </div>

                <div className="form-group">
                    <label>Customer name</label>
                    <input type="text" id="city" className="form-control" placeholder="Enter Name" 
                    {...register("custName",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.custName && errors.custName.message }</p>
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text" id="city" className="form-control" placeholder="Enter City" 
                    {...register("city",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.city && errors.city.message }</p>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" id="email"className="form-control" placeholder="Enter email" 
                     {...register("email",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.email && errors.email.message }</p>
                </div>

                <div className="form-group">
                    <label>Mobile No.</label>
                    <input type="number" id="mobile" className="form-control" placeholder="Enter Mobile no." 
                     {...register("mobile",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.mobile && errors.mobile.message }</p>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Enter password" 
                     {...register("password",{
                        required: "Required"})}/>
                    <p className="alert-danger">{errors.password && errors.password.message }</p>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                
            </form>
        </div>
    )
}

export default EditDetails
