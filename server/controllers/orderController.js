let express = require("express");
let router = express.Router();
let events = require('events');
let event = new events.EventEmitter();

event.on("Hello", function(){
    console.log("Event Call");
});

router.get("/allOrder", (req, res, next) => {
    event.emit("Hello", "First Event");
    next();
});

module.exports = router;