import express from "express"
import cors from "cors"
import router from "./routers"
import connect from "./utils/connection"
const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}));
router(app)
connect()
app.listen(8000,()=>{
    console.log("App listening on port 8000")
})
