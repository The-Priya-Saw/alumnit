import EventModel from "../models/EventModel.js";
import mongoose from "mongoose";


const addEvent = async (req,res) => {
    try {
        const {EventName, Date, Location, Description, ApplyUrl} = req.body;
        const Event = await EventModel.create({EventName, Date, Location, Description, ApplyUrl})
        res.status(200).json(Event);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getUpcomingEvents = async (req, res) => {
    try {
        const today = new Date();
        const Events = await EventModel.find({Date: {$gt: today.toISOString()}})
        res.status(200).json(Events);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getPastEvents = async (req, res) => {
    try {
        const today = new Date();
        const Events = await EventModel.find({Date: {$lt: today.toISOString()}})
        res.status(200).json(Events);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getAllEvents = async (req, res) => {
    try {
        const Events = await EventModel.find();
        res.status(200).json(Events);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export {
    addEvent,
    getUpcomingEvents,
    getPastEvents,
    getAllEvents
}