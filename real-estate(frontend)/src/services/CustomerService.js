import axios from "axios";

export const addCustomerToServer = (customer) =>{
    return axios.post("http://localhost:7000/addCustomer",customer);     //give url inside the quotes
}

export const getAllCustomerFromServer =()=>{
return axios.get("http://localhost:7000/allCustomers");
}

export const updateCustomerToServer =(customer)=>{
    return axios.put("http://localhost:7000/updateCustomer",customer);
} 

export const getCustomerByIdFromServer = (id)=>{
    return axios.get("http://localhost:7000/viewCustomer/"+id);
}

export const deleteCustomerFromServer = (id)=>{
    return axios.delete("http://localhost:7000/deleteCustomer/"+id);
}

export const customerPropertyFromServer = (id)=>{
    return axios.get("http://localhost:7000/customerProperties/"+id)
}
