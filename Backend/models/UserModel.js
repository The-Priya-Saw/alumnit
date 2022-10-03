import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },

    JobTilte:{
        type: String,
        required: true
    },
   passingYear:{
        type: Date,
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