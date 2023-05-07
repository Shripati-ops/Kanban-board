import {increaseCounter} from "../stores/features/common/counterSlice"
import { useSelector,useDispatch } from "react-redux"
// import { logout } from "../stores/features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { auth } from "../router/auth.route"
export const kanbanBoard = () => {
    const navigate = useNavigate()
    const {authSlice} = useSelector((state:any) => state.authReducer)
    const dispatch = useDispatch()
    const {counter} = useSelector((state:any) => state.counterReducer)

    const logoutNew = () => {
        // dispatch(logout())
        navigate('/auth/login')
    }
    return (
        <div>
            <h1> Hello World!</h1>
            <button onClick={() => dispatch(increaseCounter())}>
                Count is {counter}
            </button>
            <br/>
            <button onClick = {() => {logoutNew()}}> logout</button>


        </div>
        )
}