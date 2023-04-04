import express from "express";
import ExtractProfileURLs from "./Automate/ExtractProfileURLs.js";
import ScrapeProfiles from "./Automate/ScrapeProfile.js";
import SendConnectionRequest from "./Automate/SendConnectionRequest.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/extractUrls", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    const profileUrls = await ExtractProfileURLs(keyword, false);
    res.status(200).json(profileUrls);
  } catch (error) {}
});

app.post("/getProfiles", async (req, res) => {
  try {
    const profileUrls = req.body.profileUrls;
    const profiles = await ScrapeProfiles(profileUrls, false);
    res.status(200).json(profiles);
  } catch (error) {}
});

app.post("/invite", async (req, res) => {
  try {
    const profiles = req.body.profiles;
    const messageTemplate = req.body.messageTemplate;
    console.log(profiles);

    const response = await SendConnectionRequest(profiles, messageTemplate, false);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.listen(3002, () => {
  console.log("Server started at http://localhost:" + 3002);
});
