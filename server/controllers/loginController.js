let express = require("express");
let user = require("../models/userModel");

let router = express.Router();

router.get("/", (req, res) => {
    
});

router.post("/signup", (req, res) => {
    console.log(req.body);
    var obj = req.body;
    var model = new user.auth(obj);
    console.log(model);
    // model.save(function(err) {
    //     if (err) {
    //         res.send("error");
    //         return;
    //     }
    //     res.send("created");
    // });
})

module.exports = router;