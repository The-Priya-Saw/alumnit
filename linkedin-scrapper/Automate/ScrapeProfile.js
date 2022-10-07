import * as cheerio from 'cheerio';
import puppeteer from "puppeteer";
import fs from "fs";

const cookie = JSON.parse(fs.readFileSync("./cookie.json"));
const selectors = {
    profileImg: ".ph5.pb5 > .display-flex > div img",
    fullName: ".ph5.pb5 > .mt2 h1",
    title: ".ph5.pb5 > .mt2 .text-body-medium",
    location: ".ph5.pb5 > .mt2 .pv-text-details__left-panel:last-child span.text-body-small",
    education: {
        sectionTitle: "main#main section #education +div span",
        listItems: "main#main section #education +div + div ul.ph5 > li",
        title: "div.display-flex a > div span span:first-child",
        degree: "div.display-flex a > div+span>span:first-child",
        date: "div.display-flex a > div + span + span > span:first-child"
    }
}


const ScrapeProfiles = async (profileURL,headless=true) => {
    const profiles = [];
    const browser = await puppeteer.launch({headless: headless,userDataDir: './my/path'});
    const page  = await browser.newPage();
    await page.setCookie(cookie);
    await page.setViewport({
        width: 1200,
        height: 1200
    });
    for(let i=0;i<profileURL.length;i++){
        const profile = {};
        profile.url = profileURL[i];
        // await page.goto(profileURL[i],{waitUntil: 'domcontentloaded'});
        await page.goto(profileURL[i]);
        const reuslt = await page.evaluate(() => {
            return document.documentElement.innerHTML;
        });
        
        const $ = cheerio.load(reuslt);
        const fullName = $(selectors.fullName).text();
        profile.fullName = fullName;
        console.log(fullName);
    
        const profileImg = $(selectors.profileImg).attr("src");
        profile.profileImg = profileImg;
        console.log(profileImg);
    
        const title = $(selectors.title).text().trim();
        profile.title = title;
        console.log(title);
    
        const location = $(selectors.location).text().trim();
        profile.location = location;
        console.log(location);
    
    
        const educationSectionTitle = $(selectors.education.sectionTitle);
        console.log(educationSectionTitle.text());
    
        console.log()
        const educationList = $(selectors.education.listItems);
    
        profile.education = [];
        Array.from(educationList).forEach(li => {
            const educationItem = {}
            const title = $(li).find(selectors.education.title).text();
            educationItem.title = title;
            console.log(title);
            
            const degree = $(li).find(selectors.education.degree).text();
            educationItem.degree = degree;
            console.log(degree)
           
            const date = $(li).find(selectors.education.date).text();
            educationItem.date = date;
            console.log(date);
    
            profile.education.push(educationItem);
            console.log()
        });
    
        // console.log(profile);
        profiles.push(profile);
    }
    await browser.close();
    console.log(profiles);
    return profiles;
}



// ScrapeProfile(profileURLS);
export default ScrapeProfiles;