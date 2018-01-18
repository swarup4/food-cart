let express = require("express");
let jwt = require("jsonwebtoken");
let User = require("../models/userModel");

let router = express.Router();

router.get("/", (req, res) => {
    // let user = User.Details;
    let user = User.Auth;
    user.find({}, (err, data) => {
        if (err) {
            res.send("error");
            return;
        } else {
            let decoded = jwt.verify(data[0].password, 'shhhhh');
            console.log(decoded);
            res.send(data);
        }
    });
});

router.post("/signup", (req, res) => {
    let obj = req.body;
    let model = new User.Auth(obj);
    model.password = jwt.sign(obj.password, 'shhhhh');
    model.save((err, user) => {
        if (err) {
            res.send(err);
            return;
        } else {
            console.log("Success");
            // user.password = "";
            let decoded = jwt.verify(user.password, 'shhhhh');
            console.log(decoded)
            res.send(user);
        }
    });
});

router.post("/login", (req, res) => {
    var obj = req.body;
    let user = User.Auth;
    obj.password = jwt.sign(obj.password, 'shhhhh');
    // userObj.status = true;
    user.find(obj, (err, user) => {
        if (err) {
            res.send(err);
            return;
        } else {
            console.log("Success");
            res.send(user);
        }
    });
})

module.exports = router;