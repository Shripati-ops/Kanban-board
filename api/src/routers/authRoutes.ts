import express,{Application,Request,Response,Router} from "express"
import { loginController, refreshToken } from "../controllers/loginController"
import { verifyToken } from "../middlewares/verifyToken"
const authRouter:Router = express.Router()

authRouter.post("/login",loginController)
authRouter.post("/refreshToken", verifyToken,refreshToken)

export default authRouter