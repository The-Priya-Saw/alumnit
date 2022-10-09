import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import UserModel from "./models/UserModel.js";
// import {registerUser} from "./controllers/AuthController.js";
import AuthRoutes from "./routes/AuthRoute.js";
import EventRoutes from "./routes/EventRoute.js";
import CareersRoute from "./routes/CareersRoute.js";
import CommunityRoutes from "./routes/CommunityRoutes.js"; 
import cookieParser from "cookie-parser";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var whitelist = ['http://localhost:3000', /** other domains if any */ ]
var corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


dotenv.config();

const app = express();
app.use("/public",express.static(path.join(__dirname, '/public')));

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(AuthRoutes);
app.use("/events",EventRoutes);
app.use("/careers",CareersRoute);
app.use("/community",CommunityRoutes);


app.get("/",(req,res)=>{
    // res.json({"msg":"message response"});
    res.cookie("val","1234");
    res.send("cookie sent");
});


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("then")
    app.listen(process.env.PORT,()=>{
        console.log("Server started at " + process.env.PORT)
    })
}).catch(e => console.log(e.message));
