import { axiosPublic } from "../utils/axiosPublic";
export const doLogin = async(data:any) =>{
    const response = await axiosPublic.post("http://localhost:8000/auth/login",data);
    return response.data
}