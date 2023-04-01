import { configureStore,combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/common/counterSlice";
 
const rootReducer = combineReducers({counterReducer : counterReducer})
const store = configureStore({reducer:rootReducer})

export default store