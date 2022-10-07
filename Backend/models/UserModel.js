import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },

    JobTitle:{
        type: String,
        required: true
    },
    PassingYear:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    ProfilePicture:{
        type: String,
    },
    Password:{
        type: String,
        required: true
    },
});

export default mongoose.model("User",UserModel);