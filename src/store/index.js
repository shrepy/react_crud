import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
// import LoginDataSlice from "./LoginData";
import authPageSet from "./loginSignupPage";
import PostReducer from './authSlice'



const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        authpage: authPageSet.reducer,
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    }
})


export default store;