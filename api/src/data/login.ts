import jwt from 'jsonwebtoken'
import userModel from '../models/users';
const {sign} = jwt;
const authFunctions = {
    'generateAuthToken' : (payload : any) => {
        const username = payload.username
        const password = payload.password

        const tokens = userModel.findOne({username: username}).then((res) => {
            
            const accessToken = sign({username : res?.username, password : res?.password},"accesssecret",{expiresIn : '20m'})
            const refreshToken = sign({username : res?.username, password : res?.password},"refreshsecret",{expiresIn : '1d'})

            return {accessToken,refreshToken}
        })
        return tokens
    },
    'generateRefreshToken' : (payload : any) => {
        const Accesstoken = sign({email : payload.email, password : payload.password},"key",{expiresIn:"20m"})
        return Accesstoken;
    }
}

export default authFunctions