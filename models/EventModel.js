import mongoose from "mongoose";

const EventModel = new mongoose.Schema({
    EventName:{
        type: String,
        required: true,
        unique: true
    },

    EventImage:{
        type:String
    },

    Date:{
        type: Date,
        required: true
    },
    Location:{
        type: String,
        required: true
    },
    Description:{
        type: String,
    },
    ApplyUrl:{
        type: String
    }

});

export default mongoose.model("Event",EventModel);