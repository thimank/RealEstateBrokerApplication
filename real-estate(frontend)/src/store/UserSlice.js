import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addUserToServer, getUserByIdFromServer, getUsersFromServer, userLogin } from "../services/UserService";

export const userSlice = createSlice({
    name: 'userData',
    initialState: { userList: [],isAuth:false,userid:''},
    reducers: {
        getUsers(state, action) {
            state.userList = action.payload;
        },
        login(state,action){
            if(action.payload===true){
            state.isAuth=true;
          }
        },
        logout(state){
            state.isAuth=false;
        },
        getById(state,action){
            state.userList=action.payload;
        },
        setId(state,action){
            state.userid=action.payload
        },
        addUser(state,action){
            state.userList=[action.payload,...state.userList]
        }
    }
});

export const addUserDetails=(user)=>{
    return async (dispatch) => {
        const { data } = await addUserToServer(user);
        dispatch(userActions.addUser(data))
    }
}

export const fetchUserData = () => {
    return async (dispatch) => {
        const { data } = await getUsersFromServer();
        dispatch(userActions.getUsers(data))
    }
}

export const authenticateUser=(currentData)=>{
    return async (dispatch) => {
        const { data:newData } = await userLogin(currentData);
        dispatch(userActions.login(newData))
    }
}

export const fetchUserById = (id) => {
    return async (dispatch) => {
        const { data } = await getUserByIdFromServer(id);
        dispatch(userActions.getById(data))
    }
}

export const userActions = userSlice.actions;