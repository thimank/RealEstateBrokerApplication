import React from 'react'
import "../../Styles/Home.css"
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser, userActions } from '../../store/UserSlice';
import NavBar from './NavBar';

function Login() {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const allData = useSelector(state => state.user)


    const onFormHanlder = (data) => {
        dispatch(authenticateUser(data));
        if (allData.isAuth === true && data.usertype === 'customer') {
            dispatch(userActions.setId(data.userid))
            history.push("/customer")
        }
        else if (allData.isAuth === true && data.usertype === 'broker') {
            dispatch(userActions.setId(data.userid))
            history.push("/broker")
        }
        else if (allData.isAuth === false) {
            document.getElementById('msg').innerHTML = "Incorrect Credentials!!";
        }
    }

    return (
        <div><NavBar /><br/>
            <div>
                <form className="inner" onSubmit={handleSubmit(onFormHanlder)}>
                    <p className="alert-warning" id="msg"></p>
                    <h3 >Log in</h3>

                    <div className="form-group">
                        <label htmlFor="userid">User Id</label>
                        <input type="text" id="userid" className="form-control" placeholder="Enter Userid"
                            {...register("userid", {
                                required: "Required"
                            })} />
                        <p className="alert-danger">{errors.userid && errors.userid.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter password"
                            {...register("password", {
                                required: "Required"
                            })} />
                        <p className="alert-danger">{errors.password && errors.password.message}</p>
                    </div>

                    <div className="form-group">
                        <label>User Type</label>
                        <select id="usertype" name="usertype" className="form-control"
                            {...register("usertype")}>
                            <option hidden >Select User type</option>
                            <option value="customer">Customer</option>
                            <option value="broker">Broker</option>
                        </select>
                    </div>

                    <div className="form-group ">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <p className="register text-right">
                        New User? <Link to="/signup">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
