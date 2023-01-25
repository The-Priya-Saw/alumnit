import express from "express";
import { createCommunityPost,getAllCommunityPosts } from "../controllers/CommunityController.js";
import requireAuth from "../middlewere/authMiddlewere.js";
import multer from "multer";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const router = express.Router();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/community')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname) )
    }
  })
const communityUpload = multer({ storage: storage })

router.post("/createPost", [requireAuth,communityUpload.single("ImageContent")], createCommunityPost);
router.get("/getAllPosts", getAllCommunityPosts);

export default router;