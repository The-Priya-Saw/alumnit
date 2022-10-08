import mongoose from "mongoose";
import bycrypt from "bcrypt";

const UserModel = new mongoose.Schema({
    FullName:{
        type: String,
        required: [true, "Please enter your Full Name"]
    },

    JobTitle:{
        type: String,
        required: [true, "Please enter your Job Title"]
    },
    PassingYear:{
        type: String,
        required: [true, "Please enter your Passing Year"]
    },
    Email:{
        type: String,
        required: [true, "Please enter your Email"],
        unique: true
    },
    ProfilePicture:{
        type: String,
    },
    Password:{
        type: String,
        required: [true, "Please enter your Password"],
        minlength: [8, "Minimum password length is 8 characters"]
    },
});

// Fire function before document is saved to db
UserModel.pre('save', async function(next) {
    const salt = await bycrypt.genSalt();
    console.log(this);
    this.Password = await bycrypt.hash(this.Password,salt);
    next();
})

// // Login Method
// UserModel.static.login = async function(Email, Password){
//     console.log("Login")
//     const user = await this.findOne({Email});
//     // console.log(user);
//     if(user){
//         const auth = await bycrypt.compare(Password,user.Password);
//         if(auth){
//             return user;
//         }
//         throw Error("incorrect password")
//     }
//     throw Error("incorrect email");

// }

export default mongoose.model("User",UserModel);