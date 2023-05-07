import { Application } from "express";
import authRouter from "./authRoutes";

const router = (app:Application) => {
    app.use("/auth", authRouter)
}

export default router