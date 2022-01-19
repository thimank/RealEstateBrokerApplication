import axios from "axios";

export const getUsersFromServer=()=>{
    return axios.get("http://localhost:7000/allUsers");
}

export const userLogin=(user)=>{
    return axios.post("http://localhost:7000/login",user);
}

export const getUserByIdFromServer=(id)=>{
    return axios.get("http://localhost:7000/user/"+id);
}

export const addUserToServer=(user)=>{
    return axios.put("http://localhost:7000/addUser",user);
}