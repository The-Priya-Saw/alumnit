import express from "express";
import ExtractProfileURLs from "./Automate/ExtractProfileURLs.js";
import ScrapeProfiles from "./Automate/ScrapeProfile.js";
import SendConnectionRequest from "./Automate/SendConnectionRequest.js"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/extractUrls",async (req,res) => {
    const keyword = req.body.keyword;
    const profileUrls = await ExtractProfileURLs(keyword);
    res.status(200).json(profileUrls);
});

app.post("/getProfiles",async (req,res) => {
    const profileUrls =req.body.profileUrls;
    const profiles = await ScrapeProfiles(profileUrls);
    res.status(200).json(profiles);
});

app.post("/invite", async (req,res)=>{
    const profiles = req.body.profiles;
    const response = await SendConnectionRequest(profiles,false);
    res.status(200).json(response);
});

app.listen(3002,()=>{
    console.log("Server started at http://localhost:" + 3002 );
})