import { createSlice } from "@reduxjs/toolkit";
import { getPropertiesFromServer,addPropertyToServer,deletePropertyFomServer, availablePropertyFromServer, getByCriteriaFromServer } from "../services/PropertyService";

export const propertySlice = createSlice({
    name: 'propertyData',
    initialState: { propertyList: [] },
    reducers: {
        getPropertyList(state, action) {
            state.propertyList = action.payload;
        },
        addProperty(state, action) {
            state.propertyList = action.payload;
        },
        deleteProperty(state, action) {
            state.propertyList = action.payload;
        },
        availableProperty(state,action){
            state.propertyList=action.payload
        },
        searchProperty(state,action){
            state.propertyList=action.payload
        }
    }
});

export const searchProperty = (criteria) => {
    return async (dispatch) => {
        const { data } = await getByCriteriaFromServer(criteria);
        dispatch(propertyActions.getPropertyList(data))
    }
}

export const fetchPropertyData = () => {
    return async (dispatch) => {
        const { data } = await getPropertiesFromServer();
        dispatch(propertyActions.getPropertyList(data))
    }
}
export const fetchAvailableProperty = () => {
    return async (dispatch) => {
        const { data } = await availablePropertyFromServer();
        dispatch(propertyActions.availableProperty(data))
    }
}
export const addingProperty = (property) => {
    return async (dispatch) => {
        console.log(property)
        const { data } = await addPropertyToServer(property);
        dispatch(propertyActions.addProperty(data))
    }
}
export const deletingProperty = (propId) => {
    return async (dispatch) => {
        const { data } = await deletePropertyFomServer(propId);
        dispatch(propertyActions.deleteProperty(data))
    }
}

export const propertyActions = propertySlice.actions