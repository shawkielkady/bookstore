import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name: "auth",
    initialState:{loggedin:false , user:"enoo"},
    reducers:{
        loginout: (state)=>{
            state.loggedin = !state.loggedin;
        }
    }
})
export const {loginout} = authSlice.actions;
export default authSlice.reducer;