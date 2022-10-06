import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const registerUser = async (req,res) => {
    // try{
    //     const User = await UserModel.create(req.body);
    //     res.status(200).json(User);
    // }catch(error){
    //     res.status(400).json({error:error.message});
    // }
    try {
        const {FullName,JobTitle,PassingYear,Email,Password} = req.body;
        const ProfilePicture = `${req.protocol}://${req.get('host')}/${req.file.path}`;
        console.log(ProfilePicture);
        console.log(req.body);
        const User = await UserModel.create({FullName,JobTitle,PassingYear,Email,Password,ProfilePicture});
        res.status(200).json(User);

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const loginUser = async (req,res) => {
    const {Email,Password} = req.body;
    console.log(req.body);
    try {
        const User = await UserModel.findOne({Email: Email,Password: Password}).exec();
        if(User){
            res.status(200).json(User)
        }else{
            throw "Invalid Email / Password!";
        }
    } catch (error) {
        console.log("Error Occured")
        console.log(error);
        res.status(403).json({error: error});
    }
}

// export default registerUser;

export {
    registerUser,
    loginUser
};