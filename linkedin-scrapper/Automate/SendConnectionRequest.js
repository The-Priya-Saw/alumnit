import * as cheerio from 'cheerio';
import puppeteer from "puppeteer"; 
import fs from "fs";


const selectors = {
	pvsActionButtons: ".ph5 .pvs-profile-actions > *",
	checkConnection: ".ph5 .pvs-profile-actions .entry-point button svg ",
    connectButton: ".ph5 .pvs-profile-actions button.artdeco-button--primary",
    messageButton: ".ph5 .pvs-profile-actions .entry-point",
	actionMessageButton: ".ph5 .pvs-profile-actions a",
	pending: ".ph5 .pvs-profile-actions > button:first-child",
	moreButton: ".ph5 .pvs-profile-actions > div:last-child button",
	moreConnect1: ".ph5 .pvs-overflow-actions-dropdown__content ul li:nth-child(5)",
	moreConnect2: ".ph5 .pvs-overflow-actions-dropdown__content ul li:nth-child(4)",
	addNote: "#artdeco-modal-outlet .send-invite .artdeco-modal__actionbar button:first-child",
	textAreaCustomMessage: "#artdeco-modal-outlet .send-invite textarea#custom-message",
	sendButton: "#artdeco-modal-outlet .send-invite .artdeco-modal__actionbar button:last-child",

}
const cookie = JSON.parse(fs.readFileSync("./cookie.json"));




const SendConnectionRequest = async (profiles,messageTemplate,headless=true) => {
	console.log(profiles)
	function createMessage(fullName){
		if(messageTemplate){
			let splitedMessage =  messageTemplate.split("#$");
			if(splitedMessage.length > 1){
				return splitedMessage[0] + fullName + splitedMessage[1];
			}
		}
		return `Hello ${fullName},\nTesting automated connection request`;
	}
	const response = {};
	// Launch browser
	const browser = await puppeteer.launch({headless: true,userDataDir: './my/path'});

	// Create a new page inside the browser
	const page = await browser.newPage();

	// Set cookie
	await page.setCookie(cookie);

	// Set window size
	await page.setViewport({
        width: 1200,
        height: 1200
    });

	const connect = async (profile) => {
		// load a profile url into a page and that profile will be loaded into page
		await page.goto(profile.url,{ waitUntil: "domcontentloaded" });
		const status = await page.evaluate(()=>{
			return document.location.href
		});
		const messageNote = createMessage(profile.fullName.split(" ")[0]);
		// get Connection Status
		const getConnectionStatus = async () => {
			const pvsActionButtons = await page.waitForSelector(selectors.pvsActionButtons);
			try {
				await page.waitForSelector(selectors.checkConnection,{timeout: 1000});
			} catch (error) {
				// console.log("Connected");
			}
			const connectionStatus = await page.evaluate((selectors)=>{
				const element = document.querySelectorAll(selectors.pvsActionButtons);
				console.log(element);
				if (element.length == 2){
					const checkConnection = document.querySelectorAll(selectors.checkConnection);
					if(checkConnection.length == 0){
						return 1;
					}else{
						console.log("Not Connected");
						return 2;
					}
				}else{
					if(element[0].innerText == "Following" || element[0].innerText == "Follow")
						return 2;
					return 3
				}
			},selectors);
			console.log(connectionStatus);
			return connectionStatus;
		}

		const requestWithNote = async () => {
				const addNoteButton = await page.waitForSelector(selectors.addNote);
				await addNoteButton.click();
			
				const textAreaCustomMessage = await page.waitForSelector(selectors.textAreaCustomMessage);
				await textAreaCustomMessage.focus();
				await textAreaCustomMessage.click();
			
				await page.evaluate((selectors,messageNote)=>{
					const ip = document.querySelector(selectors.textAreaCustomMessage);
					ip.click();
			
					ip.value = messageNote;
				},selectors,messageNote);

				await textAreaCustomMessage.press(".");
				await textAreaCustomMessage.press("Backspace");
				
				const sendButton = await page.waitForSelector(selectors.sendButton);
				// await page.screenshot({path: `${fullName}.png`, fullPage: true})
				await sendButton.focus();
				await sendButton.click();
				response[profile.fullName] = "Sent connetion request";
		}

		const connectionStatus = await getConnectionStatus();

		if(connectionStatus != 1){
			if(connectionStatus == 3){
				console.log("3 buttons");
				const connectButton = await page.waitForSelector(selectors.connectButton);
				await connectButton.click();
				await requestWithNote();
				
			}else if(connectionStatus == 2){
				console.log("2 buttons");
				const moreButton = await page.waitForSelector(selectors.moreButton);
				await moreButton.click();
				const moreConnect = await page.evaluate((selectors) => {
					const element = document.querySelector(selectors.moreConnect1);
					if(element.querySelector("span").innerText == "Report / Block"){
						return selectors.moreConnect2
					}else{
						return selectors.moreConnect1
					}
				},selectors);
				const connectButton = await page.waitForSelector(moreConnect);
				console.log(connectButton.$);
				await connectButton.click();
				await requestWithNote();
			}

		}else{
			console.log("1 buttons");
			response[profile.fullName] = "Already connection exists or pending connection request";
		}
	}

	const message = async (profile) => {
		console.log(profile.fullName);
		await page.setCookie(cookie);
		console.log("Loaded cookie");

		const messageNote = createMessage(profile.fullName.split(" ")[0]);

		// load a profile url into a page and that profile will be loaded into page
		await page.goto(profile.messageUrl,{ waitUntil: "domcontentloaded" });
		const messageForm = await page.waitForSelector(".msg-form__contenteditable");
		console.log("loaded page ");

		await messageForm.focus();
		await messageForm.click();
		await messageForm.press(".");
		await messageForm.focus();
		await messageForm.click();
		console.log("focused ");

		await page.evaluate((messageNote) => {
			document.querySelector(".msg-form__contenteditable p").innerHTML = messageNote;
		},messageNote);
		// await page
		await new Promise(r => setTimeout(r, 2000));

		await messageForm.focus();
		await messageForm.click();
		await messageForm.press(".");
		// await messageForm.press("Backspace");

		const messageFormSendButton = await page.waitForSelector(".msg-form__send-button");
		await messageFormSendButton.focus();

		await messageFormSendButton.click();
		
	}

	for(let i=0;i<profiles.length;i++){
		console.log("Sendning Connection request to " + profiles[i].fullName)
		if(!profiles[i].isConnected){
			await connect(profiles[i]);
		}else{
			console.log("already connected");
			await message(profiles[i]);
			await page.screenshot({path: `testresult${i}.png`, fullPage: true});
			response[i] = "done";
		}
		
	}


	await browser.close();
	return response;
}


// try {
// 	await SendConnectionRequest([{
// 		url: "https://www.linkedin.com/in/ashray-kumar-punase-859545245/",
// 		fullName: "Ashray Kumar Punase"
// 	}]);
// } catch (error) {
// 	console.log(error);
// }

export default SendConnectionRequest;
