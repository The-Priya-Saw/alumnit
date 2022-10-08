import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create JWT Tokens
const createToken = (id) => {
    return jwt.sign({id},process.env.SECRET_KEY, {
        expiresIn: process.env.SECRET_KEY_MAX_AGE
    });
}

// handle errors
const handleErrors = (err) => {
    let errors = {};
  
    // duplicate email error
    if (err.code === 11000) {
      errors.Email = 'This Email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('User validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
        
    }
  
    return errors;
  }




const registerUser = async (req,res) => {
    try {
        const {FullName,JobTitle,PassingYear,Email,Password} = req.body;
        const ProfilePicture = `${req.protocol}://${req.get('host')}/${req.file.path}`;
        console.log(ProfilePicture);
        console.log(req.body);
        const User = await UserModel.create({FullName,JobTitle,PassingYear,Email,Password,ProfilePicture});
        const token = createToken(User._id);
        console.log(token);

        // Send JWT token as a cookie
        res.cookie("al_at",token,{maxAge: process.env.SECRET_KEY_MAX_AGE * 15,httpOnly: false});
        res.status(200).json(User);

    } catch (err) {
        const errors = handleErrors(err)
        console.log(err);
        res.status(400).json({error: errors});
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