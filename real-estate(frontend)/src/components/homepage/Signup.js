import React from 'react'
import { useForm } from 'react-hook-form';
import { Link,useHistory } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import NavBar from './NavBar';
import { addCustomerData } from '../../store/CustomerSlice';
import { addUserDetails } from '../../store/UserSlice';

function Signup() {

    const { handleSubmit, register, formState:{errors}  } = useForm();
    const dispatch = useDispatch();
    const allData = useSelector(state => state.user)

    const onFormHanlder=(data)=>{
        if(data.role ==='customer'){
            dispatch(addCustomerData(data))
            alert("Customer Added Successfully")
        }
        else if(data.role ==='broker'){
            dispatch(addUserDetails(data))
            alert("Broker Added Successfully");
            console.log(allData)
        }       
    }

    return (
        <div>
            <NavBar/><br/>
            <form className="inner" onSubmit={handleSubmit(onFormHanlder)}>
            <p className="alert-warning" id="msg"></p>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" id="custName" className="form-control" placeholder="Enter Name" 
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

                <div className="form-group">
                    <label>User Type</label>
                    <select id="role"  className="form-control" placeholder="Select type"
                     {...register("role",{
                        required: "Required"})}>
                        <option value="customer">Customer</option>
                        <option value="broker">Broker</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">log in?</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup
