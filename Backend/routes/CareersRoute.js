import express from "express";
import {createJobPost, getAllPosts} from "../controllers/CareersController.js";
const router = express.Router();

router.post("/create", createJobPost);
router.get("/all", getAllPosts)

export default router;