const express = require('express');

const router = express.Router();

const {detectPhishing} = require('../services/phishingDetect')
const { checkOpenPhish } = require("../services/openPhish");

router.post("/", async (req,res)=>{
    const{emailContent} = req.body;
    if (!emailContent) return res.status(400).json({ error: "No email content provided" });

    let {riskScore,issue, urls} = detectPhishing(emailContent);
    let maliciousURL = [];

     for (let url of urls){
        if(checkOpenPhishq(url)){
            riskScore += 20;
            maliciousUrls.push(url);
            issue.push(`Phishing URL detected: ${url}`);
        };
    }

    res.json({riskScore, issue, maliciousURL});

});


module.exports = router;