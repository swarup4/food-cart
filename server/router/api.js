let express = require("express");
let loginRouter = express.Router();
let orderRouter = express.Router();

let loginController = require("../controllers/loginController.js");

let apiRouteObj = {};

apiRouteObj.users = loginRouter.use("/api/login", loginController);

module.exports = apiRouteObj;