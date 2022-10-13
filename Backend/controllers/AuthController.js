import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";

import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Add credentials: 'include' else cookie nahi store hogi browser me


// Create JWT Tokens
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
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


    // Incorrect Email Login
    if (err.message === "incorrect email") {
        errors.Email = "incorrect email";
    }

    // Incorrect Password Login
    if (err.message === "incorrect password") {
        errors.Password = "incorrect password";
    }

    // validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });

    }

    return errors;
}




const registerUser = async (req, res) => {
    try {
        const { FullName, JobTitle, PassingYear, Email, Password } = req.body;
        const ProfilePicture = req.file && `${req.protocol}://${req.get('host')}/${req.file.path}`;
        console.log(ProfilePicture);
        console.log(req.body);
        const User = await UserModel.create({ FullName, JobTitle, PassingYear, Email, Password, ProfilePicture });
        const token = createToken(User._id);
        console.log(token);

        // Send JWT token as a cookie
        res.cookie("al_at", token, { maxAge: process.env.SECRET_KEY_MAX_AGE, httpOnly: false });
        res.status(200).json({ user: User._id });

    } catch (err) {
        const errors = handleErrors(err)
        console.log(err);
        res.status(400).json({ error: errors });
    }
}

const loginUser = async (req, res) => {
    const { Email, Password } = req.body;
    console.log(req.body);
    try {
        const User = await UserModel.findOne({ Email: Email });
        if (User) {
            const auth = await bycrypt.compare(Password, User.Password);
            if (auth) {
                const token = createToken(User._id);

                // Send JWT token as a cookie
                User.Password = undefined;
                res.cookie("al_at", token, { maxAge: process.env.SECRET_KEY_MAX_AGE, httpOnly: false });
                res.status(200).json({ user: User });
            } else {
                throw Error("incorrect password");
            }

        } else { throw Error("incorrect email"); }
    } catch (error) {
        const errors = handleErrors(error);
        console.log(error);
        res.status(403).json({ error: errors });
    }
}

const logout = (req,res) => {
    console.log("Log out", res.cookies);
    res.cookie("al_at", "", { maxAge: 1, httpOnly: false });
    
    res.status(200).json({message:"logged out"});
}

const checkUser = async (req, res) => {
    try {
        const User = await UserModel.findById(req.decodedToken.id);
        User.Password = undefined;
        console.log("Checking user: " + req.decodedToken.id);
        res.status(200).json({ User });
    } catch (error) {
        console.log(error.message);
        res.status(403).json({error:error.message});
    }
}


export {
    registerUser,
    loginUser,
    checkUser,
    logout
};