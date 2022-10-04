import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/UserModel.js";
import registerUser from "./controllers/AuthController.js";

dotenv.config();

const app = express();

app.use(express.json());
// app.use(cors);

app.post("/login",(req,res) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

// app.post("/register",(req,res) => {
//     const {FullName,JobTitle,PassingYear,Email,ProfilePicture,Password} = req.body;

//     res.status(200).json(req.body);
// })

app.post("/register",registerUser)

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

// app.listen(process.env.PORT,()=>{
//     console.log("Server started at " + process.env.PORT)
// })
