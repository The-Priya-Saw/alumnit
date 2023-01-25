import express from "express";
import multer from "multer";
import path from "path"
import { addEvent, getUpcomingEvents, getPastEvents, getAllEvents} from "../controllers/EventController.js";
import requireAuth from "../middlewere/authMiddlewere.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/events')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname) )
    }
  })
const eventUpload = multer({ storage: storage })

router.post("/add",[requireAuth,eventUpload.single("EventImage")],addEvent);
router.get("/upcoming",getUpcomingEvents);
router.get("/past",getPastEvents);
router.get("/all",getAllEvents);



export default router;