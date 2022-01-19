import axios from "axios";

export const getPropertiesFromServer=()=>{
    return axios.get("http://localhost:7000/allProperties")
}
export const addPropertyToServer=(property)=>{
    return axios.post("http://localhost:7000/addProperty",property)
}
export const updatePropertyToServer=(property)=>{
    return axios.put("http://localhost:7000/editProperty",property)
}
export const deletePropertyFomServer=(propId)=>{
    return axios.delete("http://localhost:7000/removeProperty/"+propId)
}
export const availablePropertyFromServer=()=>{
    return axios.get("http://localhost:7000/availableProperty")
}
export const getByCriteriaFromServer=(criteria)=>{
    return axios.post("http://localhost:7000/criteria",criteria)
}