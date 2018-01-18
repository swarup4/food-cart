let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require("path");
let route = require("./server/router/web.js");
let apiRoute = require("./server/router/api.js");

let app = express();
let port = process.env.port || 3001;

mongoose.connect('mongodb://localhost/shoping', { useMongoClient: true }, (err) => {
    console.log("Error : " + err);
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(route);
app.use(apiRoute);


app.listen(port, () => {
    console.log("Server is running at : http://localhost:" + port);
});