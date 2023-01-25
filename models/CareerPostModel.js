import mongoose, { SchemaType, SchemaTypes } from "mongoose";

const CareerPostModel = mongoose.Schema({
    Type:{
        type: String,
        required: true
    },
    Title:{
        type: String,
        required: true
    },
    CompanyName:{
        type: String,
        required: true
    },
    Location:{
        type: String,
        required: true
    },
    Salary:{
        type: SchemaTypes.Number,
    },
    Eligibility:{
        type: String
    },
    ApplyLink:{
        type: String
    }
});

export default mongoose.model("Careers",CareerPostModel);