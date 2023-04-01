import React, { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
const protectedRoutes = (props:any)=> {
    const isLoggedIn = useRef(false);
    const router = useNavigate();
    const checkIfUserIsLoggedIn = () => {
        if(localStorage.getItem('token') != null){
            isLoggedIn.current = true;  
        }
        else{
            isLoggedIn.current = false;
            return router("/login");
        }
    }

    useEffect(() => {
        checkIfUserIsLoggedIn()
    },[isLoggedIn])

    return(
        <React.Fragment>
            {isLoggedIn ? props.children : null}
        </React.Fragment>
    )

}

export default protectedRoutes