import { createSlice } from "@reduxjs/toolkit";
import { addCustomerToServer, customerPropertyFromServer, deleteCustomerFromServer, getAllCustomerFromServer, getCustomerByIdFromServer, updateCustomerToServer } from "../services/CustomerService";

export const customerSlice = createSlice({
    name : 'customerData',
    initialState : {customerList : []},
    reducers:{
        viewCustomer(state,action){
            state.customerList = action.payload;
        },
        allCustomers(state,action){
            this.state.customerList = action.payload;
        },
        addCustomer(state,action){
            const newCustomer = action.payload;
            const newlist = [newCustomer, ...state.customerList];
            state.customerList = newlist;
        },
        updateCustomer(state,action){
            const newCustomer = action.payload;
            const newlist = [newCustomer, ...state.customerList];
            state.customerList = newlist;
        },
        deleteCustomer(state,action){
            const userid = action.payload;
            const newList = state.customerList.filter( customer => customer.userid !==userid );
            state.customerList = newList;
        },
        myProperties(state,action){
            state.customerList = action.payload;
        }
    }
})

export const viewCustomerProperty = (id) => {
    return async (dispatch) => {
        const { data } = await customerPropertyFromServer(id);
        dispatch(customerActions.myProperties(data))
    }
}

export const viewCustomerData = (id) => {
    return async (dispatch) => {
        const { data } = await getCustomerByIdFromServer(id);
        dispatch(customerActions.viewCustomer(id))
    }
}

export const allCustomerData = () => {
    return async (dispatch) => {
        const { data } = await getAllCustomerFromServer();
        dispatch(customerActions.allCustomers(data))
    }
}

export const addCustomerData = (customer) => {
    return async (dispatch) => {
        const { data } = await addCustomerToServer(customer);
        dispatch(customerActions.addCustomer(data))
    }
}

export const updateCustomerData = (customer) => {
    return async (dispatch) => {
        const { data } = await updateCustomerToServer(customer);
        dispatch(customerActions.updateCustomer(data))
    }
}

export const deleteCustomerData = (userid) => {
    return async (dispatch) => {
        const { data } = await deleteCustomerFromServer(userid);
        dispatch(customerActions.deleteCustomer(userid))
    }
}

export const customerActions= customerSlice.actions;
