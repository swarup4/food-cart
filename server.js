let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require("path");
let route = require("./server/routes/web.js");
let apiRoute = require("./server/routes/api.js");
let jwt = require("jsonwebtoken");
let socketio = require('socket.io');
let http = require('http');

let config = require('./config');
let conf = new config();
console.log(conf.DB_URI);

let app = express();
let port = process.env.port || 3001;

mongoose.connect('mongodb://localhost/shoping').then(() => {
    console.log("Connected");
}).catch(err => {
    console.log("Error : " + err);
})

mongoose.Promise = global.Promise;

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(route);     // Web Route
app.use(apiRoute.users);    // User Router (Token Is Not Required)

app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authtoken;
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, 'shhhhh', function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                console.log(decoded);
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

app.use(apiRoute.order);


let server = http.createServer(app);
let io = socketio(server);
io.on('connection', () => {
    console.log("Socket is Working");
});
server.listen(port, () => {
    console.log("Server is running at : http://localhost:" + port);
});

// node --inspect --debug-brk server.js