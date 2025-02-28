const axios = require("axios"); 

let phishURL = new Set();

const updateOpenPhishData = async () =>{
    try{
        console.log('Latest Data from OpenPhish......')
        const response = await axios.get("https://openphish.com/feed.txt");
        
        
        phishURL =  new Set(response.data.split("\n").map(url=>url.trim())); 

        console.log(`Loaded ${phishURL.size} phishing URLs from OpenPhish.`);
    }catch{
        console.error("Error fetching OpenPhish data:", error);
    }
}

const checkOpenPhish = (url) => {
    return phishURL.has(url);
};

// Update phishing data every 30 minutes
setInterval(updateOpenPhishData, 30 * 60 * 1000);
updateOpenPhishData();

module.exports = {checkOpenPhish};