let express = require("express");
let jwt = require("jsonwebtoken");
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
    model.password = jwt.sign(obj.password, 'shhhhh');
    console.log(model);
    // res.json({
    //     token: token
    // })
    model.save((err, user) => {
        if (err) {
            console.log(err);
            res.send("error");
            return;
        } else {
            console.log("Success");
            user.password = "";
            res.send(user);
        }
    });
})

module.exports = router;