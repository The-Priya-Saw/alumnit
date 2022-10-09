import mongoose, { Schema } from "mongoose";

const CommunityPostSchema = mongoose.Schema({
    UserID:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    TextContent:{
        type: String,
        required: true
    },
    ImageContent:{
        type: String
    },
    PostDate:{
        type: Date,
        required: true
    },
    Comments:{
        type: mongoose.Types.ObjectId
    },
    Likes: {
        type: mongoose.Types.ObjectId
    }
});

export default mongoose.model("CommunityPost",CommunityPostSchema);