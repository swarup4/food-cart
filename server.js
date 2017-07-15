let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let route = require("./server/router/web.js");
let apiRoute = require("./server/router/api.js");

let app = express();
let port = process.env.port || 3000;

let abspath = __dirname + "/app";

app.use(express.static(__dirname));
app.use(express.static(abspath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(route);
app.use(apiRoute);


app.listen(port, function(){
    console.log("Server is running at : http://localhost:" + port);
});