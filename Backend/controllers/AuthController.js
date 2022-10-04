import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";

const registerUser = async (req,res) => {
    try{
        const User = await UserModel.create(req.body);
        res.status(200).json(User);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

export default registerUser;