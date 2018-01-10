let express = require("express");
let User = require("../models/userModel");

let router = express.Router();

router.get("/", (req, res) => {
    let user = User.Details;
    user.find({}, (err, data) => {
        if (err) {
            res.send("error");
            return;
        } else {
            res.send(data);
        }
    });
});

router.post("/signup", (req, res) => {
    var obj = req.body;
    var model = new User.Auth(obj);
    // console.log(model);
    model.save(err => {
        if (err) {
            res.send("error");
            return;
        } else {
            res.send("created");
        }
    });
})

module.exports = router;