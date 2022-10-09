import express from "express";
import {createJobPost, getAllPosts} from "../controllers/CareersController.js";
import requireAuth from "../middlewere/authMiddlewere.js";
const router = express.Router();

router.post("/create",requireAuth, createJobPost);
// router.get("/all", requireAuth ,getAllPosts)
router.get("/all",getAllPosts);

export default router;