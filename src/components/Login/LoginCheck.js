// import React from "react"
import axios from 'axios'
// import { useDispatch } from "react-redux"
// import LoginDataSlice from "../../store/LoginData"


// const LoginCheck = async(props) => {
//     const data = {"email":props.email,"password":props.password}
//     const resp = await axios.post('http://localhost:8080/auth/sign_in/',data)
//     console.log('LoginData',resp)
//     return resp
    // await dispatch(LoginDataSlice.saveLoginData(resp.headers["access-token"]))
    
// }


// export default LoginCheck



import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const LoginCheck = createAsyncThunk("LoginData/getLoginData",async (props) => {
    const data = {"email":props.email,"password":props.password}
    debugger
    return await axios.post("http://localhost:8080/auth/sign_in/",data).then((res)=>
        res
    );
})


const PostSlice = createSlice((
    {
    name:"loginData",
    initialState:{
        LoginData: [],
        loading: false
    },
    reducers:{
        [LoginCheck.pending]: (state,action) =>{
            state.loading = true
        },
        [LoginCheck.fulfilled]: (state,action) => {
            state.loading = false
            state.LoginData = action.payload
        },
        [LoginCheck.rejected]: (state,action) =>{
            state.loading = false
        }
    }
}))

// export default PostSlice;
export default PostSlice.reducer