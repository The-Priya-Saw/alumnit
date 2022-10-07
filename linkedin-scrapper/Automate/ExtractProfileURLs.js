// const puppeteer = require("puppeteer");
import * as cheerio from 'cheerio';
import puppeteer from "puppeteer";
import fs from "fs";


const cookie = JSON.parse(fs.readFileSync("./cookie.json"));


function getSearchURL(keyword){
    const urlEncoded = encodeURI(keyword);
    let url = `https://www.linkedin.com/search/results/people/?keywords=${urlEncoded}&origin=GLOBAL_SEARCH_HEADER&schoolFilter=%5B%2213378199%22%5D&sid=ZAt`;
    return url;
}

const ExtractProfileURLs = async (name,headless=true) => {

    const browser = await puppeteer.launch({headless: headless,userDataDir: './my/path'});
    const page = await browser.newPage();
    
    await page.setCookie(cookie);
    await page.setViewport({
        width: 1200,
        height: 1200
    });
    await page.goto(getSearchURL(name));
    const baseUrl = await page.url();
    console.log(baseUrl);
    const result = await page.evaluate(()=>{
        // page.reload();
        return document.documentElement.innerHTML;

    });

    let $ = cheerio.load(result);
    const bottomNav = $(".artdeco-pagination.artdeco-pagination--has-controls.ember-view.pv5.ph2");
    
    let numberOfPages = $(bottomNav).find("ul button").length;
    numberOfPages = numberOfPages == 0 ? 1 : numberOfPages;
    console.log("Total Pages: " + numberOfPages);
    const profileURLS = [];

    // Loop through all pages
    for(let i=1;i<=numberOfPages;i++){
        if(i > 1){
            // Change to the next Page
            await page.goto(baseUrl+"&page="+i);
            const result = await page.evaluate(()=>{
                // page.reload();
                return document.documentElement.innerHTML;
        
            });
            $ = cheerio.load(result);
        }
        const dataArray = Array.from($(".entity-result__item .entity-result__title-text .app-aware-link"));
        const urls = dataArray.map(a => $(a).attr("href").split("?")[0]);
        profileURLS.push(...urls);
        console.log(`Page ${i} done`);
    }
    // console.log(profileURLS);


    await browser.close();
    return profileURLS;
};


export default ExtractProfileURLs;


