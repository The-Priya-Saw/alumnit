import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";


const requireAuth = (req, res, next) => {
    const token = req.cookies.al_at;
    const SECRET_KEY='8c1f74a6beff453fd9e32ec3d29ec9e26dfa1a36'
    if(token){
        jwt.verify(token, process.env.SECRET_KEY || SECRET_KEY, (err,decodedToken) => {
            if(err){
                console.log(err.message);
                res.status(403).json({error:"token is not valid"});
            }else{
                console.log("Decoded token ",decodedToken);
                req.decodedToken = decodedToken;
                next();
            }

        });
    }else{
        console.log(req.cookies);
        res.status(403).json({error:"not logged in"});
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