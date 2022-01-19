import React, {useEffect } from 'react'
import "../../Styles/Customer.css"
import { useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { viewCustomerData } from '../../store/CustomerSlice';

function CustomerTable(){

    const dispatch = useDispatch();
    const history = useHistory();
    const allData = useSelector(state => state.customer.customerList)
    //console.log(allData)
    useEffect(() => {
        
    }, []);

    return(
        <div>
            <h2 className="h2">Customer Table</h2>
            <br/><br/>
            <table className="table">
              <thead className="thead-dark">
                <tr className="tr">
                    <th scope="col">Customer Id</th>
                    <th scope="col">Customer Name</th>
                </tr>
              </thead>
              <tbody>
                  {
                      allData.map((customer) => <tr Key ={customer.id}>
                          <th scope="row">{customer.id}</th>
                          <td>{customer.name}</td>
                      </tr>)
                  }
              </tbody>
            </table> 
        </div>
    )
}

export default CustomerTable;