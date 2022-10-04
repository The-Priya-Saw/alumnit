import express from "express";
import { addEvent, getUpcomingEvents, getPastEvents, getAllEvents} from "../controllers/EventController.js";
const router = express.Router();


router.post("/add",addEvent);
router.get("/upcoming",getUpcomingEvents);
router.get("/past",getPastEvents);
router.get("/all",getAllEvents);



export default router;