import { createSlice } from "@reduxjs/toolkit";
import { addCustomerToServer, customerPropertyFromServer, deleteCustomerFromServer, getAllCustomerFromServer, getCustomerByIdFromServer, updateCustomerToServer } from "../services/CustomerService";
import { addDealToServer } from "../services/DealService";

export const DealSlice = createSlice({
    name : 'dealData',
    initialState : {dealList : []},
    reducers:{
        addDeal(state,action){
            state.dealList=action.payload;
        }
    }
})

export const makeDealHappen=(deal)=>{
    return async (dispatch) => {
        const { data } = await addDealToServer(deal);
        dispatch(dealActions.addDeal(data))
    }
}

export const dealActions=DealSlice.actions;