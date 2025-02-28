const express = require('express');

const {detectPhishing} = require('../services/phishingDetect')
const { checkOpenPhish } = require("../services/openPhish");

const router = express.Router();

router.post("/", async (req,res)=>{
    const{emailContent} = req.body;
    if (!emailContent) return res.status(400).json({ error: "No email content provided" });

    let {riskScore,issue, urls,errorWords} = detectPhishing(emailContent);
    let maliciousURL = [];

     for (let url of urls){
        if(checkOpenPhish(url)){
            riskScore.link += 20;
            maliciousURL.push(url);
        };
    }


    

    res.json({riskScore, issue, maliciousURL, errorWords});

});


module.exports = router;