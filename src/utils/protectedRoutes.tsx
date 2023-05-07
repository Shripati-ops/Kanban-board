import React, { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
const ProtectedRoutes = (props:any)=> {
    const isLoggedIn = useRef(false);
    const router = useNavigate();
    const checkIfUserIsLoggedIn = () => {
        console.log(localStorage.getItem('tokens'))
        if(localStorage.getItem('tokens') != null){
            isLoggedIn.current = true;  
        }
        else{
            isLoggedIn.current = false;
            return router("/auth/login");
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

export default ProtectedRoutes