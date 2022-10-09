import CommunityPostModel from "../models/CommunityPostModel.js";
import express from "express";
import UserModel from "../models/UserModel.js";

const createCommunityPost = async (req,res) => {
    try {
        const {UserID, TextContent, PostDate} = req.body;
        const ImageContent = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path}` : "";
        const Post = await CommunityPostModel.create({UserID, TextContent, PostDate, ImageContent});
        if(Post){
            res.status(200).json(Post);
        }else{
            throw Error("Error occured while posting");
        }
    } catch (error) {
        res.status(403).json(error);
    }

}

const getAllCommunityPosts = async (req,res) => {
    try {
        const Posts = await CommunityPostModel.find();
        const newPosts = [];
        for(let i=0;i<Posts.length;i++){
            const User = await UserModel.findById(Posts[i].UserID);
            console.log(User);
            Posts[i]._doc["Username"] = User.FullName;
            Posts[i]._doc["ProfilePicture"] = User.ProfilePicture;
            newPosts.push(Posts[i]._doc);
        }
        res.status(200).json(newPosts.reverse());
    } catch (error) {
        res.status(403).json(error);
    } 
}


export {createCommunityPost,getAllCommunityPosts};