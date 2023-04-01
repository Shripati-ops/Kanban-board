import { axiosPublic } from "./axiosPublic";

export const refreshToken = async() => {
    const rawToken = localStorage.getItem("token")
    var token : any;
    if(rawToken != null){
        token = JSON.parse(rawToken)
    }
    try {
        const response = await axiosPublic.post("auth/refresh", {refreshToken : token});
        const session = response.data
        return session
    }catch (error) {
        console.log(error)
    }
}