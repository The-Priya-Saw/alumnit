import express from "express";
const router = express.Router();
import {registerUser,loginUser} from "../controllers/AuthController.js";
import multer from "multer";
import path from "path"


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/profile')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname) )
    }
  })
const profileUpload = multer({ storage: storage })

router.post("/register",profileUpload.single("ProfilePicture"),registerUser);
router.post("/login",loginUser);

export default router;