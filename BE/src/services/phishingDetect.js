const e = require('express');
const Spelling = require('spelling');
const dicti = require("spelling/dictionaries/en_US");
const dict = new Spelling(dicti);



const detectPhishing = (email) =>{
    let riskScore = 0;
    let issue = [];
    let errorWords = [];


    const phishingKeywords = [
        "urgent", "verify your account", "update payment", "suspicious activity",
        "click here", "your account will be locked", "confirm your details","Overdue balance",
        "Final notice", "action required", "Congratulations", "Exclusive deal just for you",
        "You’ve been selected for a cash prize"
    ];

    phishingKeywords.forEach((word)=>{
        if(email.toLowerCase().includes(word)){
            riskScore+=10;
            issue.push(`Contains potential phishing phrase" "${word}"`)
        }
    })

    //get url from text

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = email.match(urlRegex) || [];

    const words = email.replace(/[.,:;!?()]/g, "").split(" ");

    console.log({words})
    

     words.forEach(word=>{
         const suggestion = dict.lookup(word);
         if(suggestion.found == false){
            errorWords.push(suggestion.word)
         }
     })
     return{riskScore,issue, urls,errorWords};
};

 module.exports = {detectPhishing};