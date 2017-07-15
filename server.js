let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();

app.get("/", function(req, res, next){
    res.sendFile("index.html");
})

app.listen(3000, function(){
    console.log("Running");
})