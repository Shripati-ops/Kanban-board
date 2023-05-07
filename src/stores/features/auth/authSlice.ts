import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";



const authSlice = createSlice({
    name : 'authSlice',
    initialState : {tokens : {accessToken : '', refreshToken : ''}, status : ''},
    reducers : {
        login : (state,action) => {
                    state.tokens.accessToken = action.payload.accessToken
                    state.tokens.refreshToken = action.payload.refreshToken
                    localStorage.setItem("tokens", JSON.stringify(state.tokens))
             
        }
    }
})


export const {login} = authSlice.actions;
export default authSlice.reducer;
