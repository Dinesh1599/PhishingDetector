const express = require('express');

const router = express.Router();

const {detectPhishing} = require('../services/phishingDetect')

router.post("/", async (req,res)=>{
    const{emailContent} = req.body;
    if (!emailContent) return res.status(400).json({ error: "No email content provided" });

    let {riskScore,issue, urls} = detectPhishing(emailContent);
    let maliciousURL = [];

     for (let url of urls){
        const isPhishing = await checkPhishing(url);
         if(isPhishing) {
            riskScore +=20;
            maliciousURL.push(url);
            issue.push(`Phishing URL found: ${url}`)
        }
    }

    res.json({riskScore, issues, maliciousURL});

});


module.exports = router;