import { configureStore,combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/common/counterSlice";
import authReducer from "./features/auth/authSlice";
 
const rootReducer = combineReducers({counterReducer : counterReducer, authReducer : authReducer})
const store = configureStore({reducer:rootReducer})

export default store