import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "./CustomerSlice";
import { propertySlice } from "./PropertySlice";
import { userSlice } from "./UserSlice";


const appStore = configureStore({
    reducer : {user:userSlice.reducer,customer:customerSlice.reducer,property:propertySlice.reducer}
})

export default appStore;