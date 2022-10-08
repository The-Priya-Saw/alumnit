import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

const requireAuth = (req, res, next) => {
    const token = req.cookies.al_at;
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err,decodedToken) => {
            if(err){
                console.log(err.message);
                res.status(403).json({error:"token is not valid"});
            }else{
                console.log(decodedToken);
                next();
            }

        });
    }else{
        console.log(req.cookies);
        res.status(403).json({redirect:"/login"});
    }
}

// const checkUser = (req,res,next) => {
//     const token = req.cookies.al_at;
//     if(token){
//         jwt.verify(token, process.env.SECRET_KEY, async (err,decodedToken) => {
//             if(err){
//                 console.log(err.message);
//                 // res.status(403).json({redirect:"/login"});
//                 next();
//             }else{
//                 console.log(decodedToken);
//                 const user = await UserModel.findById(decodedToken.id);
//                 next(); 
//             }

//         });
//     }else{

//     }
// }

export default requireAuth;