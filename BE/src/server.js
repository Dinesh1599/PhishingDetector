const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


//All Routes are mentioned here
const analyzeRoute = require('./routes/analyzeRoute')

const app = express();
const PORT = process.env.PORT || 5000;

app.use (cors());
app.use (bodyParser.json());

//use Routes
app.use("/analyze", analyzeRoute)
app.listen(PORT, ()=> console.log(`Server Running on ${PORT}`))

