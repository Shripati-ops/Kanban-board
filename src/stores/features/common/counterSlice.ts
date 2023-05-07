// Demo Reducer
import { createSlice } from "@reduxjs/toolkit";
const counter = createSlice({name : 'counter', initialState : {counter : 0}, reducers : {
    increaseCounter : (state)=> {
        state.counter++       
    } 
}}) 
const {actions, reducer} = counter
const counterReducer = reducer
export const {increaseCounter} = actions;
export default counterReducer;