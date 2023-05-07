import {Request,Response} from "express"
import authFunctions from "../data/login"
export  const loginController = async (req:Request, res:Response)=> {
    const payload = req.body
    const tokens = await authFunctions.generateAuthToken(payload)
    res.json(tokens)
}

export const refreshToken = async(req:Request, res : Response) => {
    const refreshToken = req.body
    const new_access_token = await authFunctions.generateRefreshToken(refreshToken)
    res.json(new_access_token)
}