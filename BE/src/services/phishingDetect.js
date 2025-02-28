const detectPhishing = (email) =>{
    let riskScore = 0;
    let issue = [];

    const phishingKeywords = [
        "urgent", "verify your account", "update payment", "suspicious activity",
        "click here", "your account will be locked", "confirm your details","Overdue balance",
        "Final notice", "action required", "Congratulations", "Exclusive deal just for you",
        "You’ve been selected for a cash prize"
    ];

    phishingKeywords.forEach((word)=>{
        if(email.tolowerCase().includes(word)){
            riskScore+=10;
            issue.push(`Contains potential phishing phrase" "${word}"`)
        }
    })

    //get url from text

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = email.match(urlRegex) || [];

     return{riskScore,issue, urls};
};

 module.exports = {detectPhishing};