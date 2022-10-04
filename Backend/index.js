import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/UserModel.js";
// import {registerUser} from "./controllers/AuthController.js";
import AuthRoutes from "./routes/AuthRoute.js";
import EventRoutes from "./routes/EventRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(AuthRoutes);
app.use("/events",EventRoutes);


app.get("/",(req,res)=>{
    // res.json({"msg":"message response"});
    console.log("get login")
});


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("then")
    app.listen(process.env.PORT,()=>{
        console.log("Server started at " + process.env.PORT)
    })
}).catch(e => console.log(e.message));
