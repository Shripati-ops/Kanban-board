import login from "../pages/login"
import Register from "../pages/register"

export const auth = [
    {
        path : "auth/login",
        component : login,
        exact : true,
        requiresAuthentication : false
    },
    {
        path : "auth/register",
        component : Register,
        exact : true,
        requiresAuthentication : false
    }
]