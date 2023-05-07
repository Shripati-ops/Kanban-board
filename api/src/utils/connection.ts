import mongoose from "mongoose";
import * as config from "../config/config.json"
const connect = () => {
    mongoose.connect(config.mongooseURL.serverURL + "/" + config.mongooseURL.database).then(() => {
        console.log("connection made successfully")
    }).catch((error) => {
        console.log(error)
    })
}

export default connect