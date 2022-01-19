import axios from "axios";

export const addDealToServer=(deal)=>{
    return axios.post("http://localhost:7000/addDeal",deal)
}