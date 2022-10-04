import CareerPostModel from "../models/CareerPostModel.js";

const createJobPost = async (req,res) => {
    try {
        const {Type,Title,CompanyName,Location,Salary,Eligibility,ApplyLink} = req.body;
        const JobPost = await CareerPostModel.create({Type,Title,CompanyName,Location,Salary,Eligibility,ApplyLink});
        res.status(200).json(JobPost);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getAllPosts = async(req,res) => {
    try {
        const posts = await CareerPostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export {
    createJobPost,
    getAllPosts
}